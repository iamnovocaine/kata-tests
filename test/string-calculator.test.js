"use strict";
let assert = require('chai').assert;

let Calculator = require('../src/string-calculator');

describe ('string calculator', function() {
  it('should return 0 if input is empty', function() {
    let calculator = new Calculator();
    let sum = calculator.add('');
    assert.equal(sum, 0);
  });
});
