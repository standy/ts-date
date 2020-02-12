import {DiffUnitFn, MS} from '../utils/basic-types';
import {isValidDate} from '../create/create-ts-date';
import {absFloor} from '../utils/utils';

export function diffCalendarYear<T extends Date | null>(d1: T, d2: T): DiffUnitFn<T> {
	if (!isValidDate(d1) || !isValidDate(d2)) return null as any;
	return d1.getFullYear() - d2.getFullYear();
}

export function diffCalendarMonth<T extends Date | null>(d1: T, d2: T): DiffUnitFn<T> {
	if (!isValidDate(d1) || !isValidDate(d2)) return null as any;
	return (d1.getFullYear() - d2.getFullYear()) * 12 + d1.getMonth() - d2.getMonth();
}

export function diffCalendarDate<T extends Date | null>(d1: T, d2: T): DiffUnitFn<T> {
	if (!isValidDate(d1) || !isValidDate(d2)) return null as any;
	const u1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
	const u2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
	return absFloor((u1 - u2) / MS.Date);
}
