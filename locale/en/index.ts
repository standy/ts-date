import {createFormat} from '../../src/format/create-format';
import {createParse, parseOrThrowWrapper} from '../../src/parse/create-parse';
import defaultFormatters from '../../src/format/default-formatters';
import defaultParsers from '../../src/parse/default-parsers';
import {FormatterObj} from '../../src/format/default-formatters';
import {ParserObj, FormatByTemplateFn, ParseByTemplateFn, ParseByTemplateOrThrowFn} from '../../src/utils/basic-types';
import {extend} from '../../src/utils/utils';
export * from '../../src/default-exports';


// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const meridiemUppercase = ['AM', 'PM'];
const meridiemLowercase = ['am', 'pm'];
const meridiemFull = ['a.m.', 'p.m.'];

const formatters: FormatterObj = {
	// Month: Jan, Feb, ..., Dec
	'MMM': date => months3char[date.getMonth()],

	// Month: January, February, ..., December
	'MMMM': date => monthsFull[date.getMonth()],

	// Day of week: Su, Mo, ..., Sa
	'dd': date => weekdays2char[date.getDay()],

	// Day of week: Sun, Mon, ..., Sat
	'ddd': date => weekdays3char[date.getDay()],

	// Day of week: Sunday, Monday, ..., Saturday
	'dddd': date => weekdaysFull[date.getDay()],

	// AM, PM
	'A': date => meridiemUppercase[date.getHours() < 12 ? 0 : 1],

	// am, pm
	'a': date => meridiemLowercase[date.getHours() < 12 ? 0 : 1],

	// a.m., p.m.
	'aa': date => meridiemFull[date.getHours() < 12 ? 0 : 1],

};

// Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
const ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
ordinalFormatters.forEach(formatterToken => {
	formatters[formatterToken + 'o'] = date => ordinal(defaultFormatters[formatterToken](date) as number);
});

function ordinal(number: number) {
	const rem100 = number % 100;
	if (rem100 > 20 || rem100 < 10) {
		switch (rem100 % 10) {
			case 1:
				return number + 'st';
			case 2:
				return number + 'nd';
			case 3:
				return number + 'rd'
		}
	}
	return number + 'th'
}

function toLower(s: string) { return s.toLowerCase(); }
const months3charLower = months3char.map(toLower);
const monthsFullLower = monthsFull.map(toLower);
const parsers: ParserObj = {
	// Month: Jan, Feb, ..., Dec
	'MMM': [months3charLower.join('|'), (date, value) => {
		const index = months3charLower.indexOf(value.toLowerCase());
		date.setMonth(index);
	}],

	// Month: January, February, ..., December
	'MMMM': [monthsFullLower.join('|'), (date, value) => {
		value = value.toLowerCase();
		let index = monthsFullLower.indexOf(value);
		date.setMonth(index);
	}],
};

ordinalFormatters.forEach(formatterToken => {
	parsers[formatterToken + 'o'] = ['\\d+(?:st|nd|rd)', (date, value) => {
		defaultParsers[formatterToken][1](date, value.slice(0, -2));
	}];
});

export const format: FormatByTemplateFn = createFormat(extend(defaultFormatters, formatters));
export const parse: ParseByTemplateFn = createParse(extend(defaultParsers, parsers));
export const parseOrThrow: ParseByTemplateOrThrowFn = parseOrThrowWrapper(parse);

