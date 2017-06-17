import {ValidDate} from '../utils/basic-types';

export function createTsDate(date: Date|number|null|undefined): ValidDate | null {
	if (date == null) {
		return null;
	}
	const d = new Date(+date);
	if (isFinite(+d)) {
		return d as any as ValidDate
	}
	return null;
}

export function toTsDateOrNull(date: Date): ValidDate | null {
	if (isFinite(+date)) {
		return date as any as ValidDate
	}
	return null;
}

interface TsDateConstructor {
   (): ValidDate;
   (value: number): ValidDate | null;
   (value: string): ValidDate | null;
   (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): ValidDate | null;
}

export const newTsDate = function(...args: Array<number | string>) {
	const result = new (Date as any)(...args);
	return toTsDateOrNull(result);
} as TsDateConstructor;
