const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const names = require('../names');
const tsDate = require('../../dist/locale/en/index');
const tsDatePrev = require('ts-date');
const moment = require('moment');
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

const suite = new Benchmark.Suite('Difference in years between two dates');
suite
	.add(names.moment, function() {
		return moment(d1).diff(d2, 'years')
	}, {onCycle})
	.add(names.momentCached, function() {
		return d1Moment.diff(d2, 'years')
	}, {onCycle})
	.add(names.dateFns, function() {
		return dateFns.differenceInYears(d1, d2)
	}, {onCycle})
	.add(names.tsDatePrev, function() {
		return tsDatePrev.diffYear(d1, d2)
	}, {onCycle})
	.add(names.tsDate, function() {
		return tsDate.diffYear(d1, d2)
	}, {onCycle})
;

require('../runners').runSuite(suite);

