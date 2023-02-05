module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@padcom/typescript',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/block-lang': ['error', {
      script: { lang: 'ts' },
      style: { lang: 'postcss' },
    }],
    'vue/block-tag-newline': 'off',
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/first-attribute-linebreak': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-indent': ['error', 2, {
      alignAttributesVertically: false,
    }],
    'vue/match-component-file-name': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/order-in-components': 'error',
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: true,
    }],
    // TODO: Rain check once the rule understands sub-elements modification
    'vue/no-mutating-props': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-setup-props-destructure': 'error',
    'vue/no-static-inline-styles': ['error', {
      allowBinding: true,
    }],
    'vue/no-useless-mustaches': ['error', {
      ignoreIncludesComment: true,
      ignoreStringEscape: true,
    }],
    'vue/singleline-html-element-content-newline': 'off',
  },
}
