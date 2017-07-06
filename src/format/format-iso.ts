import {FormatFn} from '../utils/basic-types';
import {isValidDate} from '../create/create-ts-date';

/**
 * Makes function that return part of ISO 8610 formatted string
 */
function createFormatIso(len: number): FormatFn {
	return (d: Date | null): /*string | null*/ any => {
		if (!isValidDate(d)) return null;
		const date = new Date(+d);
		date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
		return date.toISOString().substring(0, len);
	};
}

// YYYY-MM-DD
export const formatDateIso = createFormatIso(10);

// YYYY-MM-DDTHH:mm
export const formatDateTimeIso = createFormatIso(16);

// YYYY-MM-DDTHH:mm:ss.SSS
export const formatLocalIso = createFormatIso(23);

