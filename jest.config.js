module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  testEnvironment: 'node',
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  moduleNameMapper: {
    '^@config/(.*)$': '/node/config/$1',
    '^@mock/(.*)$': '/node/mock/$1',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: '<rootDir>/node/configs/tsconfig.jest.json',
      diagnostics: true,
      autoMapModuleNames: true,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
