import type { IProjectDto } from "../data/dto/IProjectDto";
import type { IFactory } from "../types/IFactory";
import type { IProject } from "../types/IProject";

export const getProjectFactory = () => new ProjectFactory()

class ProjectFactory implements IFactory<IProject> {

	create(rawData: IProjectDto): IProject {
		return {
			key: rawData["key"]
				|| "",
			name: rawData["name"]
				|| "",
			smartContract: rawData["smartContract"]
				|| "",
			net: rawData["net"]
				|| "",
			referrer: rawData["referrer"]
				|| "",
		}
	}
}
