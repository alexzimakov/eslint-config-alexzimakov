module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['@stylistic'],
  rules: {
    //--------------------------------------------------------
    // Possible Problems
    // https://eslint.org/docs/latest/rules/#possible-problems
    //--------------------------------------------------------
    'array-callback-return': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-constant-binary-expression': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-constructor-return': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-fallthrough': ['error', { allowEmptyCase: false }],
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: true,
        skipJSXText: false,
      },
    ],
    'no-new-native-nonconstructor': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'warn',
    'no-undef': ['error', { typeof: false }],
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'warn',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        allowNamedExports: true,
      },
    ],

    //--------------------------------------------------
    // Suggestions
    // https://eslint.org/docs/latest/rules/#suggestions
    //--------------------------------------------------
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],
    'block-scoped-var': 'error',
    curly: ['error', 'all'],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'guard-for-in': 'error',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],
    'no-array-constructor': 'error',
    'no-empty-function': [
      'error',
      {
        allow: ['functions', 'arrowFunctions'],
      },
    ],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-object-constructor': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-undefined': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: false,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    radix: 'error',
    'require-await': 'warn',
    'require-unicode-regexp': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    yoda: ['warn', 'never'],

    //---------------------------------------------------------
    // Layout & Formatting
    // https://eslint.org/docs/latest/rules/#layout--formatting
    //---------------------------------------------------------
    'unicode-bom': ['error', 'never'],

    //---------------------------
    // ESLint Stylistic
    // https://eslint.style/rules
    //---------------------------
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
    '@stylistic/generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    '@stylistic/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        StaticBlock: { body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
      },
    ],
    '@stylistic/indent-binary-ops': ['error', 2],
    '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    '@stylistic/jsx-closing-tag-location': 'error',
    '@stylistic/jsx-curly-brace-presence': ['error', 'never'],
    '@stylistic/jsx-curly-newline': ['error', 'consistent'],
    '@stylistic/jsx-curly-spacing': ['error', { when: 'never' }],
    '@stylistic/jsx-equals-spacing': ['error', 'never'],
    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
    '@stylistic/jsx-indent': ['error', 2],
    '@stylistic/jsx-indent-props': ['error', 2],
    '@stylistic/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    '@stylistic/jsx-props-no-multi-spaces': 'error',
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/jsx-self-closing-comp': 'error',
    '@stylistic/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    '@stylistic/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    '@stylistic/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    '@stylistic/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import .*',
      },
    ],
    '@stylistic/max-statements-per-line': ['error', { max: 1 }],
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    '@stylistic/new-parens': ['error', 'always'],
    '@stylistic/newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],
    '@stylistic/no-confusing-arrow': 'error',
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
    '@stylistic/object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none',
        },
      },
    ],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-spacing': ['error', { before: false, after: true }],
    '@stylistic/semi-style': ['error', 'last'],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/template-curly-spacing': ['error', 'never'],
    '@stylistic/template-tag-spacing': ['error', 'never'],
    '@stylistic/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
    '@stylistic/wrap-iife': ['error', 'inside'],
    '@stylistic/yield-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
  },
};
