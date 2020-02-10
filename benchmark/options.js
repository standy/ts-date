const options = {
	compareWithPrevious: process.argv.includes('--compare-with-previous'),
	isDebug: process.argv.includes('--debug'),
};

module.exports = options;
