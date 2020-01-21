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
const sl_launchers = {
	sl_chrome_latest_Windows10: {
		base: 'SauceLabs',
		browserName: 'chrome',
		version: 'latest',
		platform: 'Windows 10'
	},
	sl_chrome_old_Windows7: {
		base: 'SauceLabs',
		browserName: 'chrome',
		version: '38',
		platform: 'Windows 7'
	},
	sl_firefox_latest_Windows10: {
		base: 'SauceLabs',
		browserName: 'firefox',
		version: 'latest',
		platform: 'Windows 10'
	},
	sl_firefox_old_Windows7: {
		base: 'SauceLabs',
		browserName: 'firefox',
		version: '44',
		platform: 'Windows 7'
	},
	sl_edge_latest_Windows10: {
		base: 'SauceLabs',
		browserName: 'microsoftEdge',
		version: 'latest',
		platform: 'Windows 10'
	},
	sl_edge_13_Windows10: {
		base: 'SauceLabs',
		browserName: 'microsoftEdge',
		version: '13',
		platform: 'Windows 10'
	},
	sl_ie_11_Windows8_1: {
		base: 'SauceLabs',
		browserName: 'internet explorer',
		version: '11',
		platform: 'Windows 8.1'
	},
	sl_ie_old_Windows7: {
		base: 'SauceLabs',
		browserName: 'internet explorer',
		version: '11',
		platform: 'Windows 7'
	},
	sl_android_5: {
		base: 'SauceLabs',
		browserName: 'android',
		version: '5.1'
	},
	sl_android_7: {
		base: 'SauceLabs',
		browserName: 'android',
		version: '6.0'
	},
	sl_safari_latest: {
		base: 'SauceLabs',
		browserName: 'safari',
		version: 'latest',
		platform: 'OS X 10.12'
	},
	sl_safari_8_Mac10_10: {
		base: 'SauceLabs',
		browserName: 'safari',
		version: '8.0',
		platform: 'OS X 10.10'
	},
	sl_iphone_11_2: {
		base: 'SauceLabs',
		browserName: 'iphone',
		version: '11.2',
	},
	sl_ipad_10_3: {
		base: 'SauceLabs',
		browserName: 'ipad',
		version: '10.3'
	},
	sl_ipad_11_2: {
		base: 'SauceLabs',
		browserName: 'ipad',
		version: '11.2'
	},
};


module.exports = function(config) {

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
	}));
};
