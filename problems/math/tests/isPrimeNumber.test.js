'use strict';

const solution = require('../prompts/isPrimeNumber.js'),
      assert = require('chai').assert;

describe('Math', () => {
  describe('isPrimeNumber', () => {
    
    it('detects a prime number', () => {
      assert.equal(solution.isPrimeNumber(97), true);
      assert.equal(solution.isPrimeNumber(2), true);
      assert.equal(solution.isPrimeNumber(7), true);
    });

    it('detects not a prime number', () => {
      assert.equal(solution.isPrimeNumber(4), false);
      assert.equal(solution.isPrimeNumber(22), false);
      assert.equal(solution.isPrimeNumber(51), false);
    });

  });
});
