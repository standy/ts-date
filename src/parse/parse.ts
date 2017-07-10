import {ParseByTemplateFn, ParseByTemplateOrThrowFn} from '../utils/basic-types';
import defaultParsers from './default-parsers';
import {createParse, parseOrThrowWrapper} from './create-parse';

/**
 * parse without any locale, just numbers
 */
export const parse: ParseByTemplateFn = createParse(defaultParsers);
export const parseOrThrow: ParseByTemplateOrThrowFn = parseOrThrowWrapper(parse);
