import {createFormat} from '../../src/format/create-format';
import {createParse} from '../../src/parse/create-parse';
import defaultFormatters from '../../src/format/default-formatters';
import defaultParsers from '../../src/parse/default-parsers';
import {FormatterObj} from '../../src/format/default-formatters';
import {ParserObj, ValidDateMethod1D1Arg, ParseTemplate} from '../../src/utils/basic-types';
export * from '../../src/default-exports';

// http://new.gramota.ru/spravka/buro/search-answer?s=242637
const monthsShort = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];
const monthsFull = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const monthsGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const weekdays2char = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const weekdays3char = ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'];
const weekdaysFull = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const meridiem = ['ночи', 'утра', 'дня', 'вечера'];

const formatters: FormatterObj = {
	// Month: янв., фев., ..., дек.
	'MMM': date => monthsShort[date.getMonth()],

	// Month: январь, февраль, ..., декабрь
	'MMMM': date => monthsFull[date.getMonth()],

	// Day of week: вс, пн, ..., сб
	'dd': date => weekdays2char[date.getDay()],

	// Day of week: вск, пнд, ..., суб
	'ddd': date => weekdays3char[date.getDay()],

	// Day of week: воскресенье, понедельник, ..., суббота
	'dddd': date => weekdaysFull[date.getDay()],

	// Time of day: ночи, утра, дня, вечера
	'A': date => {
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
	},

	// Generate ordinal version of formatters: M -> Mo, DDD -> DDDo, etc.
	'Do': date => defaultFormatters['D'](date) + '-е',
	'Wo': date => defaultFormatters['W'](date) + '-й',
	'Mo': date => defaultFormatters['M'](date) + '-й',
	'DDDo': date => defaultFormatters['DDD'](date) + '-й',
	'do': date => defaultFormatters['d'](date) + '-й',
	'Qo': date => defaultFormatters['Q'](date) + '-й',

	'Do MMMM': date => formatters['Do'](date) + ' ' + monthsGenitive[date.getMonth()]
};

formatters['a'] = formatters['aa'] = formatters['A'];


// Generate formatters like 'D MMMM',
// where month is in the genitive case: января, февраля, ..., декабря
const monthsGenitiveFormatters = ['D', 'DD'];
monthsGenitiveFormatters.forEach(formatterToken => {
	formatters[formatterToken + ' MMMM'] = (date) => defaultFormatters[formatterToken](date) + ' ' + monthsGenitive[date.getMonth()];
});


const parsers: ParserObj = {
	// Month: янв., фев., ..., дек.
	'MMM': [monthsShort.join('|'), (date, value) => {
		const index = monthsShort.indexOf(value.toLowerCase());
		date.setMonth(index);
	}],

	// Month: январь, февраль, ..., декабрь
	// ... января, февраля, ..., декабря
	'MMMM': [monthsFull.concat(monthsGenitive).join('|'), (date, value) => {
		value = value.toLowerCase();
		let index = monthsFull.indexOf(value);
		if (index < 0) index = monthsGenitive.indexOf(value);
		date.setMonth(index);
	}],
};

export const format: ValidDateMethod1D1Arg<string, string> = createFormat(Object.assign({}, defaultFormatters, formatters));
export const parse: ParseTemplate = createParse(Object.assign({}, defaultParsers, parsers));

