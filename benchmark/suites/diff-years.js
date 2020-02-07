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

const suite = new Benchmark.Suite('Difference in years between two dates');
suite
	.add('moment', function() {
		return moment(d1).diff(d2, 'years')
	}, {onCycle})
	.add('moment cached', function() {
		return d1Moment.diff(d2, 'years')
	}, {onCycle})
	.add('date-fns', function() {
		return dateFns.differenceInYears(d1, d2)
	}, {onCycle})
	.add('ts-date', function() {
		return tsDate.diffYear(d1, d2)
	}, {onCycle})
;

require('../runners').runSuite(suite);

