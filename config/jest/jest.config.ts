/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https:// jestjs.io/docs/configuration
 */
// @ts-ignore
import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest',
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules'],
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    modulePaths: ['<rootdir>src'],
    collectCoverage: true,
    coverageDirectory: 'reports/unit/coverage',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
        'index.js',
        'index.jsx',
        'index.ts',
        'testing.ts',
        '.*stories*.',
        'src/shared/config/storybook/',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^~/(.*)$': '<rootDir>/src/$1',
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '<rootDir>/reports/unit',
                filename: 'report.html',
                // openReport: true,
                inlineSource: true,
            },
        ],
    ],
};
