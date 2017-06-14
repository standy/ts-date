import {ParserObj} from './default-parsers';
import {tokensRx} from '../utils/tokens-rx';
import {toTsDateOrNull} from '../create/create-ts-date';

type Parser = (date: Date, value: string) => void;

function escapeRegExp(text: string) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function createParse(parsers: ParserObj) {
	const RX_TOKENS = tokensRx(Object.keys(parsers));

	return function parse(dateStr: string, template: string): ValidDate | null {
		const tokens = template.match(RX_TOKENS) as string[];
		// this regexp cant fail because of "|."

		const parsersFn: Array<Parser> = [];
		const rxStr = tokens.map(token => {
			const parser = parsers[token];
			if (parser) {
				parsersFn.push(parser[1]);
				const regexpPart = parser[0];
				return `(${regexpPart})`;
			}

			if (token.charAt(0) === '[' && token.charAt(token.length - 1) === ']') token = token.substring(1, token.length - 1);
			return escapeRegExp(token);
		}).join('');
		const rx = new RegExp('^' + rxStr + '$', 'i');

		const values = dateStr.match(rx);
		if (!values) return null;
		/* NOTE second zero needed to set current timezone */
		const date = new Date(0, 0);
		values.slice(1).forEach((value, index) => {
			const parserFn = parsersFn[index];
			parserFn(date, value);
		});
		return toTsDateOrNull(date);
	}
}
