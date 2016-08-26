'use strict';

const solution = require('../prompts/isPalindrome.js'),
    assert = require('chai').assert;

describe('Strings', () => {
  describe('isPalindrome',  () => {

    it('should determine if the string is a palindrome',  () => {
      assert.equal(solution.isPalindrome('stackcats'), true);
    });

    it('should determine if the string is not a palindrome',  () => {
      assert.equal(solution.isPalindrome('trolololol'), false);
    });

  });
});
