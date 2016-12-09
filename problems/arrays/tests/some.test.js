'use strict';

const solution = require('../prompts/some.js');
const assert = require ('chai').assert;

describe('Arrays',() => {
    describe('some', () => {

    it('knows when all elements in an array pass a truth test', () => {
      assert.equal(solution.some([1,2,3,4,4,5], element => {
        return typeof element === 'number';
      }), true);
    });

    it('knows when some elements in an array pass a truth test', () => {
      assert.equal(solution.some([1,2,3,4,'hello!'], element => {
        return typeof element === 'number';
      }), true);
    });

    it('knows when no elements in an array pass a truth test', () => {
      assert.equal(solution.some(['hi!','hello!', 'what\'s up?'], element => {
        return typeof element === 'number';
      }), false);
    });

    it('works on empty arrays', function (){
      assert.equal(solution.some([], element => {
        return typeof element === 'number';
      }), false);
    });

  });
});
