import {MS} from '../utils/basic-types';
import {ValidDate} from '../valid-date';

export function addMilliseconds<T extends ValidDate | Date | null>(d: T, n: number): T {
	if (d === null) return null as any;
	if (!isFinite(n)) return d;
	return new Date(d.getTime() + n) as T;
}

export function addSeconds<T extends ValidDate | Date | null>(d: T, n: number): T {
	if (d === null) return null as any;
	if (!isFinite(n)) return d;
	return new Date(d.getTime() + MS.Seconds * n) as T;
}

export function addMinutes<T extends ValidDate | Date | null>(d: T, n: number): T {
	if (d === null) return null as any;
	if (!isFinite(n)) return d;
	return new Date(d.getTime() + MS.Minutes * n) as T;
}

export function addHours<T extends ValidDate | Date | null>(d: T, n: number): T {
	if (d === null) return null as any;
	if (!isFinite(n)) return d;
	return new Date(d.getTime() + MS.Hours * n) as T;
}

export function addDate<T extends ValidDate | Date | null>(d: T, n: number): T {
	if (d === null) return null as any;
	if (!isFinite(n)) return d;
	const result = new Date(d.getTime());
	result.setDate(result.getDate() + n);
	return result as T;
}

export function addMonth<T extends ValidDate | Date | null>(d: T, n: number): T {
	if (d === null) return null as any;
	if (!isFinite(n)) return d;
	const result = new Date(d.getTime());
	result.setMonth(result.getMonth() + n);
	return result as T;
}

export function addYear<T extends ValidDate | Date | null>(d: T, n: number): T {
	if (d === null) return null as any;
	if (!isFinite(n)) return d;
	const result = new Date(d.getTime());
	result.setFullYear(result.getFullYear() + n);
	return result as T;
}
