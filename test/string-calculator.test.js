"use strict";
let assert = require('chai').assert;

let Calculator = require('../src/string-calculator');
function createCalculator () {
  return new Calculator();
}
describe ('string calculator', function() {
  it('should return 0 if input is empty', function() {
    let calculator = createCalculator();
    let sum = calculator.add('');
    assert.equal(sum, 0);
  });

  it('should return 1 if input is 1', function() {
    let calculator = createCalculator();
    let sum = calculator.add('1');
    assert.equal(sum, 1);
  });
});
