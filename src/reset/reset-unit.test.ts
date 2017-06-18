import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {newTsDate} from '../create/create-ts-date';
import {
	resetYear,
	resetMonth,
	resetISOWeek,
	resetDate,
	resetHours,
	resetMinutes,
	resetSeconds,
} from './reset-unit'


describe('reset', function () {
	describe('reset default amount of units', function () {
		
		it('resetSeconds', function () {
			const tsDate = newTsDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const result = resetSeconds(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jun, 29, 12, 30, 59));
		});

		it('resetMinutes', function () {
			const tsDate = newTsDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const result = resetMinutes(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jun, 29, 12, 30));
		});

		it('resetHours', function () {
			const tsDate = newTsDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const result = resetHours(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jun, 29, 12));
		});

		it('resetDate', function () {
			const tsDate = newTsDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const result = resetDate(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jun, 29));
		});

		it('resetWeek', function () {
			const tsDate = newTsDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const result = resetISOWeek(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jun, 26));
			assert.deepEqual(result && result.getDay(), 1);
		});

		it('resetWeek from sunday', function () {
			const tsDate = newTsDate(2017, Month.Jun, 25);
			const result = resetISOWeek(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jun, 19));
			assert.deepEqual(result && result.getDay(), 1);
		});

		it('resetWeek from monday', function () {
			const tsDate = newTsDate(2017, Month.Jun, 26);
			const result = resetISOWeek(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jun, 26));
			assert.deepEqual(result && result.getDay(), 1);
		});

		it('resetMonth', function () {
			const tsDate = newTsDate(2017, Month.Jun, 29, 12, 30, 59, 100);
			const result = resetMonth(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jun, 1));
		});

		it('resetYear', function () {
			const tsDate = newTsDate(2017, Month.Jun, 29);
			const result = resetYear(tsDate);
			assert.deepEqual(result, new Date(2017, Month.Jan, 1));
		});
	});

	it('correct null handling', function () {
		assert.equal(resetYear(null), null);
		assert.equal(resetMonth(null), null);
		assert.equal(resetISOWeek(null), null);
		assert.equal(resetDate(null), null);
		assert.equal(resetHours(null), null);
		assert.equal(resetMinutes(null), null);
		assert.equal(resetSeconds(null), null);
	});
});
