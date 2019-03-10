const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');


let date;
let dateMoment;
function onCycle() {
	date = nextRandomDate();
	dateMoment = moment(date)
}
onCycle();


const suite = new Benchmark.Suite('Adding fixed amount of hours');
suite
	.add('moment', function() {
		return moment(date).add(2, 'hours')
	}, {onCycle})
	.add('moment cached', function() {
		return dateMoment.add(2, 'hours')
	}, {onCycle})
	.add('date-fns', function() {
		return dateFns.addHours(date, 2)
	}, {onCycle})
	.add('ts-date', function() {
		return tsDate.addHours(date, 2)
	}, {onCycle})
;


require('../runners').runSuite(suite);
