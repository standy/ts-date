import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate} from '../create/create-ts-date';
import {parseIso, parseIsoOrThrow} from './parse-iso';
import {randomTimezone, rnd} from '../utils/test-utils';

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
				/* NOTE too much seconds */
				dateStr: '2017-06-01T12:34:567',
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
				dateStr: '2017-06-01T09:00+13:60',
				correctResult: null,
			},
			{
				/* NOTE there is no fractional milliseconds in Date object */
				dateStr: '2017-06-01T12:34:56.78999999999999999',
				correctResult: newValidDate(2017, Month.Jun, 1, 12, 34, 56, 789),
			},
			{
				/* NOTE there is no fractional milliseconds in Date object */
				dateStr: '2017-06-01T12:34:56.7890123456789-03:00',
				correctResult: newValidDate('2017-06-01T15:34:56.789Z'),
			},
			{
				/* NOTE 6-digit years */
				dateStr: '+202017-06-01T12:34:56.789',
				correctResult: newValidDate(202017, Month.Jun, 1, 12, 34, 56, 789),
			},
			{
				/* NOTE 6-digit years BC */
				dateStr: '-202017-06-01T12:34:56.789',
				correctResult: newValidDate(-202017, Month.Jun, 1, 12, 34, 56, 789),
			},
			{
				/* NOTE first century */
				dateStr: '0017-06-01T12:34:56.789Z',
				correctResult: newValidDate('0017-06-01T12:34:56.789Z'),
			},
			{
				/* NOTE 2-digit years */
				dateStr: '17-06-01T12:34:56.789Z',
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

	/**
	 * Test skipped because `new Date(iso8601)` fails on old browsers
	 * */
	it.skip('random test', function() {
		this.timeout(600000);
		const TEST_TIME = 1000;
		const TEST_START = Date.now();

		do {
			const ts = rnd(-8e15, 8e15);
			const dateIso = new Date(ts).toISOString().slice(0, -1) + randomTimezone();
			const native = new Date(dateIso);
			const parsed = parseIso(dateIso);
			assert.equal(parsed!.toISOString(), native.toISOString());
		} while (Date.now() - TEST_START < TEST_TIME);
	});
});
