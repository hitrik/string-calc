const CalculatorError = require('./CalculatorError.js');
const Operations = require('./Operations.js');
const rl = require('readline');

class UserInput extends CalculatorError {
  readline;
  answer;
  operations;
  constructor(answer) {
    super();
    this.answer = answer;
    this.operations = new Operations();
  }

  question() {
    try {
      this.readline = rl.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      this.readline.question(
        ['Добро пожаловать в строковый калькулятор!\n', 'Введите строки для вычисления:\n'].join(''),
        this.answer
      );
    } catch (error) {
      console.log('Error of readline', error);
    }
  }

  parse(input) {
    const operatorsRegex = /[\/\*-\+]/g;
    const operationList = input.trim().match(operatorsRegex) || [];
    const operation = operationList[0];
    const [a, b] = input.split(operation).map(inp => String.prototype.trim.call(inp));
    this.validateInput(a, operationList, b);
    return [a, operation, b];
  }

  isQuoteString(s) {
    return /".*"/g.exec(s);
  }

  createQuoteString(str) {
    return `"${str.trim().replaceAll(`"`, '')}"`;
  }

  getOperation(op) {
    switch (op) {
      case '+':
        return this.operations.add;
      case '-':
        return this.operations.substraction;
      case '/':
        return this.operations.division;
      case '*':
        return this.operations.multiplication;
      default:
        this.errorBadOperation();
    }
  }

  validateInput(a, ops, b) {
    const maxLengthOfString = 10;

    if (!Array.isArray(ops)) {
      this.errorInput();
    }

    if (ops.length > 1) {
      // больше одного арифметич. оператора
      this.errorManyOps();
    }

    if (!this.isQuoteString(a)) {
      // первым аргументом должна быть строка
      this.errorBadString();
    }

    if (a.length > maxLengthOfString) {
      // строка на вход не более 10 символов
      this.errorStringRange();
    }

    if (typeof b === 'number' && b > 10) {
      // числа должны быть в диапазоне 0-10
      this.errorNumberRange();
    }
  }
}

module.exports = UserInput;
