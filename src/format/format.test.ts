import * as assert from 'power-assert';
import {createTsDate} from '../create/create-ts-date';
import {
	format,
} from './format'


describe('format', function () {
	it('correct formatting', function () {
		const date = createTsDate(new Date(2017, Month.Jun, 1, 12, 34, 56, 789));
		const FORMATS = [
			[
				'YYYY-MM-DD HH:mm:ss.SSS',
				'2017-06-01 12:34:56.789',
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
				'D.M.YY H:mm',
				'1.6.17 12:34',
			],
			[
				'YYYY-MM-DD HH:mm Z',
				'2017-06-01 12:34 +03:00',
			],
			[
				'MM YYYY [MM YY]',
				'06 2017 MM YY',
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
});
