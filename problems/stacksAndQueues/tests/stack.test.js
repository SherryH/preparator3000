'use strict';

const solution = require('../prompts/stack.js'),
      assert = require('chai').assert;

describe('Stacks', () => {
  describe('stack', () => {

    it('should return the size of the stack', () => {
      const stack = new solution.Stack();
      assert.equal(stack.size(), 0, 'stack size before push');
      stack.push(1);
      stack.push(2);
      assert.equal(stack.size(), 2, 'stack size after 2 push calls');
    });

    it('should add values with push', () => {
      const stack = new solution.Stack();
      for (let i = 0; i < 10; i++) {
        const value = Math.random() * 100;
        stack.push(value);
      }
      assert.equal(stack.size() , 10, 'stack Size after push');
    });

    it('should return the most recently added value with pop', () => {
      const stack = new solution.Stack();
      stack.push(1);
      stack.push(2);
      const popped = stack.pop();
      assert.equal(popped, 2, 'most recently pushed value');
    });

  });
});