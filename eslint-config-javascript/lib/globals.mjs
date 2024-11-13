import globalDefinitions from 'globals'

/** @type {import('eslint').Linter.Config} */
const browser = {
  name: 'padcom/flat/browser-globals',
  languageOptions: {
    globals: {
      ...globalDefinitions.browser,
    },
  },
}

/** @type {import('eslint').Linter.Config} */
const node = {
  name: 'padcom/flat/node-globals',
  languageOptions: {
    globals: {
      ...globalDefinitions.node,
    },
  },
}

export const globals = {
  'globals/browser': [browser],
  'globals/node': [node],
}
