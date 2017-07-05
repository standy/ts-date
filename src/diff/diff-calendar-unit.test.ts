import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate} from '../create/create-ts-date';
import {
	diffCalendarDate,
	diffCalendarMonth,
	diffCalendarYear,
} from './diff-calendar-unit'


describe('diffUnit', function () {
	describe('returns the number of full units between the given dates', function () {
		it('diffCalendarDate', function () {
			const tsDate1 = newValidDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const tsDate2 = newValidDate(2017, Month.Jul, 1, 12, 30, 59, 100);
			const result = diffCalendarDate(tsDate2, tsDate1);
			assert.deepEqual(result, 2);
		});

		it('diffCalendarMonth', function () {
			const tsDate1 = newValidDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const tsDate2 = newValidDate(2017, Month.Aug, 29, 12, 30, 59, 100);
			const result = diffCalendarMonth(tsDate2, tsDate1);
			assert.deepEqual(result, 2);
		});

		it('diffCalendarYear', function () {
			const tsDate1 = newValidDate(2017, Month.Jun, 29);
			const tsDate2 = newValidDate(2019, Month.Jun, 29);
			const result = diffCalendarYear(tsDate2, tsDate1);
			assert.deepEqual(result, 2);
		});
	});

	describe('diffDate edge cases', function () {
		it('less then a day', function () {
			const tsDate1 = newValidDate(2017, Month.Jun, 28, 23, 59, 59, 99);
			const tsDate2 = newValidDate(2017, Month.Jun, 29);
			const result = diffCalendarDate(tsDate2, tsDate1);
			assert.deepEqual(result, 1);
		});
		it('less then a day reverse', function () {
			const tsDate1 = newValidDate(2017, Month.Jun, 29);
			const tsDate2 = newValidDate(2017, Month.Jun, 28, 0, 0, 0, 1);
			const result = diffCalendarDate(tsDate2, tsDate1);
			assert.deepEqual(result, -1);
		});
		it('same day', function () {
			const tsDate1 = newValidDate(2017, Month.Jun, 29, 23, 59, 59, 999);
			const tsDate2 = newValidDate(2017, Month.Jun, 29);
			const result = diffCalendarDate(tsDate2, tsDate1);
			assert.deepEqual(result, 0);
		});
		it('same day reverse', function () {
			const tsDate1 = newValidDate(2017, Month.Jun, 29);
			const tsDate2 = newValidDate(2017, Month.Jun, 29, 23, 59, 59, 999);
			const result = diffCalendarDate(tsDate2, tsDate1);
			assert.deepEqual(result, 0);
		});
		it('diff with same time', function () {
			const tsDate1 = newValidDate(2017, Month.Jun, 19, 23, 30);
			const tsDate2 = newValidDate(2017, Month.Jun, 29, 23, 30);
			const result = diffCalendarDate(tsDate2, tsDate1);
			assert.deepEqual(result, 10);
		});

		it('correct null handling', function () {
			const d1 = newValidDate();
			assert.equal(diffCalendarDate(null, d1), null);
			assert.equal(diffCalendarMonth(null, d1), null);
			assert.equal(diffCalendarYear(null, d1), null);
			assert.equal(diffCalendarDate(d1, null), null);
			assert.equal(diffCalendarMonth(d1, null), null);
			assert.equal(diffCalendarYear(d1, null), null);
		});
	});

	describe('diffMonth edge cases', function() {
		it('diff between same month', function () {
			const a = newValidDate(2017, Month.Jan, 1, 0);
			const c = newValidDate(2017, Month.Jan, 31, 23, 59, 59);

			assert.equal(diffCalendarMonth(c, a), 0);
		});
		it('diff between last days of month', function () {
			const a = newValidDate(2017, Month.Feb, 28, 1);
			const c = newValidDate(2017, Month.Mar, 31, 0);

			assert.equal(diffCalendarMonth(c, a), 1);
		});
		it('diff between last seconds of month', function () {
			const a = newValidDate(2017, Month.Apr, 30, 23, 59, 59, 999);
			const b = newValidDate(2017, Month.May, 30, 23, 59, 59, 998);
			const c = newValidDate(2017, Month.May, 30, 23, 59, 59, 999);

			assert.equal(diffCalendarMonth(b, a), 1);
			assert.equal(diffCalendarMonth(c, a), 1);
		});
	});

	describe('diffYear edge cases', function() {
		it('diff between same year', function () {
			const d1 = newValidDate(2017, Month.Jan, 1);
			const d2 = newValidDate(2017, Month.Dec, 31, 23, 59, 59, 999);
			assert.equal(diffCalendarYear(d1, d2), 0);
		});
		it('diff between leap years', function () {
			const d1 = newValidDate(2016, Month.Feb, 29);
			const d2 = newValidDate(2017, Month.Feb, 28, 23, 59, 59, 999);
			const d3 = newValidDate(2020, Month.Feb, 29);

			assert.equal(diffCalendarYear(d2, d1), 1);
			assert.equal(diffCalendarYear(d3, d1), 4);
		});
	});
});
