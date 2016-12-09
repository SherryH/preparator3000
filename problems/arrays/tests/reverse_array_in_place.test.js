'use strict';

const solution = require('../prompts/reverse_array_in_place.js');
const assert = require ('chai').assert;
const array = [1, 2, 3, 4, 4, 5];

describe('Arrays',() => {
  describe('reverseArrayInPlace', () => {

    const reversed = solution.reverseArrayInPlace(array);

    it('can return the same array', () => {
      assert.equal(reversed, array);
    });

    it('can return the array with the same elements in reverse order', () => {
      assert.deepEqual(reversed, [5, 4, 4, 3, 2, 1]);
    });

  });
});
