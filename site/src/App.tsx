import { useEffect } from "react";
import "./App.scss";
import { useSessionDataSetter } from "./context/wallet/useSessionDataSetter";
import useFuulSdk from "./external/fuul/useFuulSdk";
import NftDash from "./views/nft-dash/NftDash";

function App() {

	/**
	 * Fuul SDK implementation
	 */
	const fuul = useFuulSdk(import.meta.env.VITE_FULL_API_KEY)
	/**
	 * Not having the complete implementation of a SDK, with state management
	 * and complete structure, I decided to store relevant data in SessionData,
	 * to make it available for the MODAL
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
