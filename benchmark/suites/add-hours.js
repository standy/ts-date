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


const suite = new Benchmark.Suite('Adding fixed amount of hours');
suite
	.add(names.moment, function() {
		return moment(date).add(2, 'hours')
	}, {onCycle})
	.add(names.momentCached, function() {
		return dateMoment.add(2, 'hours')
	}, {onCycle})
	.add(names.dayjs, function() {
		return dayjs(date).add(2, 'hours')
	}, {onCycle})
	.add(names.dateFns, function() {
		return dateFns.addHours(date, 2)
	}, {onCycle})
	.add(names.tsDatePrev, function() {
		return tsDatePrev.addHours(date, 2)
	}, {onCycle})
	.add(names.tsDate, function() {
		return tsDate.addHours(date, 2)
	}, {onCycle})
;


require('../runners').runSuite(suite);
