import {ValidDate} from '../utils/basic-types';

export function fromDate(date: Date | number | undefined): ValidDate | null {
	const d = new Date(+(date as Date));
	return asValidDateOrNull(d);
}

export function fromDateOrThrow(date: Date | number | undefined): ValidDate {
	const d = new Date(+(date as Date));
	return asValidDateOrThrow(d, date);
}

export function asValidDateOrNull(date: Date): ValidDate | null {
	if (isValidDate(date)) return date;
	return null;
}
export function asValidDateOrThrow(date: Date, origin: any): ValidDate {
	if (isValidDate(date)) return date;
	throw new TypeError(`Cant parse date from "${origin}"`);
}

export interface NewValidDateFn {
   (): ValidDate;
   (value: number): ValidDate | null;
   (value: string): ValidDate | null;
   (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): ValidDate | null;
}
export const newValidDate = function(...args: Array<number | string>) {
	const result = new (Date as any)(...args);
	return asValidDateOrNull(result);
} as NewValidDateFn;

export interface NewValidDateOrThrowFn {
   (): ValidDate;
   (value: number): ValidDate;
   (value: string): ValidDate;
   (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): ValidDate;
}

export const newValidDateOrThrow = function(...args: Array<number | string>) {
	const result = new (Date as any)(...args);
	return asValidDateOrThrow(result, args);
} as NewValidDateOrThrowFn;


export function asDate(d: ValidDate): Date {
	return new Date(+d);
}


export function isValidDate(d: Date | null): d is ValidDate {
	return d != null && isFinite(+d);
}
