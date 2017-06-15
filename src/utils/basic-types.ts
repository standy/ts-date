export interface ValidDate {
	toString(): string;
	toDateString(): string;
	toTimeString(): string;
	toLocaleString(): string;
	toLocaleDateString(): string;
	toLocaleTimeString(): string;
	valueOf(): number;
	getTime(): number;
	getFullYear(): number;
	getUTCFullYear(): number;
	getMonth(): number;
	getUTCMonth(): number;
	getDate(): number;
	getUTCDate(): number;
	getDay(): number;
	getUTCDay(): number;
	getHours(): number;
	getUTCHours(): number;
	getMinutes(): number;
	getUTCMinutes(): number;
	getSeconds(): number;
	getUTCSeconds(): number;
	getMilliseconds(): number;
	getUTCMilliseconds(): number;
	getTimezoneOffset(): number;
	toUTCString(): string;
	toISOString(): string;
	toJSON(key?: any): string;
	__IsValidDate: true;
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
	(d: ValidDate | null): Result | null;
}

export interface ValidDateMethod1D1Arg<Arg, Result> {
	(d: null, arg: Arg): null;
	(d: ValidDate, arg: Arg): Result;
	(d: ValidDate | null, arg: Arg): Result | null;
}

export interface ValidDateMethod2D<Result> {
	(d1: null, d2: ValidDate | null): null;
	(d1: ValidDate | null, d2: null): null;
	(d1: ValidDate, d2: ValidDate): Result;
	(d1: ValidDate | null, d2: ValidDate | null): Result | null;
}

export interface ValidDateParse {
	(d: undefined | null): null;
	(d: Date | number | string): ValidDate | null;
}


export type Parser = (date: Date, value: string) => void;
export type ParserData = [string, Parser];
export type ParserObj = {[key: string]: ParserData};
