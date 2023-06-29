import {Month} from '../../../src/utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate} from '../../../src/create/create-ts-date';
import {format, parse} from './index';

describe('uz-cr locale', function () {
	it('correct formatting', function () {
		const date = newValidDate(2017, Month.Aug, 1, 12, 34, 56, 789);
		const FORMATS = [
			['MMMM MMM ddd dddd A Do Wo Mo DDDo do Qo', 'август авг Сеш сешанба ТК 1 31 8 213 2 3'],
			['D MMMM hh A', '1 август 12 ТК'],
			['Do MMMM, dddd', '1 август, сешанба'],
			['D MMMM, hh A, ddd', '1 август, 12 ТК, Сеш'],
			['D MMMM, hh aa, ddd', '1 август, 12 т.к., Сеш'],
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const [template, correctResult] = FORMATS[i];
			const result = format(date, template);
			assert.equal(result, correctResult, `format "${template}"`);
		}
	});

	it('correct ordinal', function () {
		const d1 = newValidDate(2017, Month.Aug, 12);
		const d2 = newValidDate(2017, Month.Aug, 22);
		const d3 = newValidDate(2017, Month.Aug, 23);
		assert.equal(format(d1, 'Do MMMM'), '12 август');
		assert.equal(format(d2, 'Do MMMM'), '22 август');
		assert.equal(format(d3, 'Do MMMM'), '23 август');
	});

	it('correct day part format', function () {
		const d1 = newValidDate(2017, Month.Oct, 1, 0, 42, 12);
		const d2 = newValidDate(2017, Month.Oct, 1, 18, 42, 12);
		assert.equal(format(d1, 'h A'), '12 ТО');
		assert.equal(format(d2, 'h A'), '6 ТК');
		assert.equal(format(d1, 'h a'), '12 то');
		assert.equal(format(d2, 'h a'), '6 тк');
		assert.equal(format(d1, 'h aa'), '12 т.о.');
		assert.equal(format(d2, 'h aa'), '6 т.к.');
		assert.equal(format(d1, 'HH:mm:ss'), '00:42:12');
		assert.equal(format(d2, 'HH:mm:ss'), '18:42:12');
	});

	it('correct parsing', function () {
		const FORMATS = [
			{
				template: 'Do MMMM YY',
				dateStr: '1 август 17',
				correctResult: newValidDate(2017, Month.Aug, 1),
			},
			{
				template: 'D MMM YY',
				dateStr: '1 авг 17',
				correctResult: newValidDate(2017, Month.Aug, 1),
			},
			{
				template: 'MMMM YYYY',
				dateStr: 'август 2017',
				correctResult: newValidDate(2017, Month.Aug, 1),
			},
			{
				template: 'D MMMM YYYY',
				dateStr: '1 август 17',
				correctResult: null,
			},
			{
				template: 'DD MMMM YY',
				dateStr: '1 август 17',
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
