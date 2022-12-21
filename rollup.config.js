import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import pkg from './package.json';

const transformStyles = postcss({
  extract: 'msa.css',
  plugins: [autoprefixer(), cssnano]
});

const input = 'src/js/msa.js';

export default [
  {
    input,
    output: {
      file: pkg.browser,
      name: 'MSA',
      format: 'umd',
      sourcemap: process.env.NODE_ENV === 'dev'
    },
    plugins: [
      transformStyles,
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**']
      }),
      terser()
    ]
  },
  {
    input,
    external: Object.keys(pkg.dependencies),
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      transformStyles,
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
];
