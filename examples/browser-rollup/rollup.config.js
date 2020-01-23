const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

const plugins = [resolve(), terser()];
module.exports = [
  {
    input: './example-all.js',
    output: {
      file: 'dist/all.js',
      format: 'iife',
    },
    plugins,
  },
  {
    input: './example-v1.js',
    output: {
      file: 'dist/v1.js',
      format: 'iife',
    },
    plugins,
  },
  {
    input: './example-v4.js',
    output: {
      file: 'dist/v4.js',
      format: 'iife',
    },
    plugins,
  },

  {
    input: './bundlesize-v1.js',
    output: {
      file: 'dist/v1-size.js',
      format: 'cjs',
    },
    plugins,
  },
  {
    input: './bundlesize-v3.js',
    output: {
      file: 'dist/v3-size.js',
      format: 'cjs',
    },
    plugins,
  },
  {
    input: './bundlesize-v4.js',
    output: {
      file: 'dist/v4-size.js',
      format: 'cjs',
    },
    plugins,
  },
  {
    input: './bundlesize-v5.js',
    output: {
      file: 'dist/v5-size.js',
      format: 'cjs',
    },
    plugins,
  },
];
