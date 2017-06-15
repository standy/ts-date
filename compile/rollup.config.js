const pkg = require('../package.json');

export default {
  entry: 'dest-es6/ts-date.js',
  targets: [
    {
      dest: pkg.main,
      format: 'cjs'
    }
  ]
};