import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {ValidDate} from '../valid-date';
import {newValidDate, newValidDateOrThrow} from '../create/create-ts-date';
import {extendFormat, format} from './format';
import {defaultFormatters} from './default-formatters';

describe('format', function() {
	it('correct formatting', function() {
		const date = newValidDate(2017, Month.Jun, 1, 12, 34, 56, 789);
		if (!date) throw new Error('Expected to be date');
		const FORMATS = [
			['YYYY-MM-DD HH:mm:ss.SSS', '2017-06-01 12:34:56.789'],
			['YYYY-MM-DD HH:mm:ss.SS', '2017-06-01 12:34:56.78'],
			['YYYY-MM-DD HH:mm:ss', '2017-06-01 12:34:56'],
			['YYYY-MM-DD HH:mm', '2017-06-01 12:34'],
			['YYYY-MM-DD HH', '2017-06-01 12'],
			['YYYY-MM-DD', '2017-06-01'],
			['YYYY-MM', '2017-06'],
			['D.M.YY H:m:s.S', '1.6.17 12:34:56.7'],
			['MM YYYY [MM YY]', '06 2017 MM YY'],
			['x', date.valueOf().toString()],
			['X', Math.floor(date.valueOf() / 1000).toString()],
			['GGGG-[W]WW-E', '2017-W22-4'],
			['GG [GG]', '17 GG'],
			['DDD [DDD]', '152 DDD'],
			['DDDD [DDDD]', '152 DDDD'],
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const [template, correctResult] = FORMATS[i];
			const result = format(date, template);
			assert.equal(result, correctResult, `format "${template}"`);
		}
	});

	it('null handling', function() {
		assert.equal(format(null, '[test]'), null);
	});

	it('"Invalid Date" handling', function() {
		assert.equal(format(new Date(NaN), '[test]'), null);
	});

	it('7-th day of week', function() {
		const date = newValidDate(2017, Month.Jun, 4);
		assert.equal(format(date, 'E'), '7');
	});

	it('correct format timezone', function() {
		const dateTimezoneMock = (offset: number) =>
			({
				getTimezoneOffset() {
					return offset;
				},
				valueOf() {
					return 0;
				},
			} as ValidDate);

		assert.equal(defaultFormatters.Z(dateTimezoneMock(180)), '-03:00');
		assert.equal(defaultFormatters.ZZ(dateTimezoneMock(180)), '-0300');
		assert.equal(defaultFormatters.Z(dateTimezoneMock(-600)), '+10:00');
		assert.equal(defaultFormatters.ZZ(dateTimezoneMock(-180)), '+0300');
		assert.equal(defaultFormatters.Z(dateTimezoneMock(0)), '+00:00');
		assert.equal(defaultFormatters.ZZ(dateTimezoneMock(0)), '+0000');
	});

	it('correct format iso weeks', function() {
		const template = 'GGGG-[W]WW-E';
		const d1 = newValidDateOrThrow(2017, Month.Jan, 2); /* Monday */
		assert.equal(format(d1, template), '2017-W01-1');
		const d2 = newValidDateOrThrow(2017, Month.Jan, 1); /* Sunday */
		assert.equal(format(d2, template), '2016-W52-7');
		const d3 = newValidDateOrThrow(2012, Month.Dec, 31); /* Monday */
		assert.equal(format(d3, template), '2013-W01-1');
	});

	it('correct extending format', function() {
		extendFormat({
			season: date => {
				const index = Math.floor(((date.getMonth() + 1) % 12) / 3);
				return ['winter', 'spring', 'summer', 'autumn'][index];
			},
		});
		const template = '[season] season YY';
		const checks: [ValidDate | null, string][] = [
			[newValidDate(2017, Month.Jan, 1), 'season winter 17'],
			[newValidDate(2017, Month.Feb, 1), 'season winter 17'],
			[newValidDate(2017, Month.Mar, 1), 'season spring 17'],
			[newValidDate(2017, Month.Apr, 1), 'season spring 17'],
			[newValidDate(2017, Month.May, 1), 'season spring 17'],
			[newValidDate(2017, Month.Jun, 1), 'season summer 17'],
			[newValidDate(2017, Month.Jul, 1), 'season summer 17'],
			[newValidDate(2017, Month.Aug, 1), 'season summer 17'],
			[newValidDate(2017, Month.Sep, 1), 'season autumn 17'],
			[newValidDate(2017, Month.Oct, 1), 'season autumn 17'],
			[newValidDate(2017, Month.Nov, 1), 'season autumn 17'],
			[newValidDate(2017, Month.Dec, 1), 'season winter 17'],
		];
		for (let i = 0; i < checks.length; i++) {
			const [date, correctResult] = checks[i];
			assert.equal(format(date, template), correctResult);
		}
	});
});
