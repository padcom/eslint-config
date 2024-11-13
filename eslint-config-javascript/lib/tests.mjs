/** @type {import('eslint').Linter.Config[]} */
export const tests = [
  {
    name: 'padcom/flat/tests',
    files: ['**/*.test.*'],
    rules: {
      // Tests have a structure where the 2nd-level callback is the body of the test
      // Therefore, to be able to use any kind of callback in the test it needs to
      // be increased by one
      'max-nested-callbacks': ['error', 4],
    },
  },
]
