const jestConfig = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'v8',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    testMatch: ['**/tests/**/index.spec.ts'],
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};

export default jestConfig;
