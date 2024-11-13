import promiseEslintPlugin from 'eslint-plugin-promise'

/** @type {import('eslint').Linter.Config[]} */
export const promises = [
  promiseEslintPlugin.configs['flat/recommended'],
  {
    name: 'padcom/flat/promises',
    files: ['**/*.[j,mj,cj,t,mt]s', '**/*.[j,t]sx', '**/*.vue'],
    rules: {
      'promise/always-return': 'off',
      'promise/avoid-new': 'off',
      'promise/catch-or-return': 'error',
      'promise/no-callback-in-promise': 'error',
      'promise/no-multiple-resolved': 'error',
      'promise/no-native': 'off',
      'promise/no-nesting': 'off',
      'promise/no-new-statics': 'error',
      'promise/no-promise-in-callback': 'off',
      'promise/no-return-in-finally': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/prefer-await-to-callbacks': 'error',
      'promise/prefer-await-to-then': 'error',
      // 'promise/prefer-catch': 'error', // somehow this rules doesn't exist?
      'promise/spec-only': 'error',
      'promise/valid-params': 'error',
    },
  },
]
