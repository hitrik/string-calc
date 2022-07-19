const Input = require('./Input.js');

class Calculator {
  input;
  start() {
    this.input = new Input(this.answer.bind(this));
    this.input.question();
  }
  answer(userInput) {
    try {
      const [a, operation, b] = this.input.parse(userInput);
      const operationMethod = this.input.getOperation(operation);
      console.log(a, b, operationMethod(a, b));
      const result = operationMethod(a, b);
      console.log('Ответ: ', this.input.createQuoteString(result));
    } catch (error) {
      console.error('Error: ', error.message);
      process.exit(1);
    }
  }
}

module.exports = Calculator;
