import {ValidDate} from '../utils/basic-types';

export function fromDate(date: Date|number|null|undefined): ValidDate | null {
	if (date == null) {
		return null;
	}
	const d = new Date(+date);
	if (isFinite(+d)) {
		return d as any as ValidDate
	}
	return null;
}

/** @deprecated - use fromDate */
export const createTsDate = fromDate;

export function toTsDateOrNull(date: Date): ValidDate | null {
	if (isFinite(+date)) {
		return date as any as ValidDate
	}
	return null;
}
export function toTsDateOrThrow(date: Date): ValidDate {
	if (isFinite(+date)) {
		return date as any as ValidDate
	}
	throw new TypeError(`Cant parse date from "${date}"`);
}

export interface TsDateConstructor {
   (): ValidDate;
   (value: number): ValidDate | null;
   (value: string): ValidDate | null;
   (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): ValidDate | null;
}
export const newTsDate = function(...args: Array<number | string>) {
	const result = new (Date as any)(...args);
	return toTsDateOrNull(result);
} as TsDateConstructor;

export interface TsValidDateConstructor {
   (): ValidDate;
   (value: number): ValidDate;
   (value: string): ValidDate;
   (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): ValidDate;
}

export const newTsDateOrThrow = function(...args: Array<number | string>) {
	const result = new (Date as any)(...args);
	return toTsDateOrThrow(result);
} as TsValidDateConstructor;
