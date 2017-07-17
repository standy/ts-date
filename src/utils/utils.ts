export function leadZero(n: number | string, targetLength = 2) {
	let output = n + '';
	while (output.length < targetLength) {
		output = '0' + output;
	}
	return output;
}

export function absFloor(num: number) {
    if (num < 0) {
        // -0 -> 0
        return Math.ceil(num) || 0;
    } else {
        return Math.floor(num);
    }
}
