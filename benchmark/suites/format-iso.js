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


const suite = new Benchmark.Suite(`Format as ISO 8601 string`);
suite
	.add('moment', function() {
		return moment(date).format();
	}, {onCycle})
	.add('moment cached', function() {
		return dateMoment.format();
	}, {onCycle})
	.add('date-fns', function() {
		return dateFns.format(date);
	}, {onCycle})
	.add('ts-date', function() {
		return tsDate.formatLocalIso(date);
	}, {onCycle})
;

require('../runners').runSuite(suite);

