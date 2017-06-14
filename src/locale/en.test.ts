import * as assert from 'power-assert';
import {createTsDate} from '../create/create-ts-date';
import {
	format,
	parse,
} from './en';


describe('ru locale', function () {
	it('correct formatting', function () {
		const date = createTsDate(new Date(2017, Month.Aug, 1, 12, 34, 56, 789));
		const FORMATS = [
			[
				'MMMM MMM dd ddd dddd A Do Wo Mo DDDo do Qo',
				'August Aug Tu Tue Tuesday PM 1st Wo 8th 011st 2nd 3rd',
			],
			[
				'D MMMM hh A',
				'1 August 12 PM',
			],
			[
				'Do MMMM, dddd',
				'1st August, Tuesday',
			],
			[
				'D MMM, dd',
				'1 Aug, Tu',
			],
			[
				'D MMMM, hh A, ddd',
				'1 August, 12 PM, Tue',
			],
			[
				'Qo [Qo], Mo [Mo]',
				'3rd Qo, 8th Mo',
			],
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const [template, correctResult] = FORMATS[i];
			const result = format(date, template);
			assert.equal(result, correctResult, `format "${template}"`);
		}
	});
	it('correct ordinal', function () {
		const d1 = createTsDate(new Date(2017, Month.Aug, 12));
		const d2 = createTsDate(new Date(2017, Month.Aug, 22));
		const d3 = createTsDate(new Date(2017, Month.Aug, 23));
		assert.equal(format(d1, 'Do MMMM'), '12th August');
		assert.equal(format(d2, 'Do MMMM'), '22nd August');
		assert.equal(format(d3, 'Do MMMM'), '23rd August');
	});
	it('correct day part format', function () {
		const d1 = createTsDate(new Date(2017, Month.Aug, 1, 0));
		const d2 = createTsDate(new Date(2017, Month.Aug, 1, 18));
		assert.equal(format(d1, 'h A'), '12 AM');
		assert.equal(format(d2, 'h A'), '6 PM');
		assert.equal(format(d1, 'h a'), '12 am');
		assert.equal(format(d2, 'h a'), '6 pm');
		assert.equal(format(d1, 'h aa'), '12 a.m.');
		assert.equal(format(d2, 'h aa'), '6 p.m.');
	});
	it('correct parsing', function () {
		const FORMATS = [
			{
				template: 'D MMMM YY [Year]',
				dateStr: '1 August 17 Year',
				correctResult: new Date(2017, Month.Aug, 1),
			},
			{
				template: 'YYYY MMMM',
				dateStr: '2017 AUGUST',
				correctResult: new Date(2017, Month.Aug, 1),
			},
			{
				/* NOTE Wrong format*/
				template: 'YYYY MMMM',
				dateStr: '2017 Aug',
				correctResult: null,
			},
			{
				template: 'D MMM YY',
				dateStr: '1 Aug 17',
				correctResult: new Date(2017, Month.Aug, 1),
			},
			{
				template: 'MMMM YYYY',
				dateStr: 'August 2017',
				correctResult: new Date(2017, Month.Aug, 1),
			},
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const {template, dateStr, correctResult} = FORMATS[i];
			const result = parse(dateStr, template);
			assert.deepEqual(result, createTsDate(correctResult), `parse "${dateStr}" with "${template}"`);
		}
	});
});
