import { getProjectFactory } from "../../lib/factory/ProjectFactory"

export default function useProjectsRepo() {
	async function getSingle(apiKey: string) {
		return getProjectFactory().create({
			key: apiKey,
			name: "Demo Project",
			smartContract: "demo-target-contract-hash",
			net: "demo-web3-net-identifier",
			referrer: "https://referer-url-from-fuul-sdk",
		})
	}
	return { getSingle }
}
