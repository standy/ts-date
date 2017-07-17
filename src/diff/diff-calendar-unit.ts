import {DiffUnitFn, MS} from '../utils/basic-types';
import {isValidDate} from '../create/create-ts-date';
import {absFloor} from '../utils/utils';

export const diffCalendarYear: DiffUnitFn = (d1: Date | null, d2: Date | null): any => {
	if (!isValidDate(d1) || !isValidDate(d2)) return null;
	return d1.getFullYear() - d2.getFullYear();
};


export const diffCalendarMonth: DiffUnitFn = (d1: Date | null, d2: Date | null): any => {
	if (!isValidDate(d1) || !isValidDate(d2)) return null;
	return (d1.getFullYear() - d2.getFullYear()) * 12 + d1.getMonth() - d2.getMonth();
};


export const diffCalendarDate: DiffUnitFn = (d1: Date | null, d2: Date | null): any => {
	if (!isValidDate(d1) || !isValidDate(d2)) return null;
	const u1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
	const u2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
	return absFloor((u1 - u2) / MS.Date);
};

