const Benchmark = require('benchmark');
const nextRandomDate = require('../next-random-date');
const names = require('../names');
const tsDate = require('../../dist/locale/en/index');
const tsDatePrev = require('ts-date');
const moment = require('moment');
const dayjs = require('dayjs');
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
	.add(names.moment, function() {
		return moment(date).format();
	}, {onCycle})
	.add(names.momentCached, function() {
		return dateMoment.format();
	}, {onCycle})
	.add(names.dayjs, function() {
		return dayjs(date).toISOString();
	}, {onCycle})
	.add(names.dateFns, function() {
		return dateFns.formatISO(date);
	}, {onCycle})
	.add(names.tsDatePrev, function() {
		return tsDatePrev.formatLocalIso(date);
	}, {onCycle})
	.add(names.tsDate, function() {
		return tsDate.formatLocalIso(date);
	}, {onCycle})
;

require('../runners').runSuite(suite);

