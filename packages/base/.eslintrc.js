module.exports = {
  env: {
    'node': true,
    'es2021': true,
  },
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
