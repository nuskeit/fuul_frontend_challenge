import type { IRepository } from "../../lib/types/IRepository"
import type { INft } from "../../lib/types/INft"

// Fake for demo
import fake from "./Nftfake.json"

export const getNftRepo = () => new NftRepo()

class NftRepo implements IRepository<INft, { category: string }> {

	/**
	 * Returns all data
	 * @returns INft[]
	 */
	async getAll(): Promise<INft[] | undefined> {
		return fake
	}

	async getFiltered(filter: { category: string; }): Promise<INft[] | undefined> {
		const data = await this.getAll()
		return data?.filter(_ => _.category === filter.category)
	}

}

