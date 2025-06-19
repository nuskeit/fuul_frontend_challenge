export function toHex(txt: string) {
	return '0x' +
		Array.from(new TextEncoder().encode(txt))
			.map(b => b.toString(16).padStart(2, '0'))
			.join('');
}