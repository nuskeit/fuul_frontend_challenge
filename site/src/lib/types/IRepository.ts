
/**
 * T: Repo elements Type
 * F: Filter Type
 */
export interface IRepository<T, F extends object | undefined> {
	/**
	 * Gets all the data available
	 */
	getAll(): Promise<T[] | undefined>;

	/**
	 * Gets filtered data, managed by F which is the Filter Type (object)
	 * @param filter 
	 */
	getFiltered?(filter: F): Promise<T[] | undefined>;
}
