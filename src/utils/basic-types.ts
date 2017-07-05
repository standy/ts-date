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

export const enum MS {
	Milliseconds = 1, // 1000;
	Seconds = 1e3, // 1000;
	Minutes = 6e4, // 1000 * 60;
	Hours = 36e5, // 1000 * 60 * 60;
	Date = 864e5, // 1000 * 60 * 60 * 24;
}

export const enum Month {
	Jan = 0,
	Feb,
	Mar,
	Apr,
	May,
	Jun,
	Jul,
	Aug,
	Sep,
	Oct,
	Nov,
	Dec
}


export interface ValidDateMethod1D<Result> {
	(d: null): null;
	(d: ValidDate): Result;
	(d: ValidDate | Date | null): Result | null;
}

export interface ValidDateMethod1D1Arg<Arg, Result> {
	(d: null, arg: Arg): null;
	(d: ValidDate, arg: Arg): Result;
	(d: ValidDate | Date | null, arg: Arg): Result | null;
}

export interface ValidDateMethod2D<Result> {
	(d1: null, d2: ValidDate | null): null;
	(d1: ValidDate | null, d2: null): null;
	(d1: ValidDate | Date, d2: ValidDate | Date): Result;
	(d1: ValidDate | null, d2: ValidDate | null): Result | null;
}


export interface ValidDateMethodWithDateResult {
	<T extends ValidDate | Date | null>(d: T): T;
}
export interface ValidDateMethod1ArgWithDateResult {
	<T extends ValidDate | Date | null>(d: T, arg: number): T;
}

export interface DiffUnitFn extends ValidDateMethod2D<number> {
}


export interface ParseTemplate {
	(dateStr: string, template: string): ValidDate | null;
}

export type Parser = (date: Date, value: string) => void;
export type ParserData = [string, Parser];
export type ParserObj = {[key: string]: ParserData};
