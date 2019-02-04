import * as assert from 'power-assert';
import {Month} from '../utils/basic-types';
import {newValidDate, newValidDateOrThrow, fromDate, fromDateOrThrow} from './create-ts-date';

describe('create', function() {
	it('create date', function() {
		assert.ok(fromDate(new Date()));
		assert.ok(fromDateOrThrow(new Date()));
		assert.ok(newValidDate(+new Date()));
	});

	it('correct null handling', function() {
		assert.equal(fromDate(NaN), null);
		assert.equal(newValidDate(NaN), null);
		assert.throws(() => fromDateOrThrow(NaN));
		assert.throws(() => newValidDateOrThrow(NaN));
	});

	it('correct turn ValidDate to Date ', function() {
		const date = newValidDateOrThrow(2017, Month.Jul, 1) as Date;
		date.setDate(2);
		assert.deepEqual(date, new Date(2017, Month.Jul, 2));
	});
});
