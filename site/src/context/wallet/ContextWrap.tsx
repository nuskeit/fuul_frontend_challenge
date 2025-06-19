import { useState, type ReactNode } from "react"
import { getWalletFactory } from "../../lib/factory/WalletFactory"
import type { ISessionData } from "../../lib/types/ISessionData"
import type { IWallet } from "../../lib/types/IWallet"
import { SessionData, SessionDataSetter, WalletData, WalletSetter } from "./contextObjects"

const defaultWallet = (): IWallet => getWalletFactory().create({ address: "" })
const defaultSessionData = (): ISessionData => ({ apiKey: "default-key-test-key-test-key-test-key", referrer: "default-referrer-code" })

export default function ContextWrap({ children }: { children: ReactNode }) {

	const [wallet, setWallet] = useState<IWallet>(defaultWallet)
	const [sessionData, setSessionData] = useState<ISessionData>(defaultSessionData)

	return (
		<WalletData.Provider value={wallet}>
			<WalletSetter.Provider value={setWallet}>
				<SessionData.Provider value={sessionData}>
					<SessionDataSetter.Provider value={setSessionData}>
						{children}
					</SessionDataSetter.Provider>
				</SessionData.Provider>
			</WalletSetter.Provider>
		</WalletData.Provider>
	)
}

