"use strict";
let assert = require('chai').assert;

let Calculator = require('../src/string-calculator');
function createCalculator () {
  return new Calculator();
}
describe ('string calculator', function() {
  it('should return defaultValue if input is empty', function() {
    let calculator = createCalculator();
    let sum = calculator.add('');
    assert.equal(sum, 0);
  });

  it('should return 1 if input is 1', function() {
    let calculator = createCalculator();
    let sum = calculator.add('1');
    assert.equal(sum, 1);
  });

  it('should return single number if input is that number', function() {
    let calculator = createCalculator();
    let sum = calculator.add('2');
    assert.equal(sum, 2);
  });

  it('should return sum of two comma separated value', function() {
    let calculator = createCalculator();
    let sum = calculator.add('1,2');
    assert.equal(sum, 1 + 2);
  });
});
