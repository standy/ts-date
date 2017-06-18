import * as assert from 'power-assert';
import {
	newTsDate,
	newTsDateOrThrow,
	createTsDate,
} from './create-ts-date'


describe('create', function () {
	it('create date', function() {
		assert.ok(createTsDate(new Date()));
		assert.ok(newTsDate(+new Date()));
	});

	it('correct null handling', function() {
		assert.equal(createTsDate(NaN), null);
		assert.equal(newTsDate(NaN), null);
		assert.throws(() => newTsDateOrThrow(NaN));
	});
});
