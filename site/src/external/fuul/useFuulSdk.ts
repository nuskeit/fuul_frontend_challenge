import { Fuul, type IProject } from "fuul-sdk"
import { useEffect, useState } from "react"

/**
 * This custom hook harnesses the Fuul-SDK
 * @param apiKey from the .env file.
 * @returns 
 */
export default function useFuulSdk(apiKey: string) {

	const [projectData, setProjectData] = useState<IProject>()

	useEffect(() => {
		const asyncDummyFn = async () => {
			const projectData = await Fuul.init({ apiKey })
			setProjectData(projectData)
		}
		asyncDummyFn()
	}, [apiKey])

	return { project: projectData }
}
