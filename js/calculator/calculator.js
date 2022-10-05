class Calculator {
  constructor() {
    this.phrase = 'Your answer is:';
  }

  add(a, b) {
    if (!a || !b) {
      throw new Error('Input something.');
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input a number, not a string.');
    }
    return `${this.phrase} ${a + b}`;
  }

  subtract(a, b) {
    if (!a || !b) {
      throw new Error('Input something.');
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input a number, not a string.');
    }
    return `${this.phrase} ${a - b}`;
  }

  divide(a, b) {
    if (a === 0 || b === 0) {
      throw new Error('Do not use zero.');
    } else if (!a || !b) {
      throw new Error('Input something.');
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input a number, not a string.');
    }
    return `${this.phrase} ${a / b}`;
  }

  multiply(a, b) {
    if (a === 0 || b === 0) {
      throw new Error('Any multiplication with zero is obviously zero.');
    } else if (!a || !b) {
      throw new Error('Input something.');
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input a number, not a string.');
    }
    return `${this.phrase} ${a * b}`;
  }
}

const calculator = new Calculator();

module.exports = calculator;