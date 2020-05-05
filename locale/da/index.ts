import {createCustomFormatFn, createFormat} from '../../src/format/create-format';
import {createParse, parseOrThrowWrapper} from '../../src/parse/create-parse';
import {defaultFormatters} from '../../src/format/default-formatters';
import defaultParsers from '../../src/parse/default-parsers';
import {
	ParserObj,
	FormatterObj,
	FormatByTemplateFn,
	ParseByTemplateFn,
	ParseByTemplateOrThrowFn,
	Formatter,
	ParserData,
} from '../../src/utils/basic-types';
import {extend} from '../../src/utils/utils';
export * from '../../src/default-exports';

// Note: in Danish, the names of days of the week and months are lowercased.
const months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
const monthsFull = [
	'januar',
	'februar',
	'marts',
	'april',
	'maj',
	'juni',
	'juli',
	'august',
	'september',
	'oktober',
	'november',
	'december',
];
const weekdays2char = ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'];
const weekdays3char = ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'];
const weekdaysFull = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
const meridiemUppercase = ['AM', 'PM'];
const meridiemLowercase = ['am', 'pm'];
const meridiemFull = ['a.m.', 'p.m.'];

export const formatters: FormatterObj = {
	// Month: jan, feb, ..., dec
	MMM: (date) => months3char[date.getMonth()],

	// Month: januar, februar, ..., december
	MMMM: (date) => monthsFull[date.getMonth()],

	// Day of week: sø, ma, ..., lø
	dd: (date) => weekdays2char[date.getDay()],

	// Day of week: søn, man, ..., lør
	ddd: (date) => weekdays3char[date.getDay()],

	// Day of week: søndag, mandag, ..., lørdag
	dddd: (date) => weekdaysFull[date.getDay()],

	// AM, PM
	A: (date) => meridiemUppercase[date.getHours() < 12 ? 0 : 1],

	// am, pm
	a: (date) => meridiemLowercase[date.getHours() < 12 ? 0 : 1],

	// a.m., p.m.
	aa: (date) => meridiemFull[date.getHours() < 12 ? 0 : 1],

	Mo: ordinalFormatter('M'),
	Do: ordinalFormatter('D'),
	DDDo: ordinalFormatter('DDD'),
	do: ordinalFormatter('d'),
	Qo: ordinalFormatter('Q'),
	Wo: ordinalFormatter('W'),
};

// Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
function ordinalFormatter(formatterToken: string): Formatter {
	return (date) => ordinal(defaultFormatters[formatterToken](date) as number);
}

function ordinal(number: number) {
	return number + '.';
}

function toLower(s: string) {
	return s.toLowerCase();
}
const months3charLower = months3char.map(toLower);
const monthsFullLower = monthsFull.map(toLower);
const parsers: ParserObj = {
	// Month: jan, feb, ..., dec
	MMM: [
		months3charLower.join('|'),
		(date, value) => {
			const index = months3charLower.indexOf(value.toLowerCase());
			date.setMonth(index);
		},
	],

	// Month: januar, februar, ..., december
	MMMM: [
		monthsFullLower.join('|'),
		(date, value) => {
			value = value.toLowerCase();
			let index = monthsFullLower.indexOf(value);
			date.setMonth(index);
		},
	],

	Mo: ordinalParser('M'),
	Do: ordinalParser('D'),
	DDDo: ordinalParser('DDD'),
	do: ordinalParser('d'),
	Qo: ordinalParser('Q'),
	Wo: ordinalParser('W'),
};

// Generate ordinal version of parsers: M -> Mo, D -> Do, etc.
function ordinalParser(token: string): ParserData {
	return [
		'\\d+(?:[.])',
		(date, value) => {
			defaultParsers[token][1](date, value.slice(0, -1));
		},
	];
}

export const format: FormatByTemplateFn = createFormat(extend(defaultFormatters, formatters));
export const createCustomFormat = createCustomFormatFn(extend(defaultFormatters, formatters));
export const parse: ParseByTemplateFn = createParse(extend(defaultParsers, parsers));
export const parseOrThrow: ParseByTemplateOrThrowFn = parseOrThrowWrapper(parse);
