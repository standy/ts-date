import defaultFormatters from './default-formatters';
import {createFormat} from './create-format';

/**
 * format without any locale, just numbers
 */
export const format = createFormat(defaultFormatters);
