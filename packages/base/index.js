module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'promise',
    'regexp',
    'eslint-comments',
    '@stylistic/js',
    // Disabled because it's dependency collides with Node 20.x
    // 'jsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
  ],
  overrides: [{
    'files': ['**/*.test.*'],
    'rules': {
      // Tests have a structure where the 2nd-level callback is the body of the test
      // Therefore, to be able to use any kind of callback in the test it needs to
      // be increased by one
      'max-nested-callbacks': ['error', 4],
    },
  }],
  rules: {
    // Default rules
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    '@stylistic/js/arrow-parens': ['error', 'as-needed'],
    '@stylistic/js/arrow-spacing': 'error',
    '@stylistic/js/block-spacing': ['error', 'always'],
    '@stylistic/js/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/js/comma-spacing': 'error',
    '@stylistic/js/comma-style': ['error', 'last'],
    'complexity': ['error', 4],
    '@stylistic/js/computed-property-spacing': 'error',
    'consistent-return': 'error',
    'curly': ['error', 'multi-line'],
    '@stylistic/js/dot-location': ['error', 'property'],
    'dot-notation': 'error',
    '@stylistic/js/eol-last': 'error',
    'eqeqeq': ['error', 'always', {
      null: 'ignore',
    }],
    '@stylistic/js/func-call-spacing': 'error',
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true,
    }],
    '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/js/function-paren-newline': ['error', 'consistent'],
    '@stylistic/js/generator-star-spacing': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    '@stylistic/js/implicit-arrow-linebreak': 'error',
    '@stylistic/js/indent': ['error', 2, {
      SwitchCase: 1,
    }],
    '@stylistic/js/key-spacing': 'error',
    '@stylistic/js/keyword-spacing': 'error',
    '@stylistic/js/lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    // TODO: Rain check
    // 'linebreak-style': ['error', 'unix'],
    // TODO: Rain check
    'line-comment-position': 'off',
    // TODO: Rain check
    // 'lines-around-comment': ['error', { beforeLineComment: true }],
    'max-depth': ['error', 2],
    '@stylistic/js/max-len': ['error', 130],
    'max-lines-per-function': ['error', 32],
    'max-nested-callbacks': ['error', 2],
    'max-params': ['error', 4],
    'new-cap': 'error',
    '@stylistic/js/new-parens': 'error',
    '@stylistic/js/multiline-ternary': ['error', 'always-multiline'],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-caller': 'error',
    // TODO: Rain check
    '@stylistic/js/no-confusing-arrow': 'off',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': ['off'],
    'no-constructor-return': 'error',
    'no-else-return': 'off',
    '@stylistic/js/no-extra-parens': 'error',
    // TODO: Rain check
    'no-eq-null': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    '@stylistic/js/no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    '@stylistic/js/no-mixed-operators': 'error',
    '@stylistic/js/no-multi-spaces': 'error',
    '@stylistic/js/no-multiple-empty-lines': ['error', {
      max: 1,
    }],
    'no-new': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-object-constructor': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'off',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    // TODO: Rain check
    'no-restricted-exports': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    '@stylistic/js/no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    '@stylistic/js/no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-expressions': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    '@stylistic/js/no-whitespace-before-property': 'error',
    '@stylistic/js/nonblock-statement-body-position': ['error', 'any'],
    '@stylistic/js/object-curly-newline': ['error', { consistent: true, multiline: true }],
    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    '@stylistic/js/object-property-newline': 'off',
    'object-shorthand': 'error',
    'operator-assignment': ['error', 'always'],
    '@stylistic/js/operator-linebreak': ['error', 'before'],
    '@stylistic/js/padded-blocks': ['error', 'never'],
    '@stylistic/js/padding-line-between-statements': ['error',
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: ['return', 'while', 'if', 'for', 'block-like'] },
      { blankLine: 'any', prev: ['const', 'let', 'if'], next: ['while', 'if', 'for', 'block-like'] },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'any', prev: 'import', next: 'import' },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'warn',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': ['error', {
      'allowEmptyReject': true,
    }],
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    '@stylistic/js/quotes': ['error', 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true,
    }],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    '@stylistic/js/rest-spread-spacing': 'error',
    '@stylistic/js/semi': ['error', 'never'],
    '@stylistic/js/semi-spacing': 'error',
    'sort-imports': 'off',
    '@stylistic/js/space-before-blocks': ['error', 'always'],
    '@stylistic/js/space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    '@stylistic/js/space-in-parens': 'error',
    '@stylistic/js/space-infix-ops': 'error',
    '@stylistic/js/space-unary-ops': 'error',
    '@stylistic/js/switch-colon-spacing': 'error',
    'symbol-description': 'error',
    '@stylistic/js/template-curly-spacing': ['error', 'never'],
    '@stylistic/js/template-tag-spacing': ['error', 'never'],
    '@stylistic/js/wrap-iife': 'error',
    '@stylistic/js/yield-star-spacing': 'error',
    'yoda': 'error',

    // JSDoc
    /*
    'jsdoc/check-alignment': 'error',
    // TODO: Rain check
    'jsdoc/check-examples': 'off',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    // TODO: Rain check
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/multiline-blocks': ['error', {
      noSingleLineBlocks: true,
      // singleLineTags: ['someOtherTag'],
    }],
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-bad-blocks': 'error',
    // 'jsdoc/no-types': 'error',
    'jsdoc/no-defaults': 'error',
    // 'jsdoc/no-missing-syntax': 'error',
    'jsdoc/no-multi-asterisks': 'error',
    // 'jsdoc/no-restricted-syntax': 'error',
    // TODO: Rain check
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-asterisk-prefix': 'error',
    // TODO: Rain check
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-yields': 'error',
    'jsdoc/sort-tags': 'error',
    'jsdoc/tag-lines': 'error',
    // TODO: Rain check
    'jsdoc/valid-types': 'error',
    */

    // eslint-plugin-promise
    'promise/always-return': 'off',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/no-multiple-resolved': 'error',
    'promise/no-nesting': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',

    // eslint-plugin-regexp

    // eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': 'off',
  },
}
