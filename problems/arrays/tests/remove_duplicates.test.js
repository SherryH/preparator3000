'use strict';

const solution = require('../prompts/remove_duplicates.js');
const assert = require ('chai').assert;

describe('Arrays', () => {
  describe('remove duplicates', () => {
    
    it('should return an array with duplicates removed', () => {
      assert.deepEqual(solution.removeDuplicates([1,2,3,3,4,5,6,6,7,8,9,9]), [1,2,3,4,5,6,7,8,9]);
    });

  });
});
