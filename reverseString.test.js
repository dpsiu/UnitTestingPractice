const reverseString = require('./reverseString');

test('Reverses string', () => {
  expect(reverseString('hello')).toBe('olleh');
});