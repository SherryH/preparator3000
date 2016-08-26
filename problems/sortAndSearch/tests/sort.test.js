'use strict';

const solution = require('../prompts/sort'),
      assert = require('chai').assert,
      sinon = require('sinon');

const randomArray = (n, arr) => {
  arr = arr || [];
  if (n === 0) {
    return arr
  }
  const newElement = Math.floor(Math.random() * 1000);
  return randomArray(n - 1, arr.concat(newElement));
}

describe('sortAndSearch', () => {
  describe('Sort', () => {

    it ('should leave a sorted array of numbers unchanged', () => {
      const nums = [1,2,3,4,5];
      const originalNums = nums.slice();
      assert.deepEqual(solution.sort(nums), originalNums);
    });

    it('should sort any unsorted array of integers', () => {
      for (let i = 0; i < 100; i++) {
        const array = randomArray(10);
        const sortedArray = array.slice().sort((a, b) => a - b);
        assert.deepEqual(solution.sort(array), sortedArray);
      }
    });

    it('should gracefully handle arays of duplicates', function() {
      const array = [1,1,1,1,1,1];
      const originalArray = array.slice();
      assert.deepEqual(solution.sort(array), originalArray);
    });

    it('should do nothing to an empty array', function() {
      assert.deepEqual(solution.sort([]), []);
    });
    
    it('should not use the native Array.prototype.sort method', function() {
      const spy = sinon.spy(Array.prototype, 'sort');   
      const nums = [1,6,4,2,7,0];
      solution.sort(nums);
      assert.isFalse(spy.called);
      Array.prototype.sort.restore();
    });

  });
});
