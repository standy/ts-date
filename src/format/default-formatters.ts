import {leadZero} from '../utils/utils';
import {diffCalendarDate} from '../diff/diff-calendar-unit';
import {newValidDateOrThrow} from '../create/create-ts-date';
import {resetISOWeek, resetYear} from '../reset/reset-unit';
import {FormatterObj} from '../utils/basic-types';

export const defaultFormatters: Readonly<FormatterObj> = {
	// Month: 1, 2, ..., 12
	'M': date => date.getMonth() + 1,

	// Month: 01, 02, ..., 12
	'MM': date => leadZero(date.getMonth() + 1),

	// Quarter: 1, 2, 3, 4
	'Q': date => Math.ceil((date.getMonth() + 1) / 3),

	// Day of month: 1, 2, ..., 31
	'D': date => date.getDate(),

	// Day of month: 01, 02, ..., 31
	'DD': date => leadZero(date.getDate()),

	// Day of year: 1, 2, ..., 366
	'DDD': date => diffCalendarDate(date, resetYear(date)) + 1,

	// Day of year: 001, 002, ..., 366
	'DDDD': date => leadZero(defaultFormatters['DDD'](date), 3),

	// Day of week: 0, 1, ..., 6
	'd': date => date.getDay(),

	// Day of ISO week: 1, 2, ..., 7
	'E': date => date.getDay() || 7,

	// ISO week: 1, 2, ..., 53
	'W': date => {
		const isoYear = +defaultFormatters['GGGG'](date);
		const start = resetISOWeek(newValidDateOrThrow(isoYear, 0, 4));
		return Math.floor(diffCalendarDate(date, start) / 7) + 1;
	},

	// ISO week: 01, 02, ..., 53
	'WW': date => leadZero(defaultFormatters['W'](date)),

	// Year: 00, 01, ..., 99
	'YY': date => date.getFullYear().toString().slice(-2),

	// Year: 1900, 1901, ..., 2099
	'YYYY': date => leadZero(date.getFullYear(), 4),

	// ISO week-numbering year: 00, 01, ..., 99
	'GG': date => defaultFormatters['GGGG'](date).toString().slice(-2),

	// ISO week-numbering year: 1900, 1901, ..., 2099
	'GGGG': date => {
		const startYear = date.getFullYear();
		const correction = date < resetISOWeek(newValidDateOrThrow(startYear, 0, 4))
			? -1
			: date < resetISOWeek(newValidDateOrThrow(startYear + 1, 0, 4))
				? 0
				: 1;
		return leadZero(startYear + correction, 4);
	},

	// Hour: 0, 1, ... 23
	'H': date => date.getHours(),

	// Hour: 00, 01, ..., 23
	'HH': date => leadZero(date.getHours()),

	// Hour: 1, 2, ..., 12
	'h': date => (date.getHours() % 12) || 12,

	// Hour: 01, 02, ..., 12
	'hh': date => leadZero(defaultFormatters['h'](date)),

	// Minute: 0, 1, ..., 59
	'm': date => date.getMinutes(),

	// Minute: 00, 01, ..., 59
	'mm': date => leadZero(date.getMinutes()),

	// Second: 0, 1, ..., 59
	's': date => date.getSeconds(),

	// Second: 00, 01, ..., 59
	'ss': date => leadZero(date.getSeconds()),

	// 1/10 of second: 0, 1, ..., 9
	'S': date => Math.floor(date.getMilliseconds() / 100),

	// 1/100 of second: 00, 01, ..., 99
	'SS': date => leadZero(Math.floor(date.getMilliseconds() / 10)),

	// Millisecond: 000, 001, ..., 999
	'SSS': date => leadZero(date.getMilliseconds(), 3),

	// Timezone: -01:00, +00:00, ... +12:00
	'Z': date => formatTimezone(date.getTimezoneOffset(), ':'),

	// Timezone: -0100, +0000, ... +1200
	'ZZ': date => formatTimezone(date.getTimezoneOffset()),

	// Seconds timestamp: 512969520
	'X': date => Math.floor(date.getTime() / 1000),

	// Milliseconds timestamp: 512969520900
	'x': date => date.getTime(),
};

function formatTimezone(offset: number, delimeter = '') {
	const sign = offset > 0 ? '-' : '+';
	const absOffset = Math.abs(offset);
	const hours = Math.floor(absOffset / 60);
	const minutes = absOffset % 60;
	return sign + leadZero(hours) + delimeter + leadZero(minutes);
}

