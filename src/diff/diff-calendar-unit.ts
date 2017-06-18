import {ValidDate, ValidDateMethod2D, MS} from '../utils/basic-types';

type DiffUnitFn = ValidDateMethod2D<number>;

export const diffCalendarYear = function(d1: ValidDate | null, d2: ValidDate | null) {
	if (!d1 || !d2) return null;
	return d1.getFullYear() - d2.getFullYear();
} as DiffUnitFn;


export const diffCalendarMonth = function(d1: ValidDate | null, d2: ValidDate | null) {
	if (!d1 || !d2) return null;
	return (d1.getFullYear() - d2.getFullYear()) * 12 + d1.getMonth() - d2.getMonth();
} as DiffUnitFn;


export const diffCalendarDate = function(d1: ValidDate | null, d2: ValidDate | null) {
	if (!d1 || !d2) return null;
	const u1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
	const u2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
	return ((u1 - u2) / MS.Date) | 0;
} as DiffUnitFn;

