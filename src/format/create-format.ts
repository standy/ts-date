import {FormatByTemplateFn} from '../utils/basic-types';
import {tokensRx} from '../utils/tokens-rx';
import {FormatterObj} from './default-formatters';
import {isValidDate} from '../default-exports';

export function createFormat(formatters: FormatterObj): FormatByTemplateFn {
	const RX_TOKENS = tokensRx(Object.keys(formatters));

	return (d: ValidDate | Date | null, template: string): any => {
		if (!isValidDate(d)) return null;
		const tokens = template.match(RX_TOKENS) as string[];
		// this regexp cant fail because of "|."

		return tokens.map(token => {
			const tokenFn = formatters[token];
			if (tokenFn) {
				return tokenFn(d as ValidDate);
			}
			if (token.charAt(0) === '[' && token.charAt(token.length - 1) === ']') {
				return token.substring(1, token.length - 1);
			}
			return token;
		}).join('');
	};
}


/* NOTE Unused for a while
export function createFormatFn(formatters: FormatterObj): (template: string) => ValidDateMethod1D<string> {
	const RX_TOKENS = tokensRx(Object.keys(formatters));

	return template => {
		const tokens = template.match(RX_TOKENS) as string[];
		// this regexp cant fail because of "|."

		const functions = tokens.map(token => {
			const tokenFn = formatters[token];
			if (tokenFn) {
				return (date: ValidDate) => tokenFn(date);
			}
			if (token.charAt(0) === '[' && token.charAt(token.length - 1) === ']') return token.substring(1, token.length - 1);
			return token;
		});
		return ((d: ValidDate | null) => {
			if (!d) return null;
			return functions.map(x => typeof x === 'function' ? x(d) : x).join('');
		}) as ValidDateMethod1D<string>;
	};
}
*/
