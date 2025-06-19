import { useEffect } from "react";
import "./App.scss";
import { useSessionDataSetter } from "./context/wallet/useSessionDataSetter";
import useFuulSdk from "./external/fuul/useFuulSdk";
import NftDash from "./views/nft-dash/NftDash";

function App() {

	/**
	 * Fuul SDK implementation
	 */
	const fuul = useFuulSdk(import.meta.env.VITE_FUUL_API_KEY)
	/**
	 * Not having the complete implementation of a SDK, with its own state 
	 * management, I decided to store retrieved data in SessionData, a 
	 * context provided state, to make it available for the MODAL
	 */
	const setSessionData = useSessionDataSetter()

	useEffect(() => {
		setSessionData({
			apiKey: fuul.project?.key || "",
			referrer: fuul.project?.referrer || ""
		})

	}, [fuul.project?.key, fuul.project?.referrer, setSessionData]);

	return (
		<div>
			<NftDash />
		</div>
	)
}

export default App
