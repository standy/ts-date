import {join} from 'path';
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import {buildFiles, OUT_DIR} from './scripts/build-files.ts';

export default [
	// CommonJS (for Node) and ES module (for bundlers) build
	{
		input: buildFiles,
		plugins: [
			// plugins
			typescript({module: 'es6'}),
			multiInput({relative: '.'}),
		],
		output: [
			{dir: OUT_DIR, format: 'cjs'},
			{dir: join(OUT_DIR, 'esm'), format: 'es'},
		],
	},
];
