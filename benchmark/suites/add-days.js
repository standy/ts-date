const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const tsDate = require('../../dist/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');


let date;
let dateMoment;
function onCycle() {
	date = nextRandomDate();
	dateMoment = moment(date)
}
onCycle();


const suite = new Benchmark.Suite('Adding fixed amount of days');
suite
	.add('moment', function() {
		return moment(date).add(2, 'd')
	}, {onCycle})
	.add('moment cached', function() {
		return dateMoment.add(2, 'd')
	}, {onCycle})
	.add('date-fns', function() {
		return dateFns.addDays(date, 2)
	}, {onCycle})
	.add('ts-date', function() {
		return tsDate.addDate(date, 2)
	}, {onCycle})
;


require('../runners').runSuite(suite);
