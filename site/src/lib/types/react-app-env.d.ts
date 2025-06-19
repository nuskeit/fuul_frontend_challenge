import type { IEthereum } from "./EthereumWallet";

declare global {
	interface Window {
		ethereum?: IEthereum
	}
}