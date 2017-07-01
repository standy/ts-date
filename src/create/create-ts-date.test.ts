import * as assert from 'power-assert';
import {Month} from "../utils/basic-types";
import {
	newTsDate,
	newTsDateOrThrow,
	fromDate,
	fromDateOrThrow,
	asDate,
} from './create-ts-date'


describe('create', function () {
	it('create date', function() {
		assert.ok(fromDate(new Date()));
		assert.ok(fromDateOrThrow(new Date()));
		assert.ok(newTsDate(+new Date()));
	});

	it('correct null handling', function() {
		assert.equal(fromDate(NaN), null);
		assert.equal(newTsDate(NaN), null);
		assert.throws(() => fromDateOrThrow(NaN));
		assert.throws(() => newTsDateOrThrow(NaN));
	});

	it('correct turn ValidDate to Date ', function () {
		const d = newTsDateOrThrow(2017, Month.Jul, 1);
		const date = asDate(d);
		date.setDate(2);
		assert.deepEqual(date, new Date(2017, Month.Jul, 2));
		assert.deepEqual(d, new Date(2017, Month.Jul, 1));
	});
});
