const tsDatePrevPkg = require('ts-date/package.json');

const names = {
	moment: 'moment',
	momentCached: 'moment cached',
	dateFns: 'date-fns',
	tsDatePrev: 'ts-date@' + tsDatePrevPkg.version,
	tsDate: 'ts-date',
	dayjs: 'dayjs',
};

module.exports = names;
