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
	ParserData,
	Formatter,
} from '../../src/utils/basic-types';
import {extend} from '../../src/utils/utils';
export * from '../../src/default-exports';

const monthsShort = ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avg', 'sen', 'okt', 'noy', 'dek'];
const monthsFull = [
	'yanvar',
	'fevral',
	'mart',
	'aprel',
	'may',
	'iyun',
	'iyul',
	'avgust',
	'sentabr',
	'oktabr',
	'noyabr',
	'dekabr'
];
const weekdays2char = ['Yak', 'Dus', 'Ses', 'Cho', 'Pay', 'Jum', 'Sha'];
const weekdays3char = ['Yak', 'Dus', 'Ses', 'Cho', 'Pay', 'Jum', 'Sha'];
const weekdaysFull = ['yakshanba', 'dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'];
const meridiemUppercase = ['TO', 'TK'];
const meridiemLowercase = ['to', 'tk'];
const meridiemFull = ['t.o.', 't.k.'];

export const formatters: FormatterObj = {
	// Month: yan, fev, ..., dek
	MMM: (date) => monthsShort[date.getMonth()],

	// Month: 'yanvar', 'fevral', ..., dekabr
	MMMM: (date) => monthsFull[date.getMonth()],

	// Day of week: Yak, Dus, ..., Sha
	dd: (date) => weekdays2char[date.getDay()],

	// Day of week: Yak, Dus, ..., Sha
	ddd: (date) => weekdays3char[date.getDay()],

	// Day of week: yakshanba, dushanba, ..., shanba
	dddd: (date) => weekdaysFull[date.getDay()],

	// TO, TK
	A: (date) => meridiemUppercase[date.getHours() < 12 ? 0 : 1],

	// to, tk
	a: (date) => meridiemLowercase[date.getHours() < 12 ? 0 : 1],

	// t.o., t.k.
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
	return (date) => defaultFormatters[formatterToken](date);
}

const parsers: ParserObj = {
	// Month: янв., фев., ..., дек.
	MMM: [
		monthsShort.join('|'),
		(date, value) => {
			const index = monthsShort.indexOf(value.toLowerCase());
			date.setMonth(index);
		},
	],

	MMMM: [
		monthsFull.join('|'),
		(date, value) => {
			value = value.toLowerCase();
			let index = monthsFull.indexOf(value);
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
		'\\d+',
		(date, value) => {
			defaultParsers[token][1](date, value);
		},
	];
}

export const format: FormatByTemplateFn = createFormat(extend(defaultFormatters, formatters));
export const createCustomFormat = createCustomFormatFn(extend(defaultFormatters, formatters));
export const parse: ParseByTemplateFn = createParse(extend(defaultParsers, parsers));
export const parseOrThrow: ParseByTemplateOrThrowFn = parseOrThrowWrapper(parse);
