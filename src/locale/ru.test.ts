import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {newTsDate} from '../create/create-ts-date';
import {
	format,
	parse,
} from './ru';


describe('ru locale', function () {
	it('correct formatting', function () {
		const date = newTsDate(2017, Month.Aug, 1, 12, 34, 56, 789);
		const FORMATS = [
			[
				'MMMM MMM dd ddd dddd A Do Wo Mo DDDo do Qo',
				'август авг. вт втр вторник дня 1-е Wo 8-й 011-е 2-й 3-й',
			],
			[
				'D MMMM hh A',
				'1 августа 12 дня',
			],
			[
				'Do MMMM, dddd',
				'1-е августа, вторник',
			],
			[
				'D MMM, dd',
				'1 авг., вт',
			],
			[
				'D MMMM, hh A, ddd',
				'1 августа, 12 дня, втр',
			],
			[
				'Qo [квартал], Mo [месяц]',
				'3-й квартал, 8-й месяц',
			],
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const [template, correctResult] = FORMATS[i];
			const result = format(date, template);
			assert.equal(result, correctResult, `format "${template}"`);
		}
	});
	it('correct day part format', function () {
		const d1 = newTsDate(2017, Month.Aug, 1, 0);
		const d2 = newTsDate(2017, Month.Aug, 1, 6);
		const d3 = newTsDate(2017, Month.Aug, 1, 12);
		const d4 = newTsDate(2017, Month.Aug, 1, 18);
		const template = 'h A';
		assert.equal(format(d1, template), '12 ночи');
		assert.equal(format(d2, template), '6 утра');
		assert.equal(format(d3, template), '12 дня');
		assert.equal(format(d4, template), '6 вечера');
	});
	it('correct parsing', function () {
		const FORMATS = [
			{
				template: 'D MMMM YY [года]',
				dateStr: '1 августа 17 года',
				correctResult: newTsDate(2017, Month.Aug, 1),
			},
			{
				template: 'D MMM YY [года]',
				dateStr: '1 авг. 17 года',
				correctResult: newTsDate(2017, Month.Aug, 1),
			},
			{
				template: 'MMMM YYYY',
				dateStr: 'август 2017',
				correctResult: newTsDate(2017, Month.Aug, 1),
			},
			{
				/* NOTE Incomplete date */
				template: 'D MMMM YYYY',
				dateStr: '1 августа 17',
				correctResult: null,
			},
			{
				/* NOTE 2 digits date required by template */
				template: 'DD MMMM YY',
				dateStr: '1 августа 17',
				correctResult: null,
			},
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const {template, dateStr, correctResult} = FORMATS[i];
			const result = parse(dateStr, template);
			assert.deepEqual(result, correctResult, `parse "${dateStr}" with "${template}"`);
		}
	});
});
