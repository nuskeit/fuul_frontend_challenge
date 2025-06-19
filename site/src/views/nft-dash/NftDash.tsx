import { useEffect, useState, type ReactNode } from "react"
import ConnectWallet from "../../components/connect-wallet/ConnectWallet"
import ModalForm from "../../components/modal/ModalForm"
import NftGroup from "../../components/nft-group/NftGroup"
import { getCategoriesRepo } from "../../data/categories-repo/CategoriesRepo"
import type { INft } from "../../lib/types/INft"
import "./NftDash.scss"

export default function NftDash() {

	const [categories, setCategories] = useState<ReactNode[]>([])
	const [modal, setModal] = useState<ReactNode>()

	useEffect(() => {
		// if some action needs to be taken in the modal caller after it closes,
		// it should pass a callback function as second paramenter of showModal.
		// this variable stores it until the modal is closed, hidemodal() executes id,
		// and clears the reference. 
		let closeModalCallback: (() => void) | undefined

		async function showModal(nft: INft, onClose?: () => void) {
			if (onClose !== undefined)
				closeModalCallback = onClose
			setModal(<ModalForm nft={nft} quit={hideModal} />)
		}

		function hideModal() {
			setModal(undefined)
			if (closeModalCallback !== undefined)
				closeModalCallback()
			// clear reference
			closeModalCallback = undefined
		}

		const asyncWrapperFunc = async () => {
			const data = await getCategoriesRepo().getAll()
			if (data === undefined)
				setCategories([])
			else {
				const jsx = data.map(_ => (
					<NftGroup category={_} key={_.name} showModal={showModal} />
				))
				setCategories(jsx)
			}
		}
		asyncWrapperFunc();
	}, [])



	return (
		<>
			<div className="nftdash-root box col">

				<div className="box b-radius-3 row flex-ali-ite-cen flex-jus-con-cen">
					<div className="nftdash-root-title">
						NFT Dash ⇝
					</div>
				</div>
				<div className="box b-radius-3 row">
					{categories}
				</div>
				<ConnectWallet />
			</div>
			{modal}
		</>
	)
}
