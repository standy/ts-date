import {Month} from '../../src/utils/basic-types';
import * as assert from 'power-assert';
import {newValidDate, newValidDateOrThrow} from '../../src/create/create-ts-date';
import {format, parse, createCustomFormat, formatters, ValidDate} from './index';

describe('ru locale', function() {
	it('correct formatting', function() {
		const date = newValidDate(2017, Month.Aug, 1, 12, 34, 56, 789);
		const FORMATS = [
			['MMMM MMM dd ddd dddd A Do Wo Mo DDDo do Qo', 'август авг. вт втр вторник дня 1-е 31-й 8-й 213-й 2-й 3-й'],
			['D MMMM hh A', '1 августа 12 дня'],
			['D[&nbsp;]MMMM', '1&nbsp;августа'],
			['YYYY MMMM', '2017 август'],
			['Do MMMM, dddd', '1-е августа, вторник'],
			['D MMM, dd', '1 авг., вт'],
			['D MMMM, hh A, ddd', '1 августа, 12 дня, втр'],
			['Qo [квартал], Mo [месяц]', '3-й квартал, 8-й месяц'],
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const [template, correctResult] = FORMATS[i];
			const result = format(date, template);
			assert.equal(result, correctResult, `format "${template}"`);
		}
	});
	it('correct createCustomFormat', function() {
		const customFormat = createCustomFormat({
			MMM: (d, index, tokens) => {
				const m: string = formatters['MMMM'](d, index, tokens) + '';
				if (m.length <= 4) return m;
				return m.substring(0, 3);
			},
		});
		const FORMAT_BY_DATE: Array<[ValidDate, string, string]> = [
			[newValidDateOrThrow(2019, Month.Jan, 4), 'D MMM YYYY', '4 янв 2019'],
			[newValidDateOrThrow(2019, Month.Feb, 4), 'D MMM YYYY', '4 фев 2019'],
			[newValidDateOrThrow(2019, Month.Mar, 4), 'D MMM YYYY', '4 мар 2019'],
			[newValidDateOrThrow(2019, Month.Apr, 4), 'D MMM YYYY', '4 апр 2019'],
			[newValidDateOrThrow(2019, Month.May, 4), 'D MMM YYYY', '4 мая 2019'],
			[newValidDateOrThrow(2019, Month.Jun, 4), 'D MMM YYYY', '4 июня 2019'],
			[newValidDateOrThrow(2019, Month.Jul, 4), 'D MMM YYYY', '4 июля 2019'],
			[newValidDateOrThrow(2019, Month.Aug, 4), 'D MMM YYYY', '4 авг 2019'],
			[newValidDateOrThrow(2019, Month.Sep, 4), 'D MMM YYYY', '4 сен 2019'],
			[newValidDateOrThrow(2019, Month.Oct, 4), 'D MMM YYYY', '4 окт 2019'],
			[newValidDateOrThrow(2019, Month.Nov, 4), 'D MMM YYYY', '4 ноя 2019'],
			[newValidDateOrThrow(2019, Month.Dec, 4), 'D MMM YYYY', '4 дек 2019'],

			[newValidDateOrThrow(2019, Month.Jan, 4), 'MMM YYYY', 'янв 2019'],
			[newValidDateOrThrow(2019, Month.Feb, 4), 'MMM YYYY', 'фев 2019'],
			[newValidDateOrThrow(2019, Month.Mar, 4), 'MMM YYYY', 'март 2019'],
			[newValidDateOrThrow(2019, Month.Apr, 4), 'MMM YYYY', 'апр 2019'],
			[newValidDateOrThrow(2019, Month.May, 4), 'MMM YYYY', 'май 2019'],
			[newValidDateOrThrow(2019, Month.Jun, 4), 'MMM YYYY', 'июнь 2019'],
			[newValidDateOrThrow(2019, Month.Jul, 4), 'MMM YYYY', 'июль 2019'],
			[newValidDateOrThrow(2019, Month.Aug, 4), 'MMM YYYY', 'авг 2019'],
			[newValidDateOrThrow(2019, Month.Sep, 4), 'MMM YYYY', 'сен 2019'],
			[newValidDateOrThrow(2019, Month.Oct, 4), 'MMM YYYY', 'окт 2019'],
			[newValidDateOrThrow(2019, Month.Nov, 4), 'MMM YYYY', 'ноя 2019'],
			[newValidDateOrThrow(2019, Month.Dec, 4), 'MMM YYYY', 'дек 2019'],

			[newValidDateOrThrow(2019, Month.Jan, 1), 'MMM, D MMM, MMMM, D MMMM', 'янв, 1 янв, январь, 1 января'],
			[newValidDateOrThrow(2019, Month.Jul, 1), 'MMM, D MMM, MMMM, D MMMM', 'июль, 1 июля, июль, 1 июля'],
		];
		for (let i = 0; i < FORMAT_BY_DATE.length; i++) {
			const [date, format, correctResult] = FORMAT_BY_DATE[i];
			const result = customFormat(date, format);
			assert.equal(result, correctResult, `customFormat "${format}" "${date}"`);
		}
	});
	it('correct day part format', function() {
		const d1 = newValidDate(2017, Month.Aug, 1, 0);
		const d2 = newValidDate(2017, Month.Aug, 1, 6);
		const d3 = newValidDate(2017, Month.Aug, 1, 12);
		const d4 = newValidDate(2017, Month.Aug, 1, 18);
		const template = 'h A';
		assert.equal(format(d1, template), '12 ночи');
		assert.equal(format(d2, template), '6 утра');
		assert.equal(format(d3, template), '12 дня');
		assert.equal(format(d4, template), '6 вечера');
	});
	it('correct parsing', function() {
		const FORMATS = [
			{
				template: 'Do MMMM YY [года]',
				dateStr: '1-е августа 17 года',
				correctResult: newValidDate(2017, Month.Aug, 1),
			},
			{
				template: 'D MMM YY [года]',
				dateStr: '1 авг. 17 года',
				correctResult: newValidDate(2017, Month.Aug, 1),
			},
			{
				template: 'MMMM YYYY',
				dateStr: 'август 2017',
				correctResult: newValidDate(2017, Month.Aug, 1),
			},
			{
				/* NOTE Incomplete date */
				template: 'D MMMM YYYY',
				dateStr: '1 августа 17',
				correctResult: null,
			},
			{
				/* NOTE 2 digits date required by template */
				template: 'DD MMMM YY',
				dateStr: '1 августа 17',
				correctResult: null,
			},
		];

		for (let i = 0; i < FORMATS.length; i++) {
			const {template, dateStr, correctResult} = FORMATS[i];
			const result = parse(dateStr, template);
			assert.deepEqual(result, correctResult, `parse "${dateStr}" with "${template}"`);
		}
	});
});
