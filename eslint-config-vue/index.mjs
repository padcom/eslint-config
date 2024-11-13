import javascript from '@padcom/eslint-config-javascript'
import typescript from '@padcom/eslint-config-typescript'
import vueEslintPlugin from 'eslint-plugin-vue'
import vueTypescriptEslintConfig from '@vue/eslint-config-typescript'

/** @type {import('eslint').Linter.Config[]} */
export const vue = [
  ...vueEslintPlugin.configs['flat/essential'],
  ...vueTypescriptEslintConfig({ extends: ['recommendedTypeChecked'] }),
  {
    name: 'padcom/flat/vue',
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.vue'],
    rules: {
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/block-lang': ['error', {
        script: { lang: 'ts' },
        style: { lang: 'postcss' },
      }],
      'vue/block-tag-newline': 'off',
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/first-attribute-linebreak': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': ['error', 2, {
        alignAttributesVertically: false,
      }],
      'vue/html-self-closing': 'off',
      'vue/match-component-file-name': 'error',
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-spaces-around-equal-signs-in-attribute': 'error',
      'vue/order-in-components': 'error',
      'vue/no-multi-spaces': ['error', {
        ignoreProperties: true,
      }],
      'vue/no-mutating-props': ['error', {
        shallowOnly: true,
      }],
      'vue/no-reserved-component-names': 'off',
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/no-static-inline-styles': ['error', {
        allowBinding: true,
      }],
      'vue/no-useless-mustaches': ['error', {
        ignoreIncludesComment: true,
        ignoreStringEscape: true,
      }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/padding-line-between-blocks': 'error',
    },
  },
]

export default {
  'flat/browser': [
    ...javascript['flat/browser'],
    ...vue,
    ...typescript.typescript,
  ],
}
