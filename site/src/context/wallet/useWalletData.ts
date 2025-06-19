import { useContext } from "react"
import { WalletData } from "./contextObjects"
import type { IWallet } from "../../lib/types/IWallet"

/** Wallet Object */
export function useWallet():IWallet {
	const context = useContext(WalletData)

	if (context === undefined)
		throw new Error("useWallet must be used under the its provider.")

	/** Data */
	return context
}
