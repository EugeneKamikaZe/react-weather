module.exports = {
    ignorePatterns: ['node_modules', 'Old', 'reports'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:cypress/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:prettier/recommended',
        'airbnb',
        'prettier',
    ],
    plugins: [
        'react',
        'simple-import-sort',
        'unused-imports',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'ulbi-tv-plugin',
        'prettier',
    ],
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
            },
        ],
        'import/no-cycle': 'error',
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'import/no-unresolved': 'error',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': [
            'warn',
            { devDependencies: true },
        ],
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'warn',
        'no-undef': 'warn',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'warn',
        'max-len': ['error', { ignoreComments: true, code: 150 }],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'data-testid',
                    'to',
                    'target',
                    'rel',
                    'placement',
                    'justify',
                    'align',
                    'border',
                    'direction',
                    'gap',
                    'feature',
                    'color',
                    'variant',
                    'size',
                    'wrap',
                    'title',
                    'name',
                    'control',
                    'value',
                    'tPrefix',
                ],
            },
        ],
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/no-static-element-interactions': 'warn',
        'jsx-a11y/click-events-have-key-events': 'warn',
        'jsx-a11y/tabindex-no-positive': 'warn',
        'react-hooks/rules-of-hooks': 'error', //  Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', //  Checks effect dependencies,
        'ulbi-tv-plugin/path-checker': [
            'error',
            {
                alias: '~',
            },
        ],
        'ulbi-tv-plugin/layer-imports': [
            'error',
            {
                alias: '~',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'ulbi-tv-plugin/public-api-imports': [
            'error',
            {
                alias: '~',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/no-unstable-nested-components': 'warn',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __API_KEY__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
        {
            files: ['*.tsx'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
};
