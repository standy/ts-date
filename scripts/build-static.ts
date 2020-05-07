import {join} from 'path';
import {copySync, emptyDirSync, writeFileSync} from 'fs-extra';
import * as ts from 'typescript';
import {OUT_DIR, buildFiles} from './build-files';

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
copyFiles.forEach((fileName) => copySync(fileName, join(OUT_DIR, fileName)));

/**
 * Compile type declarations
 */
function compileDeclarations(fileNames: string[], options: ts.CompilerOptions) {
	ts.createProgram(fileNames, options, ts.createCompilerHost(options)).emit();
}
compileDeclarations(buildFiles, {
	outDir: OUT_DIR,
	declaration: true,
	emitDeclarationOnly: true,
});
compileDeclarations(buildFiles, {
	outDir: join(OUT_DIR, 'esm'),
	declaration: true,
	emitDeclarationOnly: true,
});
