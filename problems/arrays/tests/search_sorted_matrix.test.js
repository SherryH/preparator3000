'use strict';

const solution = require('../prompts/search_sorted_matrix.js');
const assert = require ('chai').assert;

describe('Arrays', () => {
  describe('Search Sorted Matrix', () => {

    it('can return the correct index of the inputted number', () => {
      assert.deepEqual(solution.searchSortedMatrix([
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ], 8), [2,1]);
    });  

    it('can return the null if the inputted number is not in the matrix', () => {
      assert.deepEqual(solution.searchSortedMatrix([
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ], 22), null);
    });  
  });
});