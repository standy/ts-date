import {join} from 'path';
import typescript from '@rollup/plugin-typescript';
import multiInput from 'rollup-plugin-multi-input';
import {emptyDirSync, copySync, writeFileSync} from 'fs-extra';
import * as ts from 'typescript';
import * as glob from 'glob';

const OUT_DIR = 'dist';

/**
 * Setup Npm token
 */
writeFileSync('.npmrc', `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}\n`);

/**
 * Cleanup build directory
 */
emptyDirSync(OUT_DIR);

/**
 * Copy static files
 */
const copyFiles = ['README.md', 'LICENSE', 'package.json'];
copyFiles.forEach(fileName => copySync(fileName, join(OUT_DIR, fileName)));

/**
 * Compile type declarations
 */
const buildFiles = glob.sync('{index.ts,./locale/*/index.ts}');
function compileDeclarations(fileNames, options) {
	ts.createProgram(fileNames, options, ts.createCompilerHost(options)).emit();
}
compileDeclarations(buildFiles, {
	outDir: OUT_DIR,
	declaration: true,
	emitDeclarationOnly: true,
});

export default [
	// browser-friendly UMD build
	// ...buildFiles.map(fileName => {
	// 	return {
	// 		input: fileName,
	// 		output: [
	// 			{file: join(OUT_DIR, 'umd', fileName.replace(/\.ts$/g, '.js')), format: 'umd', name: 'tsDate'}
	// 		],
	// 		plugins: [
	// 			typescript({module: 'es6'}),
	// 		],
	// 	};
	// }),

	// CommonJS (for Node) and ES module (for bundlers) build
	{
		input: buildFiles,
		plugins: [
			typescript({module: 'es6'}),
			multiInput({relative: '.'}),
		],
		output: [
			{dir: OUT_DIR, format: 'cjs'},
			{dir: join(OUT_DIR, 'esm'), format: 'es'},
		],
	},
];
