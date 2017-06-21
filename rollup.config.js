import typescript2 from 'rollup-plugin-typescript2';

const plugins = [
	typescript2({
		check: false,
		clean: true,
		cacheRoot: `./.cache/.rts2_cache`,
		tsconfig: `./tsconfig.umd.json`,
		outDir: './npm/dist',
	}),
];

const configMaker = name => ({
	entry: name + '.ts',
	dest: 'npm/dist/' + name + '.js',
	format: 'umd',
	moduleName: 'tsdate',
	plugins,
});

export default [
	configMaker('index'),
	configMaker('locale/en/index'),
	configMaker('locale/ru/index'),
];
