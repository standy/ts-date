import {ValidDate} from '../valid-date';

/**
 * Type guard for ValidDate
 */
export function isValidDate(d: Date | null): d is ValidDate {
	return d !== null && d instanceof Date && isFinite(d.getTime());
}

/**
 * Converts to the `ValidDate`, creating new instance of Date
 * @deprecated consider use of `isValidDate`
 */
export function fromDate(date: Date | number | undefined): ValidDate | null {
	const d = new Date(+(date as Date));
	return asValidDateOrNull(d);
}

/**
 * Converts to the `ValidDate`, creating new instance of Date
 * @throws Will throw TypeError if input not a valid Date or timestamp
 * @deprecated Consider use of `isValidDate`
 */
export function fromDateOrThrow(date: Date | number | undefined): ValidDate {
	const d = new Date(date instanceof Date ? date.getTime() : (date as number));
	return asValidDateOrThrow(d, date);
}

export function asValidDateOrNull(date: Date): ValidDate | null {
	if (isValidDate(date)) return date;
	return null;
}
function asValidDateOrThrow(date: Date, origin: any): ValidDate {
	if (isValidDate(date)) return date;
	throw new TypeError(`Cant parse date from "${origin}"`);
}

/**
 * Create the `ValidDate`
 * In case of failure returns `null`
 */
export function newValidDate(): ValidDate;
export function newValidDate(value: number): ValidDate | null;
export function newValidDate(value: string): ValidDate | null;
export function newValidDate(
	year: number,
	month: number,
	date?: number,
	hours?: number,
	minutes?: number,
	seconds?: number,
	ms?: number,
): ValidDate | null;
export function newValidDate(...args: Array<number | string | undefined>): ValidDate | null {
	const dateArgs: [any, ...any[]] = [undefined];
	for (let i = 0; i < arguments.length; i++) {
		dateArgs[i + 1] = arguments[i];
	}
	const result = new (Date.bind.apply(Date, dateArgs) as any)();
	return asValidDateOrNull(result);
}

/**
 * Create the `ValidDate`
 * In case of failure returns `null`
 */
export function newValidDateOrThrow(): ValidDate;
export function newValidDateOrThrow(value: number): ValidDate;
export function newValidDateOrThrow(value: string): ValidDate;
export function newValidDateOrThrow(
	year: number,
	month: number,
	date?: number,
	hours?: number,
	minutes?: number,
	seconds?: number,
	ms?: number,
): ValidDate;
export function newValidDateOrThrow(...args: Array<number | string | undefined>): ValidDate {
	const dateArgs: [any, ...any[]] = [undefined];
	for (let i = 0; i < arguments.length; i++) {
		dateArgs[i + 1] = arguments[i];
	}
	const result = new (Date.bind.apply(Date, dateArgs) as any)();
	return asValidDateOrThrow(result, dateArgs);
}
