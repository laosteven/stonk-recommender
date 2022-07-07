module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: [
        '**/?(*.)+(spec|test).js',
    ],
    collectCoverageFrom: [
        'src/components/**/*.js',
        '!src/**/index.js',
        '!src/**/*.spec.js',
        '!src/assets/**/*.spec.js',
    ],
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60,
        },
    },
};
