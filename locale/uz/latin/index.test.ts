import {Month} from '../../../src/utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate} from '../../../src/create/create-ts-date';
import {format, parse} from './index';

describe('uz-lt locale', function () {
	it('correct formatting', function () {
		const date = newValidDate(2017, Month.Aug, 1, 12, 34, 56, 789);
		const FORMATS = [
			['MMMM MMM ddd dddd A Do Wo Mo DDDo do Qo', 'avgust avg Ses seshanba TK 1 31 8 213 2 3'],
			['D MMMM hh A', '1 avgust 12 TK'],
			['Do MMMM, dddd', '1 avgust, seshanba'],
			['D MMMM, hh A, ddd', '1 avgust, 12 TK, Ses'],
			['D MMMM, hh aa, ddd', '1 avgust, 12 t.k., Ses'],
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
		assert.equal(format(d1, 'Do MMMM'), '12 avgust');
		assert.equal(format(d2, 'Do MMMM'), '22 avgust');
		assert.equal(format(d3, 'Do MMMM'), '23 avgust');
	});

	it('correct day part format', function () {
		const d1 = newValidDate(2017, Month.Oct, 1, 0, 42, 12);
		const d2 = newValidDate(2017, Month.Oct, 1, 18, 42, 12);
		assert.equal(format(d1, 'h A'), '12 TO');
		assert.equal(format(d2, 'h A'), '6 TK');
		assert.equal(format(d1, 'h a'), '12 to');
		assert.equal(format(d2, 'h a'), '6 tk');
		assert.equal(format(d1, 'h aa'), '12 t.o.');
		assert.equal(format(d2, 'h aa'), '6 t.k.');
		assert.equal(format(d1, 'HH:mm:ss'), '00:42:12');
		assert.equal(format(d2, 'HH:mm:ss'), '18:42:12');
	});

	it('correct parsing', function () {
		const FORMATS = [
			{
				template: 'D MMMM YY',
				dateStr: '1 oktabr 17',
				correctResult: newValidDate(2017, Month.Oct, 1),
			},
			{
				template: 'YYYY MMMM',
				dateStr: '2017 oktabr',
				correctResult: newValidDate(2017, Month.Oct, 1),
			},
			{
				template: 'YYYY MMMM',
				dateStr: '2017 OKT',
				correctResult: null,
			},
			{
				template: 'Do MMM YY',
				dateStr: '1 okt 17',
				correctResult: newValidDate(2017, Month.Oct, 1),
			},
			{
				template: 'MMMM YYYY',
				dateStr: 'oktabr 2017',
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
