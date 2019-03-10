# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.2.1"></a>
## [2.2.1](https://github.com/standy/ts-date/compare/v2.2.0...v2.2.1) (2019-03-10)


### Bug Fixes

* parser issue with leap year ([2baf168](https://github.com/standy/ts-date/commit/2baf168)), closes [#5](https://github.com/standy/ts-date/issues/5)



<a name="2.2.0"></a>
# [2.2.0](https://github.com/standy/ts-date/compare/v2.1.8...v2.2.0) (2019-02-04)


### Features

* new method - createCustomFormat ([2149307](https://github.com/standy/ts-date/commit/2149307))



<a name="2.1.8"></a>
## [2.1.8](https://github.com/standy/ts-date/compare/v2.1.7...v2.1.8) (2019-01-31)


### Bug Fixes

* updated packages, fixes security vulnerabilities in devDependencies ([dc86f09](https://github.com/standy/ts-date/commit/dc86f09))



<a name="2.1.7"></a>
## [2.1.7](https://github.com/standy/ts-date/compare/v2.1.6...v2.1.7) (2018-06-13)


### Bug Fixes

* correct formatDateIso on particular dates with timezone changes ([21b9ab1](https://github.com/standy/ts-date/commit/21b9ab1)), closes [#4](https://github.com/standy/ts-date/issues/4)



<a name="2.1.6"></a>
## [2.1.6](https://github.com/standy/ts-date/compare/v2.1.5...v2.1.6) (2017-08-12)


### Bug Fixes

* added sibling tokens into formatter function, apply proper declension for "D[&nbsp;]MMMM" ([f7ef80a](https://github.com/standy/ts-date/commit/f7ef80a))



<a name="2.1.5"></a>
## [2.1.5](https://github.com/standy/ts-date/compare/v2.1.4...v2.1.5) (2017-08-09)


### Bug Fixes

* simplify tokensRx ([86237a3](https://github.com/standy/ts-date/commit/86237a3))



<a name="2.1.4"></a>
## [2.1.4](https://github.com/standy/ts-date/compare/v2.1.3...v2.1.4) (2017-07-26)


### Bug Fixes

* ValidDate type not exported ([5377be2](https://github.com/standy/ts-date/commit/5377be2))



<a name="2.1.3"></a>
## [2.1.3](https://github.com/standy/ts-date/compare/v2.1.2...v2.1.3) (2017-07-21)



<a name="2.1.2"></a>
## [2.1.2](https://github.com/standy/ts-date/compare/v2.1.1...v2.1.2) (2017-07-18)


### Bug Fixes

* removed Object.keys & Object.assign usage, so no polyfills required ([cc54414](https://github.com/standy/ts-date/commit/cc54414))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/standy/ts-date/compare/v2.1.0...v2.1.1) (2017-07-17)


### Bug Fixes

* adding right amount of time across dst for addUnit methods ([b439f6f](https://github.com/standy/ts-date/commit/b439f6f))
* calculating correct diffDate across dst ([2c9a3d2](https://github.com/standy/ts-date/commit/2c9a3d2))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/standy/ts-date/compare/v2.0.3...v2.1.0) (2017-07-15)


### Features

* added performance test ([f5eeec6](https://github.com/standy/ts-date/commit/f5eeec6))
* removed method "asDate", use just "as Date" ([07e8666](https://github.com/standy/ts-date/commit/07e8666))
* ValidDate as global type when importing lib ([4ff1056](https://github.com/standy/ts-date/commit/4ff1056))


### Performance Improvements

* caching in format method ([19c0c8f](https://github.com/standy/ts-date/commit/19c0c8f))
* strict compare to null and getTime instead of "+" ([d9291c7](https://github.com/standy/ts-date/commit/d9291c7))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/standy/ts-date/compare/v2.0.2...v2.0.3) (2017-07-12)


### Bug Fixes

* added parsers for ordinal values ([e15e0ea](https://github.com/standy/ts-date/commit/e15e0ea))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/standy/ts-date/compare/v2.0.1...v2.0.2) (2017-07-10)


### Bug Fixes

* fromDateOrThrow should accept undefined ([c35bd9f](https://github.com/standy/ts-date/commit/c35bd9f))
* new method: parseIsoOrThrow ([381a899](https://github.com/standy/ts-date/commit/381a899))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/standy/ts-date/compare/v2.0.0...v2.0.1) (2017-07-10)


### Bug Fixes

* added method: parseOrThrow ([4ce1b00](https://github.com/standy/ts-date/commit/4ce1b00))
* fromDate should accept undefined ([f4e0d04](https://github.com/standy/ts-date/commit/f4e0d04))



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
