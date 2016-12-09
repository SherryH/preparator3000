'use strict';

const solution = require('../prompts/nthFibonacci.js'),
      should = require('chai').should(),
      assert = require ('chai').assert;

describe('Math', () => {
  describe('nthFibonacci', () => {
    it('should exist', () => {
      should.exist(solution.nthFibonacci);
    });

    it('should be a function', () => {
      should.exist(solution.nthFibonacci);
      solution.nthFibonacci.should.be.a.Function;
    });

    it('should return integers', () => {
      const result = solution.nthFibonacci(0);
      should.exist(result);
      result.should.be.a.Number;
    });

    it('should handle the base cases with ease', () => {
      solution.nthFibonacci(0).should.equal(0);
      solution.nthFibonacci(1).should.equal(1);
    });

    it('should return the nth Fibonacci number for a given n', () => {
      solution.nthFibonacci(5).should.equal(5);
      solution.nthFibonacci(10).should.equal(55);
      solution.nthFibonacci(20).should.equal(6765);
    });

    it('should produce values in linear time', () => {
      // all this crazyness does it check if your solution is better than
      // the naive, exponential solution.
      let diffs = [],
        start = 0,
        end = 0,
        i = 0,
        max_diff = 100,
        max_dur = 1000,
        init = new Date;

      while( end - start < max_diff && end - init < max_dur){
        start = new Date();
        solution.nthFibonacci(i++);
        end = new Date();
        diffs.push(end - start);
      }
      const avg = (array) => {
        let n = 0, sum = 0;
        for(let i = 0; i < array.length; i++){
          sum += array[i];
        }
        return sum / array.length;
      }
      const expected_dur_ratio = i / (end - init);
      const actual_dur_ratio = diffs[diffs.length - 1] / (end - init);
      // if the computational duration is increasing linearly, the last computation
      // should make up less than 10% of the total computation.
      actual_dur_ratio.should.be.below(0.1);
    });

    xit('should not use recursion', () => {
    // if you've gotten this far, you're doing great!
    // this is checking if your `nthFibonacci` function is at some point
    // calling itself (making it a recursive function)
    // Note: this test may produce a false positive if you have a comment 
    // in your `nthFibonacci` function that contains the string literal 
    // "nthFibonacci" somewhere within it.
    should.not.exist(solution.nthFibonacci.toString().match(/nthFibonacci/));
    });

  });
});