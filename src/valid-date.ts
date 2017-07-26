export interface ValidDate extends Date {
	setTime(time: never): never;
	setMilliseconds(ms: never): never;
	setUTCMilliseconds(ms: never): never;
	setSeconds(sec: never, ms?: never): never;
	setUTCSeconds(sec: never, ms?: never): never;
	setMinutes(min: never, sec?: never, ms?: never): never;
	setUTCMinutes(min: never, sec?: never, ms?: never): never;
	setHours(hours: never, min?: never, sec?: never, ms?: never): never;
	setUTCHours(hours: never, min?: never, sec?: never, ms?: never): never;
	setDate(date: never): never;
	setUTCDate(date: never): never;
	setMonth(month: never, date?: never): never;
	setUTCMonth(month: never, date?: never): never;
	setFullYear(year: never, month?: never, date?: never): never;
	setUTCFullYear(year: never, month?: never, date?: never): never;
}
