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

export function extend<T, U>(obj1: T, obj2: U): T & U {
	const result = {} as any;
	for (const key in obj1) {
		result[key] = obj1[key];
	}
	for (const key in obj2) {
		result[key] = obj2[key];
	}
	return result;
}

export function tokensRx(obj: any) {
	const keys: string[] = [];
	for (const key in obj) {
		keys.push(key);
	}
	keys.sort((a, b) => b.length - a.length);
	return new RegExp(keys.join('|') + '|\\[[^[]*\\]|.', 'g');
}
