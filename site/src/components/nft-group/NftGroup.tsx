import { useEffect, useState, type ReactNode } from "react"
import { useWallet } from "../../context/wallet/useWalletData"
import { getNftRepo } from "../../data/nft-repo/NftRepo"
import type { ICategory } from "../../lib/types/ICategory"
import type { INft } from "../../lib/types/INft"
import { signMessage } from "../../lib/util/signMessage"
import NftItem from "../nft-item/NftItem"
import "./NftGroup.scss"

export default function NftGroup({
	category,
	showModal
}: {
	category: ICategory
	showModal: (nft: INft, onClose?: () => void) => Promise<void>
}) {


	const wallet = useWallet()

	const [nfts, setNfts] = useState<ReactNode[]>([])
	const [available, setAvailable] = useState<number>(category.available)

	useEffect(() => {
		const asyncWrapperFunc = async () => {
			const data = await getNftRepo().getFiltered({ category: category.name })
			if (data === undefined)
				setNfts([])
			else {
				const jsx = data.map(_ => (
					<NftItem nft={_} onMint={handleMint} available={available} key={_.image} />
				))
				setNfts(jsx)
			}
		}
		asyncWrapperFunc()

		async function handleMint(nft: INft) {
			if (available === 0) return
			if (!isConnected()) {
				alert("Connect to the wallet first!")
				return
			}

			const signature = await signMessage(wallet.ethereum!, `Minting ${nft.name}`)

			// If signing succeded
			if (signature && signature.trim().length > 0) {
				const afterClosingCallback = () => {
					setAvailable(available - 1)
				}
				await showModal(nft, afterClosingCallback)
			}

		}
		const isConnected = () => wallet.address !== ""

	}, [category, available, wallet, showModal])


	const exhausted = () => {
		return available === 0
	}

	return (
		<div className={`ntfgroup-root box col b-radius-3 flex-wrap ${exhausted() ? "exhausted" : ""}`} >
			<div className="flex-ali-ite-cen">
				<h3>{category.name}</h3>
			</div>
			<div>
				{available > 0
					? `you have ${available} available`
					: `You have no mo' left on this ${category.name}`}
			</div>
			<div className="row">
				{nfts}
			</div>
		</div>
	)
}
