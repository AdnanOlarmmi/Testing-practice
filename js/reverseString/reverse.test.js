const reverseString = require('./reverse');

test('Reverse string', () => {
  expect(reverseString('adnan')).toBe('nanda');
});

test('String should be a word', () => {
  expect(() => {
    reverseString(3);
  }).toThrow('Input a string, i.e word');
});