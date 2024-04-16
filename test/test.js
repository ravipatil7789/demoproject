const utils = require('../src/utils');

test('capitalize function', () => {
  expect(utils.capitalize('hello')).toBe('Hello');
});
