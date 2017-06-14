import defaultParsers from './default-parsers';
import {createParse} from './create-parse';

/**
 * parse without any locale, just numbers
 */
export const parse = createParse(defaultParsers);
