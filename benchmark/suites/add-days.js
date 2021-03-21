const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const names = require('../names');
const tsDate = require('../../dist/locale/en/index');
const tsDatePrev = require('ts-date');
const moment = require('moment');
const dayjs = require('dayjs');
const dateFns = require('date-fns');

let date;
let dateMoment;
function onCycle() {
	date = nextRandomDate();
	dateMoment = moment(date)
}
onCycle();


const suite = new Benchmark.Suite('Adding fixed amount of days');
suite
	.add(names.moment, function() {
		return moment(date).add(2, 'd')
	}, {onCycle})
	.add(names.momentCached, function() {
		return dateMoment.add(2, 'd')
	}, {onCycle})
	.add(names.dayjs, function() {
		return dayjs(date).add(2, 'd')
	}, {onCycle})
	.add(names.dateFns, function() {
		return dateFns.addDays(date, 2)
	}, {onCycle})
	.add(names.tsDatePrev, function() {
		return tsDatePrev.addDate(date, 2)
	}, {onCycle})
	.add(names.tsDate, function() {
		return tsDate.addDate(date, 2)
	}, {onCycle})
;


require('../runners').runSuite(suite);
