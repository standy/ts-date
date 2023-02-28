[![Build Status](https://travis-ci.org/standy/ts-date.svg?branch=master)](https://travis-ci.org/standy/ts-date)
[![Coverage Status](https://coveralls.io/repos/github/standy/ts-date/badge.svg?branch=master)](https://coveralls.io/github/standy/ts-date?branch=master)
[![dependencies Status](https://david-dm.org/standy/ts-date/status.svg)](https://david-dm.org/standy/ts-date)
[![MIT License](https://img.shields.io/npm/l/ts-date.svg)](https://github.com/standy/ts-date/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/ts-date.svg)](https://www.npmjs.com/package/ts-date)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

**ts-date** is a `Date` library written in Typescript for Typescript

Main difference from most javascript `Date` libraries is:

- you will never get `"Invalid Date"`, if you follow types
- literally no overhead under native `Date`, take a look at [benchmarks](https://github.com/standy/ts-date/tree/master/benchmark)
- provides tree-shakeable pure functions

## Usage

```js
import { parse, format, addMonth } from "ts-date/esm/locale/en";
const date = parse("1st August 2017", "Do MMMM YYYY");
const result = format(addMonth(date, 1), "Do MMMM YYYY"); // 1st September 2017
```

## ES6 modules and CommonJS

To get full benefit from [tree shaking](https://webpack.js.org/guides/tree-shaking/) you can import from `ts-date/esm/*`  
See [resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias) for Webpack,
or [rollup-plugin-alias](https://github.com/rollup/rollup-plugin-alias) for Rollup

## Locales

There is different import for each locale: `ts-date/locale/*`  
For now there is `en`, `da` and `ru`

:warning: Directly `ts-date` exports without any locale

## Compare type system with `momentjs`

With `momentjs` you have no warnings here:

```js
import * as moment from "moment";
function someDateProcessing(isoDate: string): string {
	const m = moment(isoDate);
	return m.format("YYYY-MM-DD"); // "Invalid date"
}
someDateProcessing("The Day After Tomorrow");
```

With **ts-date** you forced to make checks or add a `null` as possible result

```js
import { format, parseIso } from "ts-date";
function dateProcessingWithSafetyBelt(pleaseIsoDate: string): string {
	const d = parseIso(pleaseIsoDate); // Type is 'ValidDate | null'

	// Warning here:
	return format(d, "YYYY-MM-DD"); // Type is 'string | null'
	// TS2322:Type 'string | null' is not assignable to type 'string'.

	// To avoid warning should:
	// - change function type to 'string | null'
	// - throw error
	// - or return another magic string explicitly
	if (d === null) {
		throw new TypeError(`ISO 8601 format expected`);
	}
	d; // Type is 'ValidDate'
	return format(d, "YYYY-MM-DD"); // Type is 'string'
}
```

## ValidDate type

`ValidDate` type – the immutable wrapper type under `Date`, actually `ValidDate` becomes a `Date` after compile

`ValidDate` creation occurs through methods which will return `null` instead of `Date("Invalid Date")`

```js
import { parseIso, format } from "ts-date/locale/en";
const d = parseIso("2021-12-21"); // ValidDate | null
format(d, "Do MMMM YYYY"); // Type is 'string | null'
if (d) {
	d; // ValidDate
	format(d, "Do MMMM YYYY"); // Type is 'string'
	// no "Invalid Date" option here
} else {
	d; // null
	format(null, "Do MMMM YYYY"); // Type is 'null'
}
```

Since `ValidDate` is `Date`, you can use some `Date` methods:

```js
const d = parseIso("2021-12-21");
if (d) {
	d.getDate(); // 21
}
```

To make `ValidDate` immutable, all methods for `Date` mutation are banned in type:

```js
d.setDate(0); // Typescript will warn here
```

## Browser support

[![Sauce Test Status](https://app.saucelabs.com/browser-matrix/standy.svg)](https://app.saucelabs.com/u/standy)


Should work fine without polyfills in every modern browser and IE9+
Chrome 5+, Edge, Firefox 4.0+, IE 9+, Opera 12+, Safari 5+

# Api

**NOTE**: Mostly methods will return `null` for `null` or invalid input

### Tokens

This tokens can be used for parsing and formatting dates:

| token      | meaning              | example           |
| :--------- | :------------------- | :---------------- |
| YYYY       | 4 digit year         | 2018              |
| YY         | 2 digit year         | 18                |
| MMMM       | month                | January, December |
| MMM        | short month          | Jan, Dec          |
| MM, M      | month number         | 01, 1             |
| DD, D      | day of month         | 02, 2             |
| dddd       | day of week          | Friday, Sunday    |
| ddd        | short day of week    | Fri, Sun          |
| dd         | 2 letter day of week | Fr, Su            |
| HH, H      | hour-24              | 0..24             |
| hh, h      | hour-12              | 0..12             |
| A          | meridiem             | AM, PM            |
| a          | meridiem             | am, pm            |
| aa         | meridiem             | a.m., p.m.        |
| mm, m      | minute               | 0..59             |
| ss, s      | second               | 0..59             |
| SSS, SS, S | millisecond          | 0..999            |
| Z          | timezone             | -12:00..+12:00    |
| ZZ         | timezone             | -1200..+1200      |

## Date parsing and creation

### parse(date: string, template: string): ValidDate | null

Parse date by template using tokens

```js
parse("2018 July 12", "YYYY MMMM D"); // = Date(2018-07-12)
```

### parseIso(dateIso: string): ValidDate | null

Parse most of ISO 8601 formats

```js
parseIso("2018-06-12T19:30"); // = Date(2018-06-12T19:30)
```

### fromDate(date: Date | number): ValidDate | null

Creates `ValidDate` from `Date` object
Similar to `isValidDate`, but returns new valid date or null

### newValidDate(...args): ValidDate

Create `ValidDate`, same signature as `new Date(...)`

### isValidDate(date: Date): boolean

Type guard for `ValidDate`, returns `true` if date is valid

## Date formatting

### format(date: ValidDate, template: string): string

Format by template using tokens

```js
format(new Date("2018-07-12"), "YYYY MMMM D"); // = '2018 July 12'
```

### formatDateIso(ValidDate): string

Format as `YYYY-MM-DD` ISO string

### formatDateTimeIso(ValidDate): string

Format as `YYYY-MM-DD[T]HH:MM` ISO string

### formatLocalIso(ValidDate): string

Format as `YYYY-MM-DD[T]HH:MM:SS.sss` ISO string

## Date manipulations

### add\[Units](date: ValidDate, amount: number): ValidDate

Adding fixed amount of units.
First argument should be `ValidDate`, `null` or either. Result will be same type as input

```js
addMilliseconds;
addSeconds;
addMinutes;
addHours;
addDate;
addMonth;
addYear;
```

### reset\[Units](date: ValidDate): ValidDate

Reset to default all units after method's name unit

```js
resetYear;
resetMonth;
resetISOWeek;
resetDate;
resetHours;
resetMinutes;
resetSeconds;
```

Example:

```js
resetYear(newValidDate(2017, 5, 30, 12, 30)); // = Date(2017-01-01)
```

### diff\[Units](d1: ValidDate, d2: ValidDate): number

Return whole amount of [units] between first and second date, same as you expect from `d1 - d2`  
In case one of arguments is `null` or `Date("Invalid Date")`, result is `null`

```js
diffMilliseconds;
diffSeconds;
diffMinutes;
diffHours;
diffDate;
diffMonth;
diffYear;
```

Example:

```js
diffDate(new Date(2018, 5, 10, 18), new Date(2018, 5, 1, 12)); // = 9
diffDate(new Date(2018, 5, 10, 18), new Date(2018, 5, 1, 20)); // = 8
```

### diffCalendar[Units](d1: ValidDate, d2: ValidDate): number

Enumerate units between dates

```js
diffCalendarDate;
diffCalendarMonth;
diffCalendarYear;
```

Example:

```js
diffCalendarDate(new Date(2018, 5, 10, 18), new Date(2018, 5, 1, 12)); // = 9
diffCalendarDate(new Date(2018, 5, 10, 18), new Date(2018, 5, 1, 20)); // = 9 <-- different from diffDate

function isToday(d: ValidDate) {
	return diffCalendarDate(d, newValidDate()) === 0;
}
```
