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
  add(input) {
    if(this.isEmpty(input)) {
      return this.defaultValue;
    }
    return this.parseSingleNumber(input);
  }
}
module.exports = Calculator;
