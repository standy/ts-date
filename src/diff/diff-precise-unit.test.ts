import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate} from '../create/create-ts-date';
import {
	diffPreciseSeconds,
	diffPreciseMinutes,
	diffPreciseHours,
	diffPreciseDate,
	diffPreciseMonth,
	diffPreciseYear,
} from './diff-precise-unit';

describe('diffPreciseUnit', function() {
	describe('returns the number of full units between the given dates', function() {
		it('diffPreciseSeconds', function() {
			const tsDate1 = newValidDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const tsDate2 = newValidDate(2017, Month.Jun, 29, 12, 31, 1, 600);
			const result = diffPreciseSeconds(tsDate2, tsDate1);
			assert.deepEqual(result, 2.5);
		});

		it('diffPreciseMinutes', function() {
			const tsDate1 = newValidDate(2017, Month.Jun, 29, 12, 30, 29, 100);
			const tsDate2 = newValidDate(2017, Month.Jun, 29, 12, 32, 59, 100);
			const result = diffPreciseMinutes(tsDate2, tsDate1);
			assert.deepEqual(result, 2.5);
		});

		it('diffPreciseHours', function() {
			const tsDate1 = newValidDate(2017, Month.Jun, 29, 12, 20, 59, 100);
			const tsDate2 = newValidDate(2017, Month.Jun, 29, 14, 50, 59, 100);
			const result = diffPreciseHours(tsDate2, tsDate1);
			assert.deepEqual(result, 2.5);
		});

		it('diffPreciseDate', function() {
			const tsDate1 = newValidDate(2017, Month.Jun, 29, 10, 30, 59, 100);
			const tsDate2 = newValidDate(2017, Month.Jul, 1, 22, 30, 59, 100);
			const result = diffPreciseDate(tsDate2, tsDate1);
			assert.deepEqual(result, 2.5);
		});

		it('diffPreciseMonth', function() {
			const tsDate1 = newValidDate(2017, Month.Apr, 14, 12, 30, 59, 100);
			const tsDate2 = newValidDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			assert.deepEqual(diffPreciseMonth(tsDate2, tsDate1), 2.5);
			assert.deepEqual(diffPreciseMonth(tsDate1, tsDate2), -2.5);
		});

		it('diffPreciseYear', function() {
			const tsDate1 = newValidDate(2017, Month.Apr, 3);
			const tsDate2 = newValidDate(2019, Month.Jun, 15);
			assert.deepEqual(diffPreciseYear(tsDate2, tsDate1), 2.2);
			assert.deepEqual(diffPreciseYear(tsDate1, tsDate2), -2.2);
		});
	});

	it('correct null handling', function() {
		const d1 = newValidDate();
		assert.equal(diffPreciseSeconds(null, d1), null);
		assert.equal(diffPreciseMinutes(null, d1), null);
		assert.equal(diffPreciseHours(null, d1), null);
		assert.equal(diffPreciseDate(null, d1), null);
		assert.equal(diffPreciseMonth(null, d1), null);
		assert.equal(diffPreciseYear(null, d1), null);
		assert.equal(diffPreciseSeconds(d1, null), null);
		assert.equal(diffPreciseMinutes(d1, null), null);
		assert.equal(diffPreciseHours(d1, null), null);
		assert.equal(diffPreciseDate(d1, null), null);
		assert.equal(diffPreciseMonth(d1, null), null);
		assert.equal(diffPreciseYear(d1, null), null);
	});
});
