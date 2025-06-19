import type { IEthereum } from "../types/EthereumWallet"
import type { IFactory } from "../types/IFactory"
import type { IWallet } from "../types/IWallet"

export const getWalletFactory = () => new WalletFactory()

class WalletFactory implements IFactory<IWallet> {

	create(rawData: { address: string, ethereum?: IEthereum }): IWallet {
		return {
			address: rawData["address"]
				|| "",
			ethereum: rawData["ethereum"]
				|| undefined
		}
	}
}
