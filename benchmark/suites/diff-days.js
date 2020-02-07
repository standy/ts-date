const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const tsDate = require('../../dist/locale/en/index');
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

const suite = new Benchmark.Suite('Difference in days between two dates');
suite
	.add('moment', function() {
		return moment(d1).diff(d2, 'd')
	}, {onCycle})
	.add('moment cached', function() {
		return d1Moment.diff(d2, 'd')
	}, {onCycle})
	.add('date-fns', function() {
		return dateFns.differenceInDays(d1, d2)
	}, {onCycle})
	.add('ts-date', function() {
		return tsDate.diffDate(d1, d2)
	}, {onCycle})
;

require('../runners').runSuite(suite);

