const calculator = require('./calculator');

describe('Calculator', () => {
  test('Add numbers', () => {
    expect(calculator.add(2, 5)).toBe('Your answer is: 7');
  });

  test('Subtract numbers', () => {
    expect(calculator.subtract(2, 5)).toBe('Your answer is: -3');
  });

  test('Divide numbers', () => {
    expect(calculator.divide(2, 5)).toBe('Your answer is: 0.4');
  });

  test('Multiply numbers', () => {
    expect(calculator.multiply(2, 5)).toBe('Your answer is: 10');
  });
});
