import {Month, ValidDate} from '../utils/basic-types';
import * as assert from 'power-assert';
import {newTsDate} from '../create/create-ts-date';
import {
	format,
} from './format'


describe('format', function () {
	it('correct formatting', function () {
		const date = newTsDate(2017, Month.Jun, 1, 12, 34, 56, 789);
		if (!date) throw new Error('Expected to be date');
		const FORMATS = [
			[
				'YYYY-MM-DD HH:mm:ss.SSS',
				'2017-06-01 12:34:56.789',
			],
			[
				'YYYY-MM-DD HH:mm:ss.SS',
				'2017-06-01 12:34:56.78',
			],
			[
				'YYYY-MM-DD HH:mm:ss',
				'2017-06-01 12:34:56',
			],
			[
				'YYYY-MM-DD HH:mm',
				'2017-06-01 12:34',
			],
			[
				'YYYY-MM-DD HH',
				'2017-06-01 12',
			],
			[
				'YYYY-MM-DD',
				'2017-06-01',
			],
			[
				'YYYY-MM',
				'2017-06',
			],
			[
				'D.M.YY H:m:s.S',
				'1.6.17 12:34:56.7',
			],
			[
				'MM YYYY [MM YY]',
				'06 2017 MM YY',
			],
			[
				'x',
				date.valueOf().toString(),
			],
			[
				'X',
				Math.floor(date.valueOf() / 1000).toString(),
			],
			[
				'E',
				'4'
			],
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const [template, correctResult] = FORMATS[i];
			const result = format(date, template);
			assert.equal(result, correctResult, `format "${template}"`);
		}
	});

	it('null handling', function () {
		assert.equal(format(null, '[test]'), null);
	});

	it('7-th day of week', function () {
		const date = newTsDate(2017, Month.Jun, 4);
		assert.equal(format(date, 'E'), '7');
	});

	it('correct format timezone', function () {
		const dateTimezoneMock = (offset: number) => ({
			getTimezoneOffset() {
				return offset;
			}
		} as ValidDate);

		assert.equal(format(dateTimezoneMock(180), 'Z'), '-03:00');
		assert.equal(format(dateTimezoneMock(180), 'ZZ'), '-0300');
		assert.equal(format(dateTimezoneMock(-600), 'Z'), '+10:00');
		assert.equal(format(dateTimezoneMock(-180), 'ZZ'), '+0300');
		assert.equal(format(dateTimezoneMock(0), 'Z'), '+00:00');
		assert.equal(format(dateTimezoneMock(0), 'ZZ'), '+0000');
	});
});
