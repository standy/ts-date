import {Month} from '../../src/utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate} from '../../src/create/create-ts-date';
import {format, parse} from './index';

describe('da locale', function () {
	it('correct formatting', function () {
		const date = newValidDate(2017, Month.Oct, 1, 12, 34, 56, 789);
		const FORMATS = [
			['MMMM MMM dd ddd dddd A Do Wo Mo DDDo do Qo', 'oktober okt sø søn søndag PM 1. 39. 10. 274. 0. 4.'],
			['D MMMM hh A', '1 oktober 12 PM'],
			['Do MMMM, dddd', '1. oktober, søndag'],
			['D MMM, dd', '1 okt, sø'],
			['D MMMM, hh A, ddd', '1 oktober, 12 PM, søn'],
			['Qo [Qo], Mo [Mo]', '4. Qo, 10. Mo'],
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const [template, correctResult] = FORMATS[i];
			const result = format(date, template);
			assert.equal(result, correctResult, `format "${template}"`);
		}
	});
	it('correct ordinal', function () {
		const d1 = newValidDate(2017, Month.Oct, 12);
		const d2 = newValidDate(2017, Month.Oct, 22);
		const d3 = newValidDate(2017, Month.Oct, 23);
		assert.equal(format(d1, 'Do MMMM'), '12. oktober');
		assert.equal(format(d2, 'Do MMMM'), '22. oktober');
		assert.equal(format(d3, 'Do MMMM'), '23. oktober');
	});
	it('correct day part format', function () {
		const d1 = newValidDate(2017, Month.Oct, 1, 0, 42, 12);
		const d2 = newValidDate(2017, Month.Oct, 1, 18, 42, 12);
		assert.equal(format(d1, 'h A'), '12 AM');
		assert.equal(format(d2, 'h A'), '6 PM');
		assert.equal(format(d1, 'h a'), '12 am');
		assert.equal(format(d2, 'h a'), '6 pm');
		assert.equal(format(d1, 'h aa'), '12 a.m.');
		assert.equal(format(d2, 'h aa'), '6 p.m.');
		assert.equal(format(d1, 'HH:mm:ss'), '00:42:12');
		assert.equal(format(d2, 'HH:mm:ss'), '18:42:12');
	});
	it('correct parsing', function () {
		const FORMATS = [
			{
				template: 'D MMMM YY [Year]',
				dateStr: '1 oktober 17 Year',
				correctResult: newValidDate(2017, Month.Oct, 1),
			},
			{
				template: 'YYYY MMMM',
				dateStr: '2017 OKTOBER',
				correctResult: newValidDate(2017, Month.Oct, 1),
			},
			{
				/* NOTE Wrong format*/
				template: 'YYYY MMMM',
				dateStr: '2017 okt',
				correctResult: null,
			},
			{
				template: 'Do MMM YY',
				dateStr: '1. okt 17',
				correctResult: newValidDate(2017, Month.Oct, 1),
			},
			{
				template: 'MMMM YYYY',
				dateStr: 'oktober 2017',
				correctResult: newValidDate(2017, Month.Oct, 1),
			},
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const {template, dateStr, correctResult} = FORMATS[i];
			const result = parse(dateStr, template);
			assert.deepEqual(result, correctResult, `parse "${dateStr}" with "${template}"`);
		}
	});
});
