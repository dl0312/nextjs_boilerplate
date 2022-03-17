module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['next', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',

    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'no-continue': 'off',
    'no-shadow': 'off',
    'array-callback-return': 'off',
    'no-case-declarations': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'guard-for-in': 'off',
    'no-redeclare': 'off',
    'max-classes-per-file': 'off',
    'prefer-destructuring': 'warn',
    'no-nested-ternary': 'off',

    'react/display-name': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-no-target-blank': 'off',

    '@next/next/no-html-link-for-pages': 'off',

    'import/no-default-export': 'off',
    'import/prefer-default-export': 'warn',
    'import/no-cycle': 'off',
    'import/export': 'off',
    'import/no-named-as-default': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],

    '@typescript-eslint/triple-slash-reference': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-redeclare': 'warn',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'parameter',
        format: ['strictCamelCase'], // Change if you want to.
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'packages/*/tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['*.test.tsx', '*.test.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: [
        '**/config/**/*.{ts,tsx}',
        '**/test/**/*.{ts,tsx}',
        '**/*.{test,spec}.{ts,tsx}',
        '**/scripts/**/*.{ts,tsx}',
        '**/jest.config.js',
        '**/jest.config.e2e.js',
        '**/next.config.js',
        '**/webpack.config.js',
        '**/__tests__/**/*.{ts,tsx}',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            packageDir: ['./packages/client/', './'],
          },
        ],
      },
    },
  ],
}
