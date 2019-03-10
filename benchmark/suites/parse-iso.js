const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const tsDate = require('../../npm/locale/en/index');
const moment = require('moment');
const dateFns = require('date-fns');


let dateStr;

function onCycle() {
	dateStr = tsDate.format(nextRandomDate(), 'YYYY-MM-DD[T]HH:mm');
}
onCycle();

const suite = new Benchmark.Suite('Parse from ISO 8601 string');
suite
	.add('moment', function() {
		return moment(dateStr);
	}, {onCycle})
	.add('date-fns', function() {
		return dateFns.parse(dateStr);
	}, {onCycle})
	.add('ts-date', function() {
		return tsDate.parseIso(dateStr);
	}, {onCycle})
;

require('../runners').runSuite(suite);

