const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const names = require('../names');
const tsDate = require('../../dist/locale/en/index');
const tsDatePrev = require('ts-date');
const moment = require('moment');
const dateFns = require('date-fns');


let dateStr;

function onCycle() {
	dateStr = tsDate.format(nextRandomDate(), 'YYYY-MM-DD[T]HH:mm');
}
onCycle();

const suite = new Benchmark.Suite('Parse from ISO 8601 string');
suite
	.add(names.moment, function() {
		return moment(dateStr);
	}, {onCycle})
	.add(names.dateFns, function() {
		return dateFns.parseISO(dateStr);
	}, {onCycle})
	.add(names.tsDatePrev, function() {
		return tsDatePrev.parseIso(dateStr);
	}, {onCycle})
	.add(names.tsDate, function() {
		return tsDate.parseIso(dateStr);
	}, {onCycle})
;

require('../runners').runSuite(suite);

