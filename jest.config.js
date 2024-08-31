module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.tsx?$',
  };