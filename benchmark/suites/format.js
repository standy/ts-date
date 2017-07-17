const Benchmark = require('benchmark');

const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');

const pattern = 'dddd, MMMM Do YYYY, [escaped], h:mm:ss a';
const date = new Date();
const dateMoment = moment(date);

const suite = new Benchmark.Suite(`Format by custom pattern "${pattern}"`);
suite
	.add('moment', function() {
		return moment(date).format(pattern);
	})
	.add('moment cached', function() {
		return dateMoment.format(pattern);
	})
	.add('date-fns', function() {
		return dateFns.format(date, pattern);
	})
	.add('ts-date', function() {
		return tsDate.format(date, pattern);
	})
;

require('../runners').runSuite(suite);

