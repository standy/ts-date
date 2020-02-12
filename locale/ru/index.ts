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
} from '../../src/utils/basic-types';
import {extend} from '../../src/utils/utils';
import {ValidDate} from '../../src/valid-date';
export * from '../../src/default-exports';

// http://new.gramota.ru/spravka/buro/search-answer?s=242637
const monthsShort = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];
const monthsFull = [
	'январь',
	'февраль',
	'март',
	'апрель',
	'май',
	'июнь',
	'июль',
	'август',
	'сентябрь',
	'октябрь',
	'ноябрь',
	'декабрь',
];
const monthsGenitive = [
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря',
];
const weekdays2char = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const weekdays3char = ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'];
const weekdaysFull = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const meridiem = ['ночи', 'утра', 'дня', 'вечера'];

function timeOfDay(date: ValidDate) {
	const hours = date.getHours();
	if (hours >= 17) {
		return meridiem[3];
	} else if (hours >= 12) {
		return meridiem[2];
	} else if (hours >= 4) {
		return meridiem[1];
	} else {
		return meridiem[0];
	}
}

export const formatters: FormatterObj = {
	// Month: янв., фев., ..., дек.
	MMM: date => monthsShort[date.getMonth()],

	// Month: январь, февраль, ..., декабрь
	MMMM: (date, index, tokens) => {
		const month = date.getMonth();
		if (tokens === undefined || index === undefined || index < 2) return monthsFull[month];

		const prevToken = tokens[index - 2];
		if (
			(typeof tokens[index - 1] === 'string' && prevToken === defaultFormatters.D) ||
			prevToken === defaultFormatters.DD
		) {
			// Generate formatters like 'D[some string]MMMM',
			// where month is in the genitive case: января, февраля, ..., декабря
			return monthsGenitive[month];
		}
		return monthsFull[month];
	},

	// Day of week: вс, пн, ..., сб
	dd: date => weekdays2char[date.getDay()],

	// Day of week: вск, пнд, ..., суб
	ddd: date => weekdays3char[date.getDay()],

	// Day of week: воскресенье, понедельник, ..., суббота
	dddd: date => weekdaysFull[date.getDay()],

	// Time of day: ночи, утра, дня, вечера
	A: timeOfDay,
	a: timeOfDay,
	aa: timeOfDay,

	// Generate ordinal version of formatters: M -> Mo, DDD -> DDDo, etc.
	Do: date => defaultFormatters['D'](date) + '-е',
	Wo: date => defaultFormatters['W'](date) + '-й',
	Mo: date => defaultFormatters['M'](date) + '-й',
	DDDo: date => defaultFormatters['DDD'](date) + '-й',
	do: date => defaultFormatters['d'](date) + '-й',
	Qo: date => defaultFormatters['Q'](date) + '-й',

	'Do MMMM': date => formatters['Do'](date) + ' ' + monthsGenitive[date.getMonth()],
};

const parsers: ParserObj = {
	// Month: янв., фев., ..., дек.
	MMM: [
		monthsShort.join('|'),
		(date, value) => {
			const index = monthsShort.indexOf(value.toLowerCase());
			date.setMonth(index);
		},
	],

	// Month: январь, февраль, ..., декабрь
	// ... января, февраля, ..., декабря
	MMMM: [
		monthsFull.concat(monthsGenitive).join('|'),
		(date, value) => {
			value = value.toLowerCase();
			let index = monthsFull.indexOf(value);
			if (index < 0) index = monthsGenitive.indexOf(value);
			date.setMonth(index);
		},
	],

	// Generate ordinal version of parsers by cutting the suffix
	Do: ordinalParser('D', '-е'),
	Wo: ordinalParser('W', '-й'),
	Mo: ordinalParser('M', '-й'),
	DDDo: ordinalParser('DDD', '-й'),
	do: ordinalParser('d', '-й'),
	Qo: ordinalParser('Q', '-й'),
};

function ordinalParser(token: string, suffix: string): ParserData {
	return [
		'\\d+' + suffix,
		(date, value) => {
			defaultParsers[token][1](date, value.slice(0, -suffix.length));
		},
	];
}

export const format: FormatByTemplateFn = createFormat(extend(defaultFormatters, formatters));
export const createCustomFormat = createCustomFormatFn(extend(defaultFormatters, formatters));
export const parse: ParseByTemplateFn = createParse(extend(defaultParsers, parsers));
export const parseOrThrow: ParseByTemplateOrThrowFn = parseOrThrowWrapper(parse);
