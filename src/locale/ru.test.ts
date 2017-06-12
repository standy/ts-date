import * as assert from 'power-assert';
import {createTsDate} from '../create/create-ts-date';
import {
	format,
} from '../format/format';
import {
	parse,
} from '../parse/parse';


describe('ru format', function () {
	it('correct formatting', function () {
		const date = createTsDate(new Date(2017, Month.Aug, 1, 12, 34, 56, 789));
		const FORMATS = [
			[
				'MMMM MMM dd ddd dddd A Do Wo Mo DDDo do Qo',
				'август авг. вт втр вторник дня 1-е Wo 8-й 011-е 2-й 3-й',
			],
			[
				'D MMMM hh A',
				'1 августа 12 дня',
			],
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const [template, correctResult] = FORMATS[i];
			const result = format(date, template);
			assert.equal(result, correctResult, `format "${template}"`);
		}
	});
	it('correct parsing', function () {
		const FORMATS = [
			{
				template: 'D MMMM YY [года]',
				dateStr: '1 августа 17 года',
				correctResult: new Date(2017, Month.Aug, 1),
			},
			{
				template: 'D MMMM YY YYYY',
				dateStr: '1 августа 17',
				correctResult: null,
			},
			{
				template: 'DD MMMM YY',
				dateStr: '1 августа 17',
				correctResult: null,
			},
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const {template, dateStr, correctResult} = FORMATS[i];
			const result = parse(dateStr, template);
			assert.deepEqual(result, createTsDate(correctResult), `format "${template}"`);
		}
	});
});
