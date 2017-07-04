import {ValidDateMethod1ArgWithDateResult} from '../utils/basic-types';
function addFn(keyGet: keyof Date, keySet: keyof Date): ValidDateMethod1ArgWithDateResult {
	return (d: Date | null, n: number): /*ValidDate | Date | null*/ any => {
		if (!d) return null;
		if (!isFinite(n)) return d;
		const result = new Date(+d);
		result[keySet as 'setDate'](result[keyGet as 'getDate']() + n);
		return result;
	};
}

export const addMilliseconds = addFn('getMilliseconds', 'setMilliseconds');

export const addSeconds = addFn('getSeconds', 'setSeconds');

export const addMinutes = addFn('getMinutes', 'setMinutes');

export const addHours = addFn('getHours', 'setHours');

export const addDate = addFn('getDate', 'setDate');

export const addMonth = addFn('getMonth', 'setMonth');

export const addYear = addFn('getFullYear', 'setFullYear');


export const addUTCMilliseconds = addFn('getUTCMilliseconds', 'setUTCMilliseconds');

export const addUTCSeconds = addFn('getUTCSeconds', 'setUTCSeconds');

export const addUTCMinutes = addFn('getUTCMinutes', 'setUTCMinutes');

export const addUTCHours = addFn('getUTCHours', 'setUTCHours');

export const addUTCDate = addFn('getUTCDate', 'setUTCDate');

export const addUTCMonth = addFn('getUTCMonth', 'setUTCMonth');

export const addUTCYear = addFn('getUTCFullYear', 'setUTCFullYear');
