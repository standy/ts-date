function runSuite(suite, isDebug) {
	return suite
		.on('start', logStart)
		.on('start', logMethodResults(isDebug))
		.on('cycle', logResults)
		.on('complete', logComplete)
		.run();
}

function logResults(e) {
	const t = e.target;

	if (t.failure) {
		console.error(padl(18, t.name) + 'FAILED: ' + e.target.failure);
	} else {
		const hz = t.hz;
		const stats = t.stats;
		const result = padl(15, t.name)
			+ padr(16, `${formatNumber(hz.toFixed(hz < 100 ? 2 : 0))} op/s`)
			+ padr(9, ` \xb1\ ${stats.rme.toFixed(2)}%`)
			+ padr(15, ` (${t.stats.sample.length} samples)`);

		console.log(result);
	}
}

function logStart() {
	console.log(this.name);
	console.log('-------------------------------------------------------');
}

function logMethodResults(isDebug) {
	return function() {
		if (!isDebug) return;
		this.forEach(s => {
			console.log(padl(32, `result for "${s.name}" is:`), s.fn());
		});
	};
}

function logComplete() {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
	console.log('-------------------------------------------------------');
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
