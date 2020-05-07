import * as glob from 'glob';

export const OUT_DIR = 'dist';

export const buildFiles = glob.sync('{index.ts,./locale/*/index.ts}');
