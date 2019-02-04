import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate} from '../create/create-ts-date';
import {formatLocalIso, formatDateTimeIso, formatDateIso} from './format-iso';

describe('format-predefined', function() {
	describe('formatLocalIso', function() {
		it('correct formatting', function() {
			const date = newValidDate(2017, Month.Jun, 1, 12, 34, 56, 789);
			assert.equal(formatLocalIso(date), '2017-06-01T12:34:56.789');
		});
		it('null handling', function() {
			assert.equal(formatLocalIso(null), null);
		});
		it('"Invalid Date" handling', function() {
			assert.equal(formatLocalIso(new Date(NaN)), null);
		});
		it('correct formatting with timezone changes', function() {
			const date = newValidDate(2014, Month.Oct, 26, 1, 21, 10, 107);
			assert.equal(formatLocalIso(date), '2014-10-26T01:21:10.107');
		});
	});

	describe('formatDateTimeIso', function() {
		it('correct formatting', function() {
			const date = newValidDate(2017, Month.Jun, 1, 12, 34, 56, 789);
			assert.equal(formatDateTimeIso(date), '2017-06-01T12:34');
		});
		it('null handling', function() {
			assert.equal(formatDateTimeIso(null), null);
		});
		it('"Invalid Date" handling', function() {
			assert.equal(formatDateTimeIso(new Date(NaN)), null);
		});
		it('correct formatting with timezone changes', function() {
			const date = newValidDate(2014, Month.Oct, 26, 1, 21, 10, 107);
			assert.equal(formatDateTimeIso(date), '2014-10-26T01:21');
		});
	});

	describe('formatDateIso', function() {
		it('correct formatting', function() {
			const date = newValidDate(2017, Month.Jun, 1, 12, 34, 56, 789);
			assert.equal(formatDateIso(date), '2017-06-01');
		});
		it('null handling', function() {
			assert.equal(formatDateIso(null), null);
		});
		it('"Invalid Date" handling', function() {
			assert.equal(formatDateIso(new Date(NaN)), null);
		});
		it('correct formatting with timezone changes', function() {
			const date = newValidDate(2014, Month.Oct, 26, 1, 21, 10, 107);
			assert.equal(formatDateIso(date), '2014-10-26');
		});
	});
});
