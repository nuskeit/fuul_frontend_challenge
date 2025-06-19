import { Fuul, type IProject } from "fuul-sdk"
import { useEffect, useState } from "react"

export default function useFuulSdk(apiKey: string) {

	const [projectData, setProjectData] = useState<IProject>()

	useEffect(() => {
		const asyncDummyFn = async () => {
			const f = new Fuul()
			const projectData = await f.init({ apiKey })
			setProjectData(projectData)
		}
		asyncDummyFn()
	}, [apiKey])

	return { project: projectData }
}
