import type { IRepository } from "../../lib/types/IRepository"
import type { ICategory } from "../../lib/types/ICategory"

// Fake for demo
import fake from "./CategoriesFake.json"

export const getCategoriesRepo = () => new CategoriesRepo()

class CategoriesRepo implements IRepository<ICategory, undefined> {

	/**
	 * Returns all data
	 * @returns INft[]
	 */
	async getAll(): Promise<ICategory[] | undefined> {
		return fake
	}
}
