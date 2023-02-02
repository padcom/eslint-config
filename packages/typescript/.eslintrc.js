module.exports = {
  env: {
    'node': true,
    'es2021': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    './index.js',
  ],
  globals: {
    'describe': 'readonly',
    'expect': 'readonly',
    'it': 'readonly',
    'correct': 'readonly',
    'incorrect': 'readonly',
  },
}
