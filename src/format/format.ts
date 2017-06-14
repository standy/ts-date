import defaultFormatters from '../locale/default-formatters';
import {formatters} from '../locale/ru/ru';
import {tokensRx} from '../utils/tokens-rx';

const totalFormatters = Object.assign({}, defaultFormatters, formatters);
const RX_TOKENS = tokensRx(Object.keys(totalFormatters));

export function formatFn(format: string): ValidDateMethod1D<string> {
	const tokens = format.match(RX_TOKENS) as string[];
	// this regexp cant fail because of "|."

	const functions = tokens.map(token => {
		const tokenFn = totalFormatters[token];
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
}


export const format = function(d: ValidDate | null, format: string): string | null {
	return formatFn(format)(d);
} as ValidDateMethod1D1Arg<string, string>;
