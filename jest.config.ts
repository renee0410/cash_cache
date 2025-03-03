export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  reporters: [
    'default',
    [
      'jest-stare',
      {
        resultDir: 'jest-stare',
        reportTitle: '測試結果報表',
        coverageLink: './coverage/lcov-report/index.html',
      },
    ],
  ],
};
