const momentPkg = require('moment/package.json');
const dateFnsPkg = require('date-fns/package.json');
const tsDatePrevPkg = require('ts-date/package.json');
const cpus = require('os').cpus();
const options = require('./options');

console.log('%s x%s', cpus[0].model, cpus.length);
console.log('>node -v\n' + process.version);
console.log();
if (options.compareWithPrevious) {
	console.log('ts-date@%s', tsDatePrevPkg.version);
	console.log('ts-date@next');
} else {
	console.log('moment.js@%s', momentPkg.version);
	console.log('date-fns@%s', dateFnsPkg.version);
}
console.log('');
