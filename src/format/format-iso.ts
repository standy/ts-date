import {FormatFn} from '../utils/basic-types';
import {isValidDate} from '../create/create-ts-date';
import {leadZero} from '../utils/utils';

// YYYY-MM-DD
export function formatDateIso<T>(date: Date | null): FormatFn<T> {
	if (!isValidDate(date)) return null as any;
	return leadZero(date.getFullYear(), 4) + '-' + leadZero(date.getMonth() + 1) + '-' + leadZero(date.getDate());
}

// YYYY-MM-DDTHH:mm
export function formatDateTimeIso<T>(date: Date | null): FormatFn<T> {
	if (!isValidDate(date)) return null as any;
	return formatDateIso(date) + 'T' + leadZero(date.getHours()) + ':' + leadZero(date.getMinutes());
}

// YYYY-MM-DDTHH:mm:ss.SSS
export function formatLocalIso<T>(date: Date | null): FormatFn<T> {
	if (!isValidDate(date)) return null as any;
	return formatDateTimeIso(date) + ':' + leadZero(date.getSeconds()) + '.' + leadZero(date.getMilliseconds(), 3);
}
