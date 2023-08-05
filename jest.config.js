module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.less$': 'jest-transform-stub',
  },
  testEnvironment: 'jsdom',
};