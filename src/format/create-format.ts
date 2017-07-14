import {FormatByTemplateFn} from '../utils/basic-types';
import {tokensRx} from '../utils/tokens-rx';
import {Formatter, FormatterObj} from './default-formatters';
import {isValidDate} from '../default-exports';

type Token = string | Formatter;

function splitToTokens(template: string, formatters: FormatterObj): Token[] {
	const RX_TOKENS = tokensRx(Object.keys(formatters));
	const tokens = template.match(RX_TOKENS) as string[];
	// this regexp cant fail because of "|."

	const result: Token[] = [];
	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];

		const tokenFn = formatters[token];
		if (tokenFn) {
			result.push(tokenFn);
		} else if (token.charAt(0) === '[' && token.charAt(token.length - 1) === ']') {
			result.push(token.substring(1, token.length - 1));
		} else {
			result.push(token);
		}
	}
	return result;
}

function formatByTokens(d: ValidDate, tokens: Token[]): string {
	const result: (string | number)[] = [];
	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		result.push(typeof token === 'function' ? token(d) : token);
	}
	return result.join('');
}

export function createFormat(formatters: FormatterObj): FormatByTemplateFn {
	const cache: {[template: string]: Token[]} = {};
	return (d: Date | null, template: string): any => {
		if (!isValidDate(d)) return null;
		let tokens = cache[template];
		if (tokens === undefined) {
			tokens = splitToTokens(template, formatters);
			cache[template] = tokens;
		}
		return formatByTokens(d, tokens);
	};
}
