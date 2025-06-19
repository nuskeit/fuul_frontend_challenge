import useProjectsRepo from "./data/projects-repo/useProjectsRepo";
import type { IProject } from "./lib/types/IProject";

export type { IProject } from "./lib/types/IProject";

const { getSingle } = useProjectsRepo()

export class Fuul {
	static async init(p: { apiKey: string }): Promise<IProject> {
		if (p === undefined || !p.apiKey) throw new Error("Fuul SDK: apiKey is missing")
		return await getSingle(p.apiKey)
	}
}

