[![Build Status](https://travis-ci.org/standy/ts-date.svg?branch=master)](https://travis-ci.org/standy/ts-date)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


**ts-date** is a `Date` library which shine in Typescript enviroment  

Main difference from javascript `Date` libraries is:
   * avoiding `"Invalid Date"`  
   * literally no overhead under native `Date`
   * it force to do essential checks  
   
## How?
All this is possible thanks to `ValidDate` type (not a class) – the immutable wrapper under `Date`, actually `ValidDate` becomes a `Date` after compile  

`ValidDate` creation occurs through methods which will return `null` instead of `Date("Invalid Date")`, and `null` is a valid argument for every method where required `ValidDate`  
```typescript
import { parseIso, format } from 'ts-date/locale/en';
const d = parseIso('2021-12-21'); // ValidDate | null
format(d, 'D MMMM YYYY'); // Type is 'string | null'
if (d) {
    d; // ValidDate
    format(d, 'D MMMM YYYY'); // Type is 'string'
    // no "Invalid Date" option here
} else {
    d; // null
    format(null, 'D MMMM YYYY'); // Type is 'null'
}
```
Since `ValidDate` is `Date`, you can use some `Date` methods:  
```typescript
const d = parseIso('2021-12-21');
if (d) {
    d.getDate() // 21
}
```
To make `ValidDate` immutable, all methods for `Date` mutation are banned:
```typescript
d.setDate() // Property 'setDate' does not exist on type 'ValidDate'.
```
 

##### Compare with momentjs
With `momentjs` you have no warnings here:  
```typescript
import * as moment from 'moment';
function apocalypseIsoDate(isoDate: string): string {
  const m = moment(isoDate);  
  return m.format('YYYY-MM-DD'); // "Invalid date"
}
apocalypseIsoDate('The Day After Tomorrow');
```

With **ts-date** you forced to make checks or add a `null` as posible result 
```typescript
import { format, parseIso } from 'ts-date';
function apocalypseIsoDateWithSafetyBelt(pleaseIsoDate: string): string {
  const d = parseIso(pleaseIsoDate); // Type is 'ValidDate | null'
  
  // Warning here:   
  return format(d, 'YYYY-MM-DD'); // Type is 'string | null'
  // TS2322:Type 'string | null' is not assignable to type 'string'.
  
  // To avoid warning do what you should to do:
  // change function type to 'string | null', 
  // throw error,
  // or return another magic string explicitly
  if (d === null) {
    throw new TypeError(`ISO 8601 format expected`);
  }
  d; // Type is 'ValidDate'
  return format(d, 'YYYY-MM-DD'); // Type is 'string'
}
```

## Locales
For now there is only 2 locales: `en`, `ru`

```typescript
import { parse, format, addMonth } from 'ts-date/locale/en';
const d = parse('1 August 2017', 'D MMMM YYYY');
const f = format(addMonth(d, 1), 'D MMMM YYYY'); // 1 September 2017
```


## ES6 modules and CommonJS
By default library exports in [ES6 modules](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export) syntax, to use library in CommonJS enviroment, like Node.js, you can use `cjs` version:
```js
import { parse, format, addMonth } from 'ts-date/cjs/locale/en';
```


## Api

### Date creation
```typescript
parse(date: string, template: string): ValidDate | null
parseIso(dateIso: string): ValidDate | null
createTsDate(Date | number | null | undefined): ValidDate | null
newTsDate(<same arguments as in Date constructor>): ValidDate | null
```

### Adding
```typescript
addMilliseconds(ValidDate, number): ValidDate 
addSeconds(ValidDate, number): ValidDate
addMinutes(ValidDate, number): ValidDate
addHours(ValidDate, number): ValidDate
addDate(ValidDate, number): ValidDate
addMonth(ValidDate, number): ValidDate
addYear(ValidDate, number): ValidDate
addUTCMilliseconds(ValidDate, number): ValidDate
addUTCSeconds(ValidDate, number): ValidDate
addUTCMinutes(ValidDate, number): ValidDate
addUTCHours(ValidDate, number): ValidDate
addUTCDate(ValidDate, number): ValidDate
addUTCMonth(ValidDate, number): ValidDate
addUTCYear(ValidDate, number): ValidDate
```

### Reset
```typescript
resetYear(ValidDate): ValidDate
resetMonth(ValidDate): ValidDate
resetISOWeek(ValidDate): ValidDate
resetDate(ValidDate): ValidDate
resetHours(ValidDate): ValidDate
resetMinutes(ValidDate): ValidDate
resetSeconds(ValidDate): ValidDate
```

### Diffing
```typescript
diffMilliseconds(ValidDate, ValidDate): number
diffSeconds(ValidDate, ValidDate): number
diffMinutes(ValidDate, ValidDate): number
diffHours(ValidDate, ValidDate): number
diffDate(ValidDate, ValidDate): number
diffMonth(ValidDate, ValidDate): number
diffYear(ValidDate, ValidDate): number
diffCalendarDate(ValidDate, ValidDate): number
diffCalendarMonth(ValidDate, ValidDate): number
diffCalendarYear(ValidDate, ValidDate): number
```

### Formatting
```typescript
format(ValidDate, template: string): string
formatDateIso(ValidDate): string
formatDateTimeIso(ValidDate): string
formatLocalIso(ValidDate): string
```
