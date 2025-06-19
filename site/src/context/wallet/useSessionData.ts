import { useContext } from "react"
import type { ISessionData } from "../../lib/types/ISessionData"
import { SessionData } from "./contextObjects"

/** SessionData Object */
export function useSessionData(): ISessionData {
	const context = useContext(SessionData)

	if (context === undefined)
		throw new Error("useSessionData must be used under the its provider.")

	/** Data */
	return context
}
