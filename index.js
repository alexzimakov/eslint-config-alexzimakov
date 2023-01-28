module.exports = {
  rules: {
    //--------------------------------------------------------
    // Possible Problems
    // https://eslint.org/docs/latest/rules/#possible-problems
    //--------------------------------------------------------
    'array-callback-return': 'error',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'warn',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    // 'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'off',
    'no-this-before-super': 'error',
    'no-undef': ['error', { typeof: false }],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'warn',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      allowNamedExports: true,
    }],
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    //--------------------------------------------------
    // Suggestions
    // https://eslint.org/docs/latest/rules/#suggestions
    //--------------------------------------------------
    'accessor-pairs': ['error', { setWithoutGet: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'error',
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'complexity': 'off',
    'consistent-return': 'off',
    'consistent-this': 'error',
    'curly': 'error',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'logical-assignment-operators': 'off',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 5],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 'error',
    'no-alert': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    'no-continue': 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    // 'no-empty-static-block': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', {
      allowLoop: true,
      allowSwitch: true,
    }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    }],
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'radix': 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['/'],
      },
    }],
    'strict': 'off',
    'symbol-description': 'error',
    'vars-on-top': 'error',
    'yoda': 'error',

    //---------------------------------------------------------
    // Layout & Formatting
    // https://eslint.org/docs/latest/rules/#layout--formatting
    //---------------------------------------------------------
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],
    'computed-property-spacing': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'generator-star-spacing': ['error', {
      before: false,
      after: true,
    }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 'first',
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      StaticBlock: { body: 1 },
      CallExpression: { arguments: 'first' },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      offsetTernaryExpressions: false,
      ignoreComments: false,
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignorePattern: '(="([^"]*)")|(^import .*)',
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-ternary': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'no-extra-parens': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 0,
      maxBOF: 0,
    }],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '=': 'none',
      },
    }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': ['error', {
      before: false,
      after: true,
    }],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'inside'],
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', {
      before: false,
      after: true,
    }],
  }
};
