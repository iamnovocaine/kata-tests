"use strict";
class Calculator {
  constructor() {
    this.defaultValue = 0;
  }
  isEmpty(input) {
    return !input;
  }
  parseSingleNumber(input) {
    return parseInt(input, 10);
  }
  isSingleNumber(input) {
    return input.indexOf(',') === -1;
  }
  parseMultipleNumbers(input) {
    var numbers = input.split(',');
    return numbers.reduce((a,b) =>
    this.parseSingleNumber(a) + this.parseSingleNumber(b));
  }
  add(input) {
    if(this.isEmpty(input)) {
      return this.defaultValue;
    }
    if(this.isSingleNumber(input)) {
      return this.parseSingleNumber(input);
    }
    return this.parseMultipleNumbers(input);

  }
}
module.exports = Calculator;
