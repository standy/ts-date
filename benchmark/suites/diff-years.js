const Benchmark = require('benchmark');

const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');


const d1 = new Date(2017, 2, 26);
const d2 = new Date(2000, 2, 27);
const d1Moment = moment(d1);
const d2Moment = moment(d2);

const suite = new Benchmark.Suite('Difference in years between two dates');
suite
	.add('moment', function() {
		return moment(d1).diff(d2, 'years')
	})
	.add('moment cached', function() {
		return d1Moment.diff(d2, 'years')
	})
	.add('date-fns', function() {
		return dateFns.differenceInYears(d1, d2)
	})
	.add('ts-date', function() {
		return tsDate.diffYear(d1, d2)
	})
;

require('../runners').runSuite(suite);

