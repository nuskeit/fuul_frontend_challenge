import { useContext } from "react"
import { SessionDataSetter } from "./contextObjects"

/** SessionData Setter */
export function useSessionDataSetter() {
	const context = useContext(SessionDataSetter)

	if (context === undefined)
		throw new Error("useSessionDataSetter must be used under the its provider.")

	/** Setter */
	return context
}
