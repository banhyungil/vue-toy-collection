/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // single quote 사용
        tabWidth: 2, // tabWidth 2
        trailingComma: 'all', // 멀티라인에서 라인 뒤 콤마 사용
        printWidth: 80, // 한 라인 최대길이
        bracketSpacing: true, // { foo:bar } 형태로 앞, 뒤 스페이스
        endOfLine: 'auto',
      },
    ],
  },
};
