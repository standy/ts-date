# ts-date
Type-safe Date

## The Problem  
```ts
/**
 * Method gets date string in any ISO 8601 format 
 * and returns in YYYY-MM-DD
 */
import * as moment from 'moment';
import * as dateFns from 'date-fns';
function apocalypseIsoDate(pleaseIsoDate: string): string {
  const d = new Date(pleaseIsoDate);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // "NaN-NaN-NaN"
  // or
  const m = moment(pleaseIsoDate);
  return m.format('YYYY-MM-DD'); // "Invalid date"
  // or
  const f = dateFns.parse(pleaseIsoDate);
  return dateFns.format(f, 'YYYY-MM-DD'); // "Invalid Date"
}

apocalypseIsoDate('The Day After Tomorrow');
// You get NOT a single type warning here
```

## The Solution
```ts
import {format, parseIso} from 'ts-date';
function apocalypseIsoDateWithSafetyBelt(pleaseIsoDate: string): string {
  const d = parseIso(pleaseIsoDate); // Type is 'ValidDate | null'
  
  // Cant just do that:   
  return format(d, 'YYYY-MM-DD'); // Type is 'string | null'
  // TS2322:Type 'string | null' is not assignable to type 'string'.
  
  // Do what you should to do:
  // change function type to 'string | null', 
  // throw error,
  // or return another magic string
  if (d === null) {
    throw new TypeError(`ISO 8601 format expected`);
  }
  d; // Type is 'ValidDate'
  return format(d, 'YYYY-MM-DD'); // Type is 'string'
}
```

## Api

### Date creation
```ts
parse(date: string, template: string): ValidDate | null
parseIso(dateIso: string): ValidDate | null
createTsDate(Date | number | null | undefined): ValidDate | null
newTsDate(<same arguments as in Date constructor>): ValidDate | null
```

### Adding
```ts
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
```ts
resetYear(ValidDate): ValidDate
resetMonth(ValidDate): ValidDate
resetISOWeek(ValidDate): ValidDate
resetDate(ValidDate): ValidDate
resetHours(ValidDate): ValidDate
resetMinutes(ValidDate): ValidDate
resetSeconds(ValidDate): ValidDate
```

### Diffing
```ts
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
```ts
format(ValidDate, template: string): string
formatDateIso(ValidDate): string
formatDateTimeIso(ValidDate): string
formatLocalIso(ValidDate): string
```
