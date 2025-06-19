export interface IEthereum {
	request(props: object): Promise<string>
	on(event: string, callback:
		((accounts: string[]) => void) | ((error: Error) => void)
	): void
};