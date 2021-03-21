const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const names = require('../names');
const tsDate = require('../../dist/locale/en/index');
const tsDatePrev = require('ts-date');
const moment = require('moment');
const dayjs = require('dayjs');
const dayjsAdvancedFormat = require('dayjs/plugin/advancedFormat')
const dateFns = require('date-fns');

dayjs.extend(dayjsAdvancedFormat);
const pattern = 'dddd, MMMM Do YYYY, [escaped], h:mm:ss a';
const patternUTS = `EEEE, MMMM do yyyy, 'escaped', h:mm:ss a`;
let date;
let dateMoment;

function onCycle() {
	date = nextRandomDate();
	dateMoment = moment(date)
}
onCycle();


const suite = new Benchmark.Suite(`Format by pattern "${pattern}"`);
suite
	.add(names.moment, function() {
		return moment(date).format(pattern);
	}, {onCycle})
	.add(names.momentCached, function() {
		return dateMoment.format(pattern);
	}, {onCycle})
	.add(names.dayjs, function() {
		return dayjs(date).format('dddd, MMMM Do YYYY, [escaped], h:mm:ss a');
	}, {onCycle})
	.add(names.dateFns, function() {
		return dateFns.format(date, patternUTS);
	}, {onCycle})
	.add(names.tsDatePrev, function() {
		return tsDatePrev.format(date, pattern);
	}, {onCycle})
	.add(names.tsDate, function() {
		return tsDate.format(date, pattern);
	}, {onCycle})
;

require('../runners').runSuite(suite);

