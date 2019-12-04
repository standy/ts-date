import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate} from '../create/create-ts-date';
import {parseIso, parseIsoOrThrow} from './parse-iso';

describe('parseIso', function() {
	it('correct parsing', function() {
		const FORMATS = [
			{
				dateStr: '2017-06-01T12:34:56.789',
				correctResult: newValidDate(2017, Month.Jun, 1, 12, 34, 56, 789),
			},
			{
				dateStr: '2017-06-01T12:34:56.7',
				correctResult: newValidDate(2017, Month.Jun, 1, 12, 34, 56, 700),
			},
			{
				dateStr: '2017-06-01T12:34:56',
				correctResult: newValidDate(2017, Month.Jun, 1, 12, 34, 56),
			},
			{
				dateStr: '2017-06-01T12:34',
				correctResult: newValidDate(2017, Month.Jun, 1, 12, 34),
			},
			{
				dateStr: '2017-06-07',
				correctResult: newValidDate(2017, Month.Jun, 7),
			},
			{
				/* NOTE Should trim whitespaces */
				dateStr: ' 2017-06-07 \t\n',
				correctResult: newValidDate(2017, Month.Jun, 7),
			},
			{
				dateStr: '2017-06',
				correctResult: newValidDate(2017, Month.Jun),
			},
			{
				dateStr: '2017-06-01T12:34:5',
				correctResult: null,
			},
			{
				dateStr: '20170601T123456.789',
				correctResult: newValidDate(2017, Month.Jun, 1, 12, 34, 56, 789),
			},
			{
				dateStr: '2017-06-01T12:3',
				correctResult: null,
			},
			{
				dateStr: '2017-06-1',
				correctResult: null,
			},
			{
				dateStr: '2017-06-01T12:34:5',
				correctResult: null,
			},
			{
				dateStr: '',
				correctResult: null,
			},
			{
				/* NOTE Cant omit minutes */
				dateStr: '2017-06-01T12',
				correctResult: null,
			},
			{
				/* NOTE Invalid minutes */
				dateStr: '2017-06-01T12:60',
				correctResult: null,
			},
			{
				/* NOTE Zero days */
				dateStr: '2017-06-00',
				correctResult: null,
			},
			{
				/* NOTE Invalid TZ */
				dateStr: '2017-06-01T09:00+13:00',
				correctResult: null,
			},
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const {dateStr, correctResult} = FORMATS[i];
			const result = parseIso(dateStr);
			assert.deepEqual(result, correctResult, `parse "${dateStr}"`);
		}
	});

	it('correct parse timezones', function() {
		const d = parseIso('2017-06-01T12:34:56.789+03:00');
		assert.equal(d && d.toISOString(), '2017-06-01T09:34:56.789Z');
	});

	it('correct parse Zulu timezone', function() {
		['2017-06-01T12:34:56.789Z', '2038-10-31T12:10:20.672Z'].forEach(date => {
			const d = parseIso(date);
			assert.equal(d && d.toISOString(), date);
		});
	});

	it('correct throw if not parsed', function() {
		assert.throws(() => parseIsoOrThrow('2017-02-30'));
		assert.deepEqual(parseIsoOrThrow('2017-12-21'), new Date(2017, Month.Dec, 21));
	});
});
