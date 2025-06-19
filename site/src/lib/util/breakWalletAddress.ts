export function breakWalletAddress(address: string) {
	if (typeof address != "string") return ""
	const s1 = address.substring(0, 4)
	const s2 = address.substring(address.length - 4)
	if (s1.trim().length === 0 && s2.trim().length === 0)
		return ""
	return s1 + "..." + s2
}
