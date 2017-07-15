const Benchmark = require('benchmark');

const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');

const date = new Date();
const dateMoment = moment(date);

const suite = new Benchmark.Suite(`Format as ISO 8601 string`);
suite
	.add('moment', function() {
		return moment(date).format();
	})
	.add('moment cached', function() {
		return dateMoment.format();
	})
	.add('date-fns', function() {
		return dateFns.format(date);
	})
	.add('ts-date', function() {
		return tsDate.formatLocalIso(date);
	})
;

require('../runners').runSuite(suite);

