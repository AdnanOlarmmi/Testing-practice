const getStringLength = require('./length');

test('Returns the length of a string', () => {
  expect(getStringLength('Adnan')).toBe(5);
});
test('String should be at least 1 character long and not longer than 10 characters.', () => {
  expect(() => {
    getStringLength('olamilekan ayinde');
  }).toThrow('try again');
});
test('String should be at least 1 character long and not longer than 10 characters.', () => {
  expect(() => {
    getStringLength('');
  }).toThrow('try again');
});