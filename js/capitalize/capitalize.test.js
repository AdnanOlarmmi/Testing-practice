const capitalize = require('./capitalize');

test('Capitalize string', () => {
  expect(capitalize('adnan')).toBe('Adnan');
});

test('String should be a word', () => {
  expect(() => {
    capitalize(3);
  }).toThrow('Input a string, i.e word');
});