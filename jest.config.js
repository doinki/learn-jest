/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
