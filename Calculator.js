const Input = require('./Input.js');

class Calculator {
  input;
  start() {
    this.input = new Input(this.answer);
    this.input.question();
  }
  answer(userInput) {
    try {
      const [a, operation, b] = this.input.parse(userInput);
      const operationMethod = this.input.getOperation(operation);
      return operationMethod(a, b);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}

module.exports = Calculator;
