const Benchmark = require('benchmark');

const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');


const d1 = new Date();
const d2 = new Date(2017, 0, 1);
const d1Moment = moment(d1);
const d2Moment = moment(d2);

const suite = new Benchmark.Suite('Difference in days between two dates');
suite
	.add('moment', function() {
		return moment(d1).diff(d2, 'd')
	})
	.add('moment cached', function() {
		return d1Moment.diff(d2, 'd')
	})
	.add('date-fns', function() {
		return dateFns.differenceInDays(d1, d2)
	})
	.add('ts-date', function() {
		return tsDate.diffDate(d1, d2)
	})
;

require('../runners').runSuite(suite);

