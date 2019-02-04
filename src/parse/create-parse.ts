import {ValidDate} from '../valid-date';
import {ParserObj, ParseByTemplateFn, ParseByTemplateOrThrowFn} from '../utils/basic-types';
import {tokensRx} from '../utils/utils';
import {asValidDateOrNull} from '../create/create-ts-date';

type Parser = (date: Date, value: string) => void;

function escapeRegExp(text: string) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function createParse(parsers: ParserObj): ParseByTemplateFn {
	const RX_TOKENS = tokensRx(parsers);

	return function parse(dateStr: string, template: string): ValidDate | null {
		const tokens = template.match(RX_TOKENS) as string[];
		// this regexp cant fail because of "|."

		const parsersFn: Array<Parser> = [];
		const rxStr = tokens
			.map(token => {
				const parser = parsers[token];
				if (parser) {
					parsersFn.push(parser[1]);
					const regexpPart = parser[0];
					return `(${regexpPart})`;
				}

				if (token.charAt(0) === '[' && token.charAt(token.length - 1) === ']')
					token = token.substring(1, token.length - 1);
				return escapeRegExp(token);
			})
			.join('');
		const rx = new RegExp('^' + rxStr + '$', 'i');

		const values = dateStr.match(rx);
		if (!values) return null;
		/* NOTE second zero needed to set current timezone */
		const date = new Date(0, 0);
		values.slice(1).forEach((value, index) => {
			const parserFn = parsersFn[index];
			parserFn(date, value);
		});
		return asValidDateOrNull(date);
	};
}

export function parseOrThrowWrapper(fn: ParseByTemplateFn): ParseByTemplateOrThrowFn {
	return function parseOrThrow(dateStr: string, template: string): ValidDate {
		const result = fn(dateStr, template);
		if (result === null) throw new Error(`Failed to parse date "${dateStr}" by template "${template}"`);
		return result;
	};
}
