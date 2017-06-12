/*
import * as moment from 'moment';

import {
	createTsDate, addDate, formatDateIso, format, formatDateTimeIso, parseIso, parseFn,
	formatLocalIso, addMinutes, diffMonth, diffHours, diffYear, diffDate, diffSeconds,
	createValidDateFromIsoStringOrThrow, diffMinutes, diffMilliseconds
} from './ts-date';*/

// const x = addDate(parse('2017-05-06'), 5);
// if (x) {
//
// }


// function test(s: string) {
// 	const res = createValidDateFromIsoString(s);
// 	const res1 = createValidDateFromIsoString1(s);
// 	console.log('>', JSON.stringify(res) === JSON.stringify(res1), res, res1, s);
// }
//
// test('2000-01-01T01:02:03');
// test('2000-01-01T01:02:03.000');
// test('2000-01-01T0.5');
// console.log(formatLocalIso(parseIso('1997')));
// console.log(formatLocalIso(parseIso('1997-07')));
// console.log(formatLocalIso(parseIso('1997-07-16')));
// console.log(formatLocalIso(parseIso('1997-07-16T19:20')));
// console.log(formatLocalIso(parseIso('1997-07-16T19:20+01:00')));
// console.log(formatLocalIso(parseIso('1997-07-16T19:20+02:00')));
// console.log(formatLocalIso(parseIso('1997-07-16T19:20+03:00')));
// console.log(formatLocalIso(parseIso('1997-07-16T19:20+04:00')));
// console.log(formatLocalIso(parseIso('1997-07-16T19:20:30+01:00')));
// console.log(formatLocalIso(parseIso('1997-07-16T19:20:30.455+01:00')));

// const d = createTsDate(new Date(2000, 0, 1));
// if (!d) throw 'bad';

// console.log('>', format(d, 'DD.MM.YYYY HH:mm [test]'));

//
// console.log('>', formatLocalIso(addMinutes(d, 5)));
// console.log('>', formatDateIso(addDate(d, 5)));

// console.log(parseFn('DD.MM.YYYY HH:mm')('12.02.2011 12:31'));
// console.log(parseFn('MMMM DD YYYY HH:mm')('Январь 12 2011 12:31'));

/*
console.log('>', formatDateTimeIso(dParsed));

const momentUnits = 'ms';
const validUnits = diffMilliseconds;
function test(date1: string|number, date2: string|number) {
	const momentDiff = moment(date1).diff(date2, momentUnits);
	const momentDiffDays = moment(date1).diff(date2, 'd', true);
	const vd1 = createTsDate(+moment(date1));
	const vd2 = createTsDate(+moment(date2));
	if (!vd1 || !vd2) throw 'failed args';
	const validDiff = validUnits(vd1, vd2);
	console.log(momentDiff === validDiff, momentDiff, validDiff, formatLocalIso(vd1), formatLocalIso(vd2), moment(date1), moment(date2), momentDiffDays);
	return momentDiff === validDiff;
}


// test('2016-01-20T22:58:49.987', '2015-11-22T10:02:49.279');
// test('2003-07-13T02:59:22.969', '1984-03-20T06:08:02.724');


let i = 0;
while (test(Math.random() * Date.now(), Math.random() * Date.now())) {
	if (i++ > 1000000) break;
}
*/
