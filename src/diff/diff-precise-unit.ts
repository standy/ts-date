import {MS, DiffUnitFn} from '../utils/basic-types';
import {diffCalendarMonth, diffCalendarYear} from './diff-calendar-unit';
import {isValidDate} from '../create/create-ts-date';

function diffPreciseByUnits(unitsInMs: number): DiffUnitFn {
	return (d1: Date | null, d2: Date | null): any => {
		if (!isValidDate(d1) || !isValidDate(d2)) return null;
		return (d1.getTime() - d2.getTime()) / unitsInMs;
	};
}
export const diffPreciseSeconds = diffPreciseByUnits(MS.Seconds);
export const diffPreciseMinutes = diffPreciseByUnits(MS.Minutes);
export const diffPreciseHours = diffPreciseByUnits(MS.Hours);
export const diffPreciseDate = diffPreciseByUnits(MS.Date);

export const diffPreciseMonth: DiffUnitFn = (d1: Date | null, d2: Date | null): any => {
	if (!isValidDate(d1) || !isValidDate(d2)) return null;

	const startOfMonth1 = +new Date(d1.getFullYear(), d1.getMonth());
	const startOfNextMonth1 = +new Date(d1.getFullYear(), d1.getMonth() + 1);
	const startOfMonth2 = +new Date(d2.getFullYear(), d2.getMonth());
	const startOfNextMonth2 = +new Date(d2.getFullYear(), d2.getMonth() + 1);

	const m1 = startOfNextMonth1 - startOfMonth1;
	const m2 = startOfNextMonth2 - startOfMonth2;

	const t1 = d1.getTime() - startOfMonth1;
	const t2 = d2.getTime() - startOfMonth2;

	/**
	 * that formula was made to avoid "1 - 0.9" calculations
	 * do same thing as
	 * diffCalendarMonth(d1, d2) + t1 / m1 - t2 / m2
	 */
	return (diffCalendarMonth(d1, d2) * m1 * m2 + t1 * m2 - t2 * m1) / (m1 * m2);
};

export const diffPreciseYear: DiffUnitFn = (d1: Date | null, d2: Date | null): any => {
	if (!isValidDate(d1) || !isValidDate(d2)) return null;

	const startOfYear1 = +new Date(d1.getFullYear(), 0);
	const startOfNextYear1 = +new Date(d1.getFullYear() + 1, 0);
	const startOfYear2 = +new Date(d2.getFullYear(), 0);
	const startOfNextYear2 = +new Date(d2.getFullYear() + 1, 0);

	const y1 = startOfNextYear1 - startOfYear1;
	const y2 = startOfNextYear2 - startOfYear2;

	const t1 = d1.getTime() - startOfYear1;
	const t2 = d2.getTime() - startOfYear2;

	return (diffCalendarYear(d1, d2) * y1 * y2 + t1 * y2 - t2 * y1) / (y1 * y2);
};
