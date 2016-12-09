'use strict';

const solution = require('../prompts/search'), 
      assert = require('chai').assert,
      sinon = require('sinon');

describe('sortAndSearch', () => {
  describe('Iterative Search', () => {

    it ('should find an element in an array and return its index', () => {
      const nums = [1,2,3,4,5,6,7,8,9,10];
      assert.deepEqual(solution.searchIterative(nums, 0), -1);
      assert.deepEqual(solution.searchIterative(nums, 1), 0);
      assert.deepEqual(solution.searchIterative(nums, 2), 1);
      assert.deepEqual(solution.searchIterative(nums, 3), 2);
    });

    it('should return -1 for empty arrays', () => {
      assert.deepEqual(solution.searchIterative([]), -1);
    });
    
    it('should not be recursive', () => {
      const spy = sinon.spy(solution.searchIterative);
      const nums = [1,6,4,2,7,0];
      spy(nums);
      assert.isTrue(spy.calledOnce);
    });
  });
  describe('Recursive Search', () => {
    it ('should find an element in an array and return its index', () => {
      const nums = [1,2,3,4,5,6,7,8,9,10];
      assert.deepEqual(solution.searchRecursive(nums, 0), -1);
      assert.deepEqual(solution.searchRecursive(nums, 1), 0);
      assert.deepEqual(solution.searchRecursive(nums, 2), 1);
      assert.deepEqual(solution.searchRecursive(nums, 3), 2);
    });

    it('should return -1 for empty arrays', () => {
      assert.deepEqual(solution.searchRecursive([], 1), -1);
    });

  });
});
