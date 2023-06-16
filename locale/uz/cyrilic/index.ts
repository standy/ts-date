import {createCustomFormatFn, createFormat} from '../../../src/format/create-format';
import {createParse, parseOrThrowWrapper} from '../../../src/parse/create-parse';
import {defaultFormatters} from '../../../src/format/default-formatters';
import defaultParsers from '../../../src/parse/default-parsers';
import {
	ParserObj,
	FormatterObj,
	FormatByTemplateFn,
	ParseByTemplateFn,
	ParseByTemplateOrThrowFn,
	ParserData,
	Formatter,
} from '../../../src/utils/basic-types';
import {extend} from '../../../src/utils/utils';
export * from '../../../src/default-exports';

const monthsShort = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const monthsFull = [
	'январ',
	'феврал',
	'март',
	'апрел',
	'май',
	'июн',
	'июл',
	'август',
	'сентябр',
	'октябр',
	'ноябр',
	'декабр'
];
const monthsGenitive = [
	'январ',
	'феврал',
	'март',
	'апрел',
	'май',
	'июн',
	'июл',
	'август',
	'сентябр',
	'октябр',
	'ноябр',
	'декабр'
];
const weekdays2char = ['як', 'ду', 'се', 'чо', 'па', 'жу', 'ша'];
const weekdays3char = ['якш', 'душ', 'сеш', 'чор', 'пай', 'жум', 'шан'];
const weekdaysFull = ['якшанба', 'душанба', 'сешанба', 'чоршанба', 'пайшанба', 'жума', 'шанба'];
const meridiemUppercase = ['TO', 'TK'];
const meridiemLowercase = ['to', 'tk'];
const meridiemFull = ['t.o.', 't.k.'];

export const formatters: FormatterObj = {
	// Month: янв, фев, ..., дек
	MMM: (date) => monthsShort[date.getMonth()],

	// Month: 'январ', 'феврал', ..., декабр
	MMMM: (date) => monthsFull[date.getMonth()],

	// Day of week: як, ду, ..., ша
	dd: (date) => weekdays2char[date.getDay()],

	// Day of week: якш, душ, ..., шан
	ddd: (date) => weekdays3char[date.getDay()],

	// Day of week: якшанба, душанба, ..., шанба
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

function ordinalFormatter(formatterToken: string): Formatter {
	return (date) => defaultFormatters[formatterToken](date);
}

const parsers: ParserObj = {
	MMM: [
		monthsShort.join('|'),
		(date, value) => {
			const index = monthsShort.indexOf(value.toLowerCase());
			date.setMonth(index);
		},
	],

	MMMM: [
		monthsFull.concat(monthsGenitive).join('|'),
		(date, value) => {
			value = value.toLowerCase();
			let index = monthsFull.indexOf(value);
			if (index < 0) index = monthsGenitive.indexOf(value);
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
