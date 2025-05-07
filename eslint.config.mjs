const js = require('@eslint/js');
const globals = require('globals');
// import globals from 'globals';
const { defineConfig } = require('eslint/config');
const daStyle = require('eslint-config-dicodingacademy');
// import { defineConfig } from 'eslint/config';
// import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  daStyle,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      'linebreak-style': ['error', 'windows'], // tambahkan di sini
    },
    extends: ['js/recommended'],
  },
]);
