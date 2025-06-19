import { useContext } from "react"
import { WalletSetter } from "./contextObjects"

/** Wallet Setter */
export function useWalletSetter() {
	const context = useContext(WalletSetter)

	if (context === undefined)
		throw new Error("useWalletSetter must be used under the its provider.")

	/** Setter */
	return context
}
