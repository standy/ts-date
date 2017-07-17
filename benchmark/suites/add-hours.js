const Benchmark = require('benchmark');

const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');


const date = new Date(2017, 2, 26);
let dateMoment;
function momentReCache() {
	dateMoment = moment(date)
}
momentReCache();

const suite = new Benchmark.Suite('Adding fixed amount of hours');
suite
	.add('moment', function() {
		return moment(date).add(2, 'hours')
	})
	.add('moment cached', function() {
		return dateMoment.add(2, 'hours')
	}, {onCycle: momentReCache})
	.add('date-fns', function() {
		return dateFns.addHours(date, 2)
	})
	.add('ts-date', function() {
		return tsDate.addHours(date, 2)
	})
;


require('../runners').runSuite(suite);
