'use strict';

const solution = require('../prompts/max_product.js'),
      assert = require ('chai').assert;

describe('Math', () => {
  describe('maxProduct', () => {

    it('finds the largest product of 6', () => {
      assert.equal(solution.maxProduct(6), 9);
    });

    it('finds the largest product of 9', () => {
      assert.equal(solution.maxProduct(9), 27);
    });

    it('finds the largest product of 20', () => {
      assert.equal(solution.maxProduct(20), 1458);
    });

    it('finds the largest product of 100', () => {
      assert.equal(solution.maxProduct(100), 7412080755407364);
    });

  });
});
