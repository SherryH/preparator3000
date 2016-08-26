'use strict'

const solution = require('../prompts/flatten.js');
const assert = require ('chai').assert;

describe('Arrays', () => {
	describe('flatten', () => {
	  
	  it('flattens every subarray within an array', () => {
	    assert.deepEqual(solution.flatten([1,2,[3,4,[5,6,7],8],9]), [1,2,3,4,5,6,7,8,9]);
	  });
	  
	});
});
