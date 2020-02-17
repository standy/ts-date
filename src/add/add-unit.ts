import {MS} from '../utils/basic-types';
import {ValidDate} from '../valid-date';

/**
 * Adds a number of milliseconds to date
 */
export function addMilliseconds<T extends ValidDate | Date | null>(date: T, milliseconds: number): T {
	if (date === null) return null as any;
	if (!isFinite(milliseconds)) return date;
	return new Date(date.getTime() + milliseconds) as T;
}

/**
 * Adds a number of seconds to date
 */
export function addSeconds<T extends ValidDate | Date | null>(date: T, seconds: number): T {
	if (date === null) return null as any;
	if (!isFinite(seconds)) return date;
	return new Date(date.getTime() + MS.Seconds * seconds) as T;
}

/**
 * Adds a number of minutes to date
 */
export function addMinutes<T extends ValidDate | Date | null>(date: T, minutes: number): T {
	if (date === null) return null as any;
	if (!isFinite(minutes)) return date;
	return new Date(date.getTime() + MS.Minutes * minutes) as T;
}

/**
 * Adds a number of hours to date
 */
export function addHours<T extends ValidDate | Date | null>(date: T, hours: number): T {
	if (date === null) return null as any;
	if (!isFinite(hours)) return date;
	return new Date(date.getTime() + MS.Hours * hours) as T;
}

/**
 * Adds a number of days to date
 */
export function addDate<T extends ValidDate | Date | null>(date: T, days: number): T {
	if (date === null) return null as any;
	if (!isFinite(days)) return date;
	const result = new Date(date.getTime());
	result.setDate(result.getDate() + days);
	return result as T;
}

/**
 * Adds a number of months to date
 */
export function addMonth<T extends ValidDate | Date | null>(date: T, months: number): T {
	if (date === null) return null as any;
	if (!isFinite(months)) return date;
	const result = new Date(date.getTime());
	result.setMonth(result.getMonth() + months);
	return result as T;
}

/**
 * Adds a number of years to date
 */
export function addYear<T extends ValidDate | Date | null>(date: T, years: number): T {
	if (date === null) return null as any;
	if (!isFinite(years)) return date;
	const result = new Date(date.getTime());
	result.setFullYear(result.getFullYear() + years);
	return result as T;
}
