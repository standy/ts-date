import {ValidDate} from '../valid-date';

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
	Dec,
}

export type DiffUnitFn<T> = number | (T extends ValidDate ? number : null);

export interface FormatFn {
	(d: ValidDate): string;
	(d: null): null;
	(d: Date | null): string | null;
}

export interface FormatByTemplateFn {
	(d: ValidDate, template: string): string;
	(d: null, template: string): null;
	(d: Date | null, template: string): string | null;
}

export interface ParseFn {
	(dateStr: string): ValidDate | null;
}

export interface ParseByTemplateFn {
	(dateStr: string, template: string): ValidDate | null;
}

export interface ParseByTemplateOrThrowFn {
	(dateStr: string, template: string): ValidDate | null;
}

export type Formatter = (date: ValidDate, index?: number, tokens?: (string | Formatter)[]) => string | number;
export type FormatterObj = {[key: string]: Formatter};

export type Parser = (date: Date, value: string) => void;
export type ParserData = [string, Parser];
export type ParserObj = {[key: string]: ParserData};
