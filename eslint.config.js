import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  prettierConfig,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': ['error', { trailingComma: 'only-multiline' }],
      'comma-dangle': ['error', 'only-multiline'],
    },
  },
];
