import * as assert from 'power-assert';
import {
	newTsDate,
	newTsDateOrThrow,
	fromDate,
	fromDateOrThrow,
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
});
