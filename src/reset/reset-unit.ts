import {ValidDate} from '../valid-date';

const START_OF_ISO_WEEK = 1;

export function resetYear<T extends ValidDate | Date | null>(d: T): T {
	if (d === null) return null as any;
	return new Date(d.getFullYear(), 0) as T;
}

export function resetMonth<T extends ValidDate | Date | null>(d: T): T {
	if (d === null) return null as any;
	return new Date(d.getFullYear(), d.getMonth(), 1) as T;
}

export function resetISOWeek<T extends ValidDate | Date | null>(d: T): T {
	if (d === null) return null as any;
	const day = d.getDay();
	const diff = (day < START_OF_ISO_WEEK ? 7 : 0) + day - START_OF_ISO_WEEK;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff) as T;
}

export function resetDate<T extends ValidDate | Date | null>(d: T): T {
	if (d === null) return null as any;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate()) as T;
}

export function resetHours<T extends ValidDate | Date | null>(d: T): T {
	if (d === null) return null as any;
	const result = new Date(d.getTime());
	result.setMinutes(0, 0, 0);
	return result as T;
}

export function resetMinutes<T extends ValidDate | Date | null>(d: T): T {
	if (d === null) return null as any;
	const result = new Date(d.getTime());
	result.setSeconds(0, 0);
	return result as T;
}

export function resetSeconds<T extends ValidDate | Date | null>(d: T): T {
	if (d === null) return null as any;
	const result = new Date(d.getTime());
	result.setMilliseconds(0);
	return result as T;
}
