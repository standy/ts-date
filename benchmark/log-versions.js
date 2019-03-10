const momentPkg = require('moment/package.json');
const dateFnsPkg = require('date-fns/package.json');
const cpus = require('os').cpus();

console.log('%s x%s', cpus[0].model, cpus.length);
console.log('>node -v\n' +  process.version);
console.log();
console.log('moment.js %s', momentPkg.version);
console.log('date-fns %s', dateFnsPkg.version);
console.log('');
