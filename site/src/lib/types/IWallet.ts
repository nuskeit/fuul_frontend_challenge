import type { IEthereum } from "./EthereumWallet";

export interface IWallet {
	address: string
	ethereum?: IEthereum
}
