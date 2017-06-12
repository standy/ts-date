export function leadZero(n: number | string, targetLength = 2) {
	let output = n + '';
	while (output.length < targetLength) {
		output = '0' + output;
	}
	return output;
}
