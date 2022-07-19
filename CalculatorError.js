class CalculatorError {
  // знак # значит приватное поле (private)
  #messages = {
    ERROR_ARGUMENT_TYPE: 'Неправильный тип аргумента',
    ERROR_USER_INPUT: 'Некорректный ввод данных',
    ERROR_INCORRECT_OP: 'Такая операция невозможна',
    ERROR_NEED_QUOTE_STRING: 'Первым аргументом должна быть строка',
    ERROR_NUMBER_RANGE: 'Числа должны быть в диапазоне 0-10',
    ERROR_STRING_LENGTH: 'Строки на вход не более 10 символов',
    ERROR_MANY_OPS: 'ОНа вход допустима только одна операция',
  };
  // message: string
  #createError(message) {
    throw new Error(message);
  }
  errorType() {
    this.#createError(this.#messages.ERROR_ARGUMENT_TYPE);
  }
  errorInput() {
    this.#createError(this.#messages.ERROR_USER_INPUT);
  }
  errorBadOperation() {
    this.#createError(this.#messages.ERROR_INCORRECT_OP);
  }
  errorBadString() {
    this.#createError(this.#messages.ERROR_NEED_QUOTE_STRING);
  }
  errorNumberRange() {
    this.#createError(this.#messages.ERROR_NUMBER_RANGE);
  }
  errorStringRange() {
    this.#createError(this.#messages.ERROR_STRING_LENGTH);
  }
  errorManyOps() {
    this.#createError(this.#messages.ERROR_MANY_OPS);
  }
}

module.exports = CalculatorError;
