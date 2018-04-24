const base = require('./karma.base.conf.js');

if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
	console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
	process.exit(1);
}

const {
	TRAVIS_BRANCH,
	TRAVIS_BUILD_NUMBER,
	TRAVIS_JOB_NUMBER,
} = process.env;

// Available browsers and platforms: https://saucelabs.com/rest/v1/info/platforms/webdriver
const platforms = {
	'Windows 10': {
		'chrome': ['latest'],
		'firefox': ['latest'],
		'microsoftEdge': ['latest', '13'],
	},
	'Windows 8.1': {
		'internet explorer': ['11'],
	},
	'Windows 7': {
		'internet explorer': ['9'],
		'chrome': ['26'],
		'firefox': ['16'],
	},
	'Android 6': {
		'android': ['latest'],
	},
	'Android 4': {
		'android': ['4.4'],
	},
	'Mac 10.10': {
		'iphone': ['10.0'],
		'safari': ['8'],
	},
	'Mac 10.13': {
		'iphone': ['latest'],
		'safari': ['latest'],
	},
};

const sl_launchers = {};
for (const platform in platforms) {
	for (const browserName in platforms[platform]) if (platforms[platform].hasOwnProperty(browserName)) {
		const versions = platforms[platform][browserName];
		versions.forEach(version => {
			const key = ['sl', browserName, version, platform.replace(/\s+/g, '')].join('_');
			sl_launchers[key] = {
				base: 'SauceLabs',
				browserName,
				version,
				platform,
			};
		})
	}
}

module.exports = function (config) {

	// turn off coverage for sauce
	base.karmaTypescriptConfig.coverageOptions.instrumentation = false;

	config.set(Object.assign(base, {
		sauceLabs: {
			testName: 'TsDate tests for Sauce Labs',
			build: TRAVIS_JOB_NUMBER || `test-${new Date().toISOString()}`,
			tags: [TRAVIS_BRANCH || 'local'],
			public: 'public',
		},

		// hostname: '127.0.0.1',

		captureTimeout: 5 * 60000,
		browserNoActivityTimeout: 5 * 60000,

		customLaunchers: sl_launchers,
		browsers: Object.keys(sl_launchers),

		reporters: base.reporters.concat([
			'dots',
			'saucelabs',
		]),

		concurrency: 3,
	}));
};
