import {FormatFn} from '../utils/basic-types';
import {isValidDate} from '../create/create-ts-date';
import {leadZero} from '../utils/utils';

// YYYY-MM-DD
export const formatDateIso: FormatFn = (date: Date | null): any => {
	if (!isValidDate(date)) return null;
	return leadZero(date.getFullYear(), 4) + '-' + leadZero(date.getMonth() + 1) + '-' + leadZero(date.getDate());
};

// YYYY-MM-DDTHH:mm
export const formatDateTimeIso: FormatFn = (date: Date | null): any => {
	if (!isValidDate(date)) return null;
	return formatDateIso(date) + 'T' + leadZero(date.getHours()) + ':' + leadZero(date.getMinutes());
};

// YYYY-MM-DDTHH:mm:ss.SSS
export const formatLocalIso: FormatFn = (date: Date | null): any => {
	if (!isValidDate(date)) return null;
	return formatDateTimeIso(date) + ':' + leadZero(date.getSeconds()) + '.' + leadZero(date.getMilliseconds(), 3);
};
