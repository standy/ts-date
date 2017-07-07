# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/standy/ts-date/compare/v2.0.0-alpha.2...v2.0.0) (2017-07-07)


### Bug Fixes

* diff method should return null if one of arguments is Invalid Date ([2b63fe6](https://github.com/standy/ts-date/commit/2b63fe6))


### Features

* new method: isValidDate ([76cb5b2](https://github.com/standy/ts-date/commit/76cb5b2))



<a name="2.0.0-alpha.2"></a>
# [2.0.0-alpha.2](https://github.com/standy/ts-date/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2017-07-05)



<a name="2.0.0-alpha.1"></a>
# [2.0.0-alpha.1](https://github.com/standy/ts-date/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2017-07-05)


### Bug Fixes

* format methods should return null instead of magic strings ([e639ad9](https://github.com/standy/ts-date/commit/e639ad9))
* rename newTsDate creation methods to newValidDate ([3837b76](https://github.com/standy/ts-date/commit/3837b76))
* resetUnit should return type Date for Date ([4ed3e6e](https://github.com/standy/ts-date/commit/4ed3e6e)), closes [#2](https://github.com/standy/ts-date/issues/2)


### BREAKING CHANGES

* this methods available only with new names: newValidDate, newValidDateOrThrow



<a name="2.0.0-alpha.0"></a>
# [2.0.0-alpha.0](https://github.com/standy/ts-date/compare/v1.5.0...v2.0.0-alpha.0) (2017-07-04)


### Bug Fixes

* provide CommonJS version as default ([da1e3e7](https://github.com/standy/ts-date/commit/da1e3e7)), closes [#1](https://github.com/standy/ts-date/issues/1)


### Features

* make ValidDate compatible with Date ([76c1f48](https://github.com/standy/ts-date/commit/76c1f48)), closes [#2](https://github.com/standy/ts-date/issues/2)
* new methods "diffPrecise[Unit]" ([15f1eca](https://github.com/standy/ts-date/commit/15f1eca))


### BREAKING CHANGES

* changed import paths to locales for cjs and es6 modules



<a name="1.5.0"></a>
# [1.5.0](https://github.com/standy/ts-date/compare/v1.4.3...v1.5.0) (2017-07-01)


### Bug Fixes

* rename createTsDate to fromDate ([7a8c6a1](https://github.com/standy/ts-date/commit/7a8c6a1))


### Features

* new method "asDate" ([36279b5](https://github.com/standy/ts-date/commit/36279b5))
* new method "fromDateOrThrow" ([442808a](https://github.com/standy/ts-date/commit/442808a))



<a name="1.4.3"></a>
## [1.4.3](https://github.com/standy/ts-date/compare/v1.4.2...v1.4.3) (2017-06-30)


### Bug Fixes

* cleanup properly before package build ([2089477](https://github.com/standy/ts-date/commit/2089477))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/standy/ts-date/compare/v1.4.1...v1.4.2) (2017-06-29)


### Bug Fixes

* fixed warning about multiple exports for format/parse ([c56889c](https://github.com/standy/ts-date/commit/c56889c))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/standy/ts-date/compare/v1.4.0...v1.4.1) (2017-06-28)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/standy/ts-date/compare/v1.3.0...v1.4.0) (2017-06-27)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/standy/ts-date/compare/v1.2.0...v1.3.0) (2017-06-22)
