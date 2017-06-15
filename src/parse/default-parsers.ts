import {ParserObj} from '../utils/basic-types';

const rx1 = '\\d';
const rx2 = '\\d\\d';
const rx12 = '\\d\\d?';
const rx3 = '\\d{3}';
const rx4 = '\\d{4}';
const rxN = '\\d{5,}';


const defaultParsers: ParserObj = {
	// Month: 1, 2, ..., 12
	'M': [rx12, (date, value) => { date.setMonth(+value - 1); }],

	// Month: 01, 02, ..., 12
	'MM': [rx2, (date, value) => { date.setMonth(+value - 1); }],

	// Quarter: 1, 2, 3, 4
	// 'Q': (date, value) => Math.ceil((date.getMonth() + 1) / 3),

	// Day of month: 1, 2, ..., 31
	'D': [rx12, (date, value) => { date.setDate(+value); }],

	// Day of month: 01, 02, ..., 31
	'DD': [rx2, (date, value) => { date.setDate(+value); }],

	// Day of year: 1, 2, ..., 366
	// TODO 'DDD': (date, value) => getDayOfYear(date),

	// Day of year: 001, 002, ..., 366
	// TODO 'DDDD': (date, value) => leadZero(getDayOfYear(date), 3),

	// Day of week: 0, 1, ..., 6
	// 'd': (date, value) => date.getDay(),

	// Day of ISO week: 1, 2, ..., 7
	// 'E': (date, value) => date.getDay() || 7,

	// ISO week: 1, 2, ..., 53
	// TODO 'W': (date, value) => getISOWeek(date),

	// ISO week: 01, 02, ..., 53
	// TODO 'WW': (date, value) => leadZero(getISOWeek(date)),

	// Year: 00, 01, ..., 99
	'YY': [rx2, (date, value) => {date.setFullYear(2000 + +value)}],

	// Year: 1900, 1901, ..., 2099
	'YYYY': [rx4, (date, value) => {date.setFullYear(+value)}],

	// ISO week-numbering year: 00, 01, ..., 99
	// TODO 'GG': (date, value) => getISOYear(date).toString().slice(-2),

	// ISO week-numbering year: 1900, 1901, ..., 2099
	// TODO 'GGGG': (date, value) => getISOYear(date),

	// Hour: 0, 1, ... 23
	'H': [rx12, (date, value) => {date.setHours(+value)}],

	// Hour: 00, 01, ..., 23
	'HH': [rx2, (date, value) => {date.setHours(+value)}],

	// Hour: 1, 2, ..., 12
	//'h': (date, value) => (date.getHours() % 12) || 12,

	// Hour: 01, 02, ..., 12
	// 'hh': (date, value) => leadZero(formatters['h'](date)),

	// Minute: 0, 1, ..., 59
	'm': [rx12, (date, value) => {date.setMinutes(+value)}],

	// Minute: 00, 01, ..., 59
	'mm': [rx2, (date, value) => {date.setMinutes(+value)}],

	// Second: 0, 1, ..., 59
	's': [rx12, (date, value) => {date.setSeconds(+value)}],

	// Second: 00, 01, ..., 59
	'ss': [rx2, (date, value) => {date.setSeconds(+value)}],

	// 1/10 of second: 0, 1, ..., 9
	'S': [rx1, (date, value) => {date.setMilliseconds(+value * 100)}],

	// 1/100 of second: 00, 01, ..., 99
	'SS': [rx2, (date, value) => {date.setMilliseconds(+value * 10)}],

	// Millisecond: 000, 001, ..., 999
	'SSS': [rx3, (date, value) => {date.setMilliseconds(+value)}],

	// Timezone: -01:00, +00:00, ... +12:00
	// TODO 'Z': (date, value) => formatTimezone(date.getTimezoneOffset(), ':'),

	// Timezone: -0100, +0000, ... +1200
	// TODO 'ZZ': (date, value) => formatTimezone(date.getTimezoneOffset()),

	// Seconds timestamp: 512969520
	'X': [rxN, (date, value) => {date.setTime(+value * 1000)}],

	// Milliseconds timestamp: 512969520900
	'x': [rxN, (date, value) => {date.setTime(+value)}],
};

export default defaultParsers;
