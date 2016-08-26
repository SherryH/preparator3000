'use strict';

const solution = require('../prompts/string_permutation.js'),
    assert = require ('chai').assert;

describe('Strings', () => {
	describe('stringPermutation', () => {

	  it('should identify two strings that are permutations of each other', () => {
	    assert.equal(solution.stringPermutation('derp', 'repd'), true);
      assert.equal(solution.stringPermutation('OVO', 'VOO'), true);
	  });

	  it('should not identify two strings that are not permutations of each other', () => {
	    assert.equal(solution.stringPermutation('rawr', 'rawl'), false);
      assert.equal(solution.stringPermutation('wat', 'what'), false);
	  });

	});
});
