'use strict';

const solution = require('../prompts/string_compression.js'),
    assert = require ('chai').assert;

describe('Strings', () => {
  describe('stringCompression', () => {

    it('should replace repeated characters with letter counts', () => {
      assert.equal(solution.stringCompression('aabcccccaaa'), 'a2b1c5a3');
      assert.equal(solution.stringCompression('bbbccfffd'), 'b3c2f3d1');
    });

    it('should not have the compression exceed the length of the original string', () => {
      assert.equal(solution.stringCompression('abc'), 'abc');
      assert.equal(solution.stringCompression('aabccd'), 'aabccd');
      assert.equal(solution.stringCompression('aaa'), 'a3');
      assert.equal(solution.stringCompression('aa'), 'aa');
      assert.equal(solution.stringCompression('a'), 'a');
    });

  });
});
