import {FormatByTemplateFn, FormatterObj} from '../utils/basic-types';
import {extend} from '../utils/utils';
import {defaultFormatters} from './default-formatters';
import {createFormat} from './create-format';

const commonFormatters: FormatterObj = extend({}, defaultFormatters);

/**
 * format without any locale, just numbers
 */
export const format: FormatByTemplateFn = createFormat(commonFormatters);

/**
 * extending common formatters with your own
 */
export function extendFormat(formatters: FormatterObj) {
	for (const key in formatters) {
		(commonFormatters as any)[key] = formatters[key];
	}
}
