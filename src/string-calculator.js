"use strict";
class Calculator {
  constructor() {
    this.defaultValue = 0;
  }
  isEmpty(input) {
    return !input;
  }
  add(input) {
    if(this.isEmpty(input)) {
      return this.defaultValue;
    }
    return 1;
  }
}
module.exports = Calculator;
