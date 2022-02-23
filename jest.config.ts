const jestConfig = {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'v8',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    testMatch: ['**/__tests__/**/index.spec.ts'],
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};

export default jestConfig;
