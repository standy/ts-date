const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const names = require('../names');
const tsDate = require('../../dist/locale/en/index');
const tsDatePrev = require('ts-date');
const moment = require('moment');
const dayjs = require('dayjs');
const dateFns = require('date-fns');


let d1;
let d2;
let d1Moment;
let d2Moment;

function onCycle() {
	d1 = nextRandomDate();
	d2 = nextRandomDate();
	d1Moment = moment(d1);
	d2Moment = moment(d2);
}
onCycle();

const suite = new Benchmark.Suite('Difference in hours between two dates');
suite
	.add(names.moment, function() {
		return moment(d1).diff(d2, 'hours')
	}, {onCycle})
	.add(names.momentCached, function() {
		return d1Moment.diff(d2, 'hours')
	}, {onCycle})
	.add(names.dayjs, function() {
		return dayjs(d1).diff(d2, 'hours')
	}, {onCycle})
	.add(names.dateFns, function() {
		return dateFns.differenceInHours(d1, d2)
	}, {onCycle})
	.add(names.tsDatePrev, function() {
		return tsDatePrev.diffHours(d1, d2)
	}, {onCycle})
	.add(names.tsDate, function() {
		return tsDate.diffHours(d1, d2)
	}, {onCycle})
;

require('../runners').runSuite(suite);

