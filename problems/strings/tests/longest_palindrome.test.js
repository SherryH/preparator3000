'use strict';

const solution = require('../prompts/longest_palindrome.js'),
    assert = require ('chai').assert;

describe('Strings', () => {
	describe('longestPalindrome', () => {

	  it('finds the longest palindrome', () => {
	    assert.equal(solution.longestPalindrome('lol stackcats'), 'stackcats');
      assert.equal(solution.longestPalindrome('avid diva'), 'avid diva');
	  });

  });
});
