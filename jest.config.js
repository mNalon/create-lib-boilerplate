module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.ts',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/src/**/*.test.ts',
  ],
  verbose: true,
};
