const {execSync} = require('child_process');

const {join, resolve} = require('path');
const {copySync, emptyDir} = require('fs-extra');

emptyDir('./npm');

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
run('tsc -p tsconfig.node.json --outDir npm/es5');
run('rollup -c');
