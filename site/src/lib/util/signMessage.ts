import type { IEthereum } from "../types/EthereumWallet"
import { toHex } from "./tohex"

export async function signMessage(wallet: IEthereum, message: string): Promise<string> {
	if (!wallet) {
		throw new Error('Connect to MetaMask first!');
	}
	try {

		const accounts = await wallet.request({ method: 'eth_requestAccounts' });
		const account = accounts[0];

		const msgHex = toHex(message);

		const signature = await wallet.request({
			method: 'personal_sign',
			params: [msgHex, account],
		});

		return signature;
	} catch {
		return ""
	}
}
