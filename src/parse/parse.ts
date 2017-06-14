import defaultParsers from '../locale/default-parsers';
import {parsers} from '../locale/ru/ru';
import {tokensRx} from '../utils/tokens-rx';
import {toTsDateOrNull} from '../create/create-ts-date';

type Parser = (date: Date, value: string) => void;

const totalParsers = Object.assign({}, defaultParsers, parsers);
const RX_TOKENS = tokensRx(Object.keys(totalParsers));

function escapeRegExp(text: string) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
export function parseFn(template: string): (str: string) => ValidDate | null {
	const tokens = template.match(RX_TOKENS) as string[];
	// this regexp cant fail because of "|."

	const parsersFn: Array<Parser> = [];
	const rxStr = tokens.map(token => {
		const parser = totalParsers[token];
		if (parser) {
			parsersFn.push(parser[1]);
			const regexpPart = parser[0];
			return `(${regexpPart})`;
		}

		if (token.charAt(0) === '[' && token.charAt(token.length - 1) === ']') token = token.substring(1, token.length - 1);
		return escapeRegExp(token);
	}).join('');
	const rx = new RegExp('^' + rxStr + '$', 'i');

	return str => {
		const values = str.match(rx);
		if (!values) return null;
		/* NOTE second zero needed to set current timezone */
		const date = new Date(0, 0);
		values.slice(1).forEach((value, index) => {
			const parserFn = parsersFn[index];
			parserFn(date, value);
		});
		return toTsDateOrNull(date);
	};
}

export function parse(dateStr: string, template: string): ValidDate | null {
	return parseFn(template)(dateStr);
}
