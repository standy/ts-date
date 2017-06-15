import {ValidDate} from '../utils/basic-types';
import defaultParsers from './default-parsers';
import {createParse} from './create-parse';

/**
 * parse without any locale, just numbers
 */
export const parse: (dateStr: string, template: string) => ValidDate | null = createParse(defaultParsers);
