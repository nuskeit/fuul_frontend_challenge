
import { useWallet } from "../../context/wallet/useWalletData"
import { useWalletSetter } from "../../context/wallet/useWalletSetter"
import { getWalletFactory } from "../../lib/factory/WalletFactory"
import { breakWalletAddress } from "../../lib/util/breakWalletAddress"
import ImageLoader from "../ui/image-loader/ImageLoader"
import "./ConnectWallet.scss"

export default function ConnectWallet() {

	const wallet = useWallet()
	const walletSetter = useWalletSetter()

	async function handleConnectWallet() {
		const ethereum = window.ethereum
		if (ethereum) {
			try {
				const accounts = await ethereum.request({
					method: "eth_requestAccounts"
				})

				walletSetter(getWalletFactory().create({ address: accounts[0] || "", ethereum }))

				// check if Metamask froze or disconnected
				ethereum.on('accountsChanged', (accounts: string[]) => {
					if (accounts.length === 0)
						walletSetter({ ...wallet, ethereum: undefined })
				})

				// check for proper user disconnect
				ethereum.on('disconnect', (error: Error) => {
					console.error(error);
					walletSetter({ ...wallet, ethereum: undefined })
				})

			} catch (error) {
				console.error(error)
			}
		} else {
			alert("Metamask not detected")
		}
	}

	const isConnected = () => wallet.address?.trim() !== ""

	return (
		<div className={`connect-wallet-root col ${isConnected() ? "connected" : ""}`}>
			<div className="row flex-ali-ite-cen">
				<span>
					<ImageLoader src="/fuul2.png" alt="" width={"10px"} height={"10px"} className="logo"
					/></span>
				<button className={`connect-wallet-button ${isConnected() ? "connected" : ""}`}
					onClick={handleConnectWallet}>
					{isConnected() ? "Wallet Connected!" : "Connect Wallet"}
				</button>
			</div>
			{isConnected() &&
				<div className="connect-wallet-address row">
					<span>{breakWalletAddress(wallet.address)}</span>
				</div>
			}
		</div>
	)
}
