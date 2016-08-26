'use strict';

const solution = require('../prompts/every.js');
const assert = require ('chai').assert;

describe('Arrays', () => {
  describe('every', () => {

    it('knows when every element in an array passes a truth test', () => {
      assert.equal(solution.every([1,2,3,4,4,5], element => {
        return typeof element === 'number';
      }), true);
    });

    it('knows when not every element in an array passes a truth test', () => {
      assert.equal(solution.every([1,2,3,4,'hello!'], element => {
        return typeof element === 'number';
      }), false);
    });

  });
});
