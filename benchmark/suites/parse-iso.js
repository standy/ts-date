const Benchmark = require('benchmark');

const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');


const dateStr = '2017-02-23T23:12';

const suite = new Benchmark.Suite('Parse from ISO 8601 string');
suite
	.add('moment', function() {
		return moment(dateStr);
	})
	.add('date-fns', function() {
		return dateFns.parse(dateStr);
	})
	.add('ts-date', function() {
		return tsDate.parseIso(dateStr);
	})
;

require('../runners').runSuite(suite);

