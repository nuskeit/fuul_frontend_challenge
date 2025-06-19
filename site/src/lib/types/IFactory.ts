export interface IFactory<T> {
	/**
	 * Creates the object refered in the factory's name
	 * @param rawData - DTO 
	 * @returns T
	 */
	create(rawData: unknown): T
}