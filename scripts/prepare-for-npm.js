const {execSync} = require('child_process');

const {join, resolve} = require('path');
const {copySync, emptyDirSync, writeFileSync} = require('fs-extra');

emptyDirSync('./npm');

const files = [
	'README.md',
	'LICENSE',
	'package.json',
];
files.forEach(file => copySync(file, join('./npm/', file)));


const SEPARATOR = process.platform === "win32" ? ";" : ":";
const PATH = process.env.PATH;
const env = Object.assign({}, process.env);
env.PATH = resolve('./node_modules/.bin') + SEPARATOR + PATH;

function run(cmd) {
    execSync(cmd, {
        cwd: process.cwd(),
        env: env
    });
}

run('tsc -p tsconfig.mjs.json --outDir npm');
run('tsc -p tsconfig.cjs.json --outDir npm/cjs');
run('rollup -c');

writeFileSync('.npmrc', `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}\n`);
