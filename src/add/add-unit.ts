import {AddUnitFn, MS} from '../utils/basic-types';


function addTimeFn(ms: number): AddUnitFn {
	return (d: Date | null, n: number): /*ValidDate | Date | null*/ any => {
		if (d === null) return null;
		if (!isFinite(n)) return d;
		return new Date(d.getTime() + ms * n);
	};
}

function addFn(keyGet: keyof Date, keySet: keyof Date): AddUnitFn {
	return (d: Date | null, n: number): /*ValidDate | Date | null*/ any => {
		if (d === null) return null;
		if (!isFinite(n)) return d;
		const result = new Date(d.getTime());
		result[keySet as 'setDate'](result[keyGet as 'getDate']() + n);
		return result;
	};
}

export const addMilliseconds = addTimeFn(MS.Milliseconds);
export const addSeconds = addTimeFn(MS.Seconds);
export const addMinutes = addTimeFn(MS.Minutes);
export const addHours = addTimeFn(MS.Hours);

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
