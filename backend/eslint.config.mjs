import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  // Ignore generated + config files
  globalIgnores([
    '**/node_modules',
    '**/dist',
    '**/build',
    '**/coverage',
    'eslint.config.mjs',
  ]),

  // Lint only source files
  {
    files: ['src/**/*.ts', 'src/**/*.js'],

    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:node/recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended'
      )
    ),

    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      'prettier/prettier': 'error',

      '@typescript-eslint/no-unused-vars': ['warn'],

      'no-console': 'off',

      'node/no-missing-import': 'off',
    },
  },
]);
