module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@padcom/base',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    'describe': 'readonly',
    'expect': 'readonly',
    'it': 'readonly',
    'correct': 'readonly',
    'incorrect': 'readonly',
  },
  rules: {
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/no-types': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
