class Calculator {
  constructor() {
    this.phrase = 'Your answer is:';
  }

  add(a, b) {
    // your code here
    return `${this.phrase} ${a + b}`;
  }

  subtract(a, b) {
    // your code here
    return `${this.phrase} ${a - b}`;
  }

  divide(a, b) {
    // your code here
    return `${this.phrase} ${a / b}`;
  }

  multiply(a, b) {
    return `${this.phrase} ${a * b}`;
  }
}

const calculator = new Calculator();

module.exports = calculator;