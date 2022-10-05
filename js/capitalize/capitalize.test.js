const capitalize = require('./capitalize');

test('Capitalize string', () => {
  expect(capitalize('adnan')).toBe('Adnan');
});