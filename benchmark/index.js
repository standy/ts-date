console.log('Performance test compared to `momentjs` and `date-fns`');
console.log(' ');
console.log('```');

require('./log-versions');
require('./suites/add-days');
require('./suites/add-hours');
require('./suites/diff-days');
require('./suites/diff-hours');
require('./suites/diff-years');
require('./suites/format');
require('./suites/format-iso');
require('./suites/parse-iso');

console.log('```');
