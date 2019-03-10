const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');

const pattern = 'dddd, MMMM Do YYYY, [escaped], h:mm:ss a';
let date;
let dateMoment;

function onCycle() {
	date = nextRandomDate();
	dateMoment = moment(date)
}
onCycle();


const suite = new Benchmark.Suite(`Format by pattern "${pattern}"`);
suite
	.add('moment', function() {
		return moment(date).format(pattern);
	}, {onCycle})
	.add('moment cached', function() {
		return dateMoment.format(pattern);
	}, {onCycle})
	.add('date-fns', function() {
		return dateFns.format(date, pattern);
	}, {onCycle})
	.add('ts-date', function() {
		return tsDate.format(date, pattern);
	}, {onCycle})
;

require('../runners').runSuite(suite);

