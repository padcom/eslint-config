/** @type {import('eslint').Linter.Config[]} */
export const typescript = [
  // TODO: Rain check
  // {
  //   name: 'padcom/flat/typescript-language-options',
  //   languageOptions: {
  //     parserOptions: {
  //       projectService: {
  //         allowDefaultProject: ['*.js', '*.mjs'],
  //         defaultProject: 'index.mjs',
  //       },
  //       tsconfigRootDir: process.cwd(),
  //     },
  //   },
  // },
  {
    name: 'padcom/flat/typescript',
    files: ['**/*.[t, mt]s', '**/*.tsx', '**/*.vue'],
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        'minimumDescriptionLength': 3,
      }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-shadow': 'error',
    },
  },
]
