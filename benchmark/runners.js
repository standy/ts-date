const options = require('./options');
const names = require('./names');

function runSuite(suiteOrig) {
	const suite = suiteOrig.filter(s => {
		if (options.compareWithPrevious) {
			return s.name === names.tsDatePrev || s.name === names.tsDate;
		} else {
			return s.name !== names.tsDatePrev;
		}
	});
	suite.name = suiteOrig.name;

	suite.on('start', logStart);
	if (options.isDebug) {
		suite.on('start', logMethodResults);
	}
	suite.on('cycle', logResults);
	suite.on('complete', logComplete);
	suite.run();
	return suite
}
let firstCycle = null;

function logResults(e) {
	const t = e.target;
	if (!firstCycle) firstCycle = t;

	if (t.failure) {
		console.error(padl(18, t.name) + 'FAILED: ' + e.target.failure);
	} else {
		const hz = t.hz;
		const stats = t.stats;
		const result = padl(15, t.name)
			+ padr(16, `${formatNumber(hz.toFixed(hz < 100 ? 2 : 0))} op/s`)
			+ padr(9, ` \xb1\ ${stats.rme.toFixed(2)}%`)
			+ padr(15, ` (${t.stats.sample.length} samples)`)
			+ padr(8, ' ' + (hz / firstCycle.hz).toFixed(2) + 'x');

		console.log(result);
	}
}

function logStart() {
	console.log(this.name);
	console.log('---------------------------------------------------------------');
	firstCycle = null;
}

function logMethodResults() {
	this.forEach(s => {
		console.log(padl(32, `result for "${s.name}" is:`), s.fn());
	});
}

function logComplete() {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
	console.log('---------------------------------------------------------------');
}


function padl(n, s) {
	while (s.length < n) {
		s += ' ';
	}
	return s;
}

function padr(n, s) {
	while (s.length < n) {
		s = ' ' + s;
	}
	return s;
}

function formatNumber(number) {
	number = String(number).split('.');
	return number[0].replace(/(?=(?:\d{3})+$)(?!\b)/g, ',') +
		(number[1] ? '.' + number[1] : '');
}


exports.runSuite = runSuite;
