import {DiffUnitFn, MS} from '../utils/basic-types';
import {isValidDate} from '../create/create-ts-date';
import {absFloor} from '../utils/utils';

/**
 * Returns the number of years between two dates.
 * Months, days and time are ignored
 * @example
 * diffCalendarYear(parseIso('2020-01-01'), parseIso('2019-12-31')) // 1 = 2020 - 2019
 */
export function diffCalendarYear<T extends Date | null>(d1: T, d2: T): DiffUnitFn<T> {
	if (!isValidDate(d1) || !isValidDate(d2)) return null as any;
	return d1.getFullYear() - d2.getFullYear();
}

/**
 * Returns the number of months between two dates.
 * Days and time are ignored
 * @example
 * diffCalendarMonth(parseIso('2020-05-01'), parseIso('2020-03-31')) // 2 = 5 - 3
 */
export function diffCalendarMonth<T extends Date | null>(d1: T, d2: T): DiffUnitFn<T> {
	if (!isValidDate(d1) || !isValidDate(d2)) return null as any;
	return (d1.getFullYear() - d2.getFullYear()) * 12 + d1.getMonth() - d2.getMonth();
}

/**
 * Returns the number of days between two dates.
 * Time is ignored
 * @example
 * diffCalendarDate(parseIso('2020-05-01'), parseIso('2020-04-20')) // 11 = 10 days in april and 1 in march
 */
export function diffCalendarDate<T extends Date | null>(d1: T, d2: T): DiffUnitFn<T> {
	if (!isValidDate(d1) || !isValidDate(d2)) return null as any;
	const u1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
	const u2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
	return absFloor((u1 - u2) / MS.Date);
}
