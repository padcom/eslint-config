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
    // 'jsdoc/require-returns-type': 'off',
    // 'jsdoc/require-param-type': 'off',
    // 'jsdoc/no-types': 'error',
    '@typescript-eslint/ban-ts-comment': [2, {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': 'allow-with-description',
      'minimumDescriptionLength': 3,
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
}
