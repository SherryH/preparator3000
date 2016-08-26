'use strict';

const solution = require('../prompts/minStack'), 
      assert = require('chai').assert;

describe('Stacks', () => {
  describe('minStack',() => {

    let minStack;
    beforeEach(() => {
      minStack = new solution.MinStack();
      for(let i = 0; i < 999999; i ++){
        minStack.push(Math.random());
      }
    });

    it('should push in constant time', function(done) {
      this.timeout(400);
      for(let i = 0; i < 999999; i ++){
        minStack.push(Math.random());
      }
      done();
    });

    it('should pop in constant time', function(done) {
      this.timeout(200);
      while(minStack.size() > 0){
        minStack.pop();
      }
      done();
    });

    it('should get the minimum value in constant time', function(done) {
      this.timeout(1750);
      let previousMin = -Infinity;
      while(minStack.size() > 0){
        assert.isAtMost(previousMin, minStack.getMin());
        previousMin = minStack.getMin();
        minStack.pop();
      }
      done();
    });

  });
});
