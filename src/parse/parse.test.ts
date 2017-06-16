import {Month} from '../utils/basic-types';
import * as assert from 'power-assert';
import {createTsDate} from '../create/create-ts-date';
import {
	parse
} from './parse'

const MAX_DATE = 8640000000000000;

describe('parse', function () {
	it('correct parsing', function () {
		const FORMATS = [
			{
				template: 'YYYY-MM-DD HH:mm:ss.SSS',
				dateStr: '2017-06-01 12:34:56.789',
				correctResult: new Date(2017, Month.Jun, 1, 12, 34, 56, 789),
			},
			{
				template: 'YYYY-MM-DD HH:mm:ss.SS',
				dateStr: '2017-06-01 12:34:56.78',
				correctResult: new Date(2017, Month.Jun, 1, 12, 34, 56, 780),
			},
			{
				template: 'YYYY-MM-DD HH:mm:ss',
				dateStr: '2017-06-01 12:34:56',
				correctResult: new Date(2017, Month.Jun, 1, 12, 34, 56),
			},
			{
				template: 'YYYY-MM-DD HH:mm',
				dateStr: '2017-06-01 12:34',
				correctResult: new Date(2017, Month.Jun, 1, 12, 34),
			},
			{
				template: 'YYYY-MM-DD HH',
				dateStr: '2017-06-01 12',
				correctResult: new Date(2017, Month.Jun, 1, 12),
			},
			{
				template: 'YYYY-MM-DD',
				dateStr: '2017-06-07',
				correctResult: new Date(2017, Month.Jun, 7),
			},
			{
				template: 'YYYY-MM',
				dateStr: '2017-06',
				correctResult: new Date(2017, Month.Jun),
			},
			{
				template: 'X',
				dateStr: '1483142400',
				correctResult: new Date(1483142400000),
			},
			{
				template: 'x',
				dateStr: '1483142400000',
				correctResult: new Date(1483142400000),
			},
			{
				template: 'x',
				dateStr: (MAX_DATE + 1).toString(),
				correctResult: null,
			},
			{
				template: 'D.M.YY H:m:s.S',
				dateStr: '1.6.17 2:3:4.5',
				correctResult: new Date(2017, Month.Jun, 1, 2, 3, 4, 500),
			},
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const {template, dateStr, correctResult} = FORMATS[i];
			const result = parse(dateStr, template);
			assert.deepEqual(result, createTsDate(correctResult), `parse "${dateStr}" for "${template}"`);
		}
	});
});
