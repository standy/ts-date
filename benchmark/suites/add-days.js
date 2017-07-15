const Benchmark = require('benchmark');

const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');


const date = new Date();
let dateMoment;
function momentReCache() {
	dateMoment = moment(date)
}
momentReCache();


const suite = new Benchmark.Suite('Adding fixed amount of days');
suite
	.add('moment', function() {
		return moment(date).add(2, 'd')
	})
	.add('moment cached', function() {
		return dateMoment.add(2, 'd')
	}, {onCycle: momentReCache})
	.add('date-fns', function() {
		return dateFns.addDays(date, 2)
	})
	.add('ts-date', function() {
		return tsDate.addDate(date, 2)
	})
;


require('../runners').runSuite(suite);
