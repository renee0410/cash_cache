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
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.tsx',
    '!src/**/index.ts', // 忽略 index.ts 之類的組合文件
    '!src/**/*.d.ts', // 忽略 TypeScript 定義檔
    '!src/**/node_modules/**', // 忽略 node_modules
  ],
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
