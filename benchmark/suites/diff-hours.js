const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const tsDate = require('../../npm/locale/en/index');
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

const suite = new Benchmark.Suite('Difference in hours between two dates');
suite
	.add('moment', function() {
		return moment(d1).diff(d2, 'hours')
	}, {onCycle})
	.add('moment cached', function() {
		return d1Moment.diff(d2, 'hours')
	}, {onCycle})
	.add('date-fns', function() {
		return dateFns.differenceInHours(d1, d2)
	}, {onCycle})
	.add('ts-date', function() {
		return tsDate.diffHours(d1, d2)
	}, {onCycle})
;

require('../runners').runSuite(suite);

