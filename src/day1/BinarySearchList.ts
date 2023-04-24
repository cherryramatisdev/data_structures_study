export default function binarySearch(haystack: number[], needle: number): boolean {
	let low = 0;
	let high = haystack.length;

	do {
		const middlePoint = Math.floor((low + (high - low)) / 2);
		const value = haystack[middlePoint];

		if (value === needle) {
			return true;
		}

		if (value > needle) {
			high = middlePoint;
		} else {
			low = middlePoint + 1;
		}
	} while (low < high);

	return false;
}
