'use strict';

var test = require('tape');
var add = require('./index.js').add;
var add2 = require('./index.js').add2;

// write your tests here

//add() assert 2 positive number
test('add: assert the sum of 2 positive numbers are correct', function(assert){
  const expected = 0.5+3;
  const actual = add(0.5, 3);
  assert.equal(actual, expected, `the sum returned should be ${expected}`);
  assert.end();
});

//add() assert 2 negative decimal
test('add: assert the sum of 2 negative numbers are correct', function(assert){
  const expected = -1000000.5 + -30000000.6;
  const actual = add(-1000000.5 , -30000000.6);
  assert.equal(actual, expected, `the sum returned should be ${expected}`);
  assert.end();
});

//add2(): assert zero is produced correctly
test('add2: assert the sum of 2 and -2', function(assert){
  const expected = 2 + -2;
  const actual = add2(-2);
  assert.equal(actual, expected, `the sum returned should be ${expected}`);
  assert.end();
});

//add2(): assert sum of 2 and a positive number
test('add2: assert the sum of 2 and a positive number', function(assert){
  const expected = 2 + 0.168;
  const actual = add2(0.168);
  assert.equal(actual, expected, `the sum returned should be ${expected}`);
  assert.end();
});