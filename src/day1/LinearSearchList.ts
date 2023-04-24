export default function linearSearch(haystack: number[], needle: number): boolean {
	for (const i of haystack) {
		if (haystack[i] === needle) {
			return true;
		}
	}

	return false;
}
