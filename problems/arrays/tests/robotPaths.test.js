'use strict';

const solution = require('../prompts/robotPaths.js'),
      should = require('chai').should(),
      assert = require('chai').assert;

describe('Arrays', () => {
  describe('robotPaths', () => {
    it('should exist', () => {
      should.exist(solution.robotPaths);
    });

    it('should be a function', () => {
      solution.robotPaths.should.be.a.Function;
    });

    it('should return a number', () => {
      const result = solution.robotPaths(3);
      should.exist(result);
      result.should.be.a.Number;
    });

    it('should return a number greater than zero for non-empty grids', () => {
      solution.robotPaths(3).should.be.above(0);
    });

    it('should correctly identify the number of unique paths for a 1x1 grid', () => {
      solution.robotPaths(1).should.equal(1);
    });

    it('should correctly identify the number of unique paths for a 2x2 grid', () => {
      solution.robotPaths(2).should.equal(2);
    });

    it('should correctly identify the number of unique paths for a 3x3 grid', () => {
      solution.robotPaths(3).should.equal(12);
    });

    it('should correctly identify the number of unique paths for a 4x4 grid', () => {
      solution.robotPaths(4).should.equal(184);
    });

    it('should correctly identify the number of unique paths for a 5x5 grid', () => {
      solution.robotPaths(5).should.equal(8512);
    });

    it('should correctly identify the number of unique paths for 6x6 grid', () =>{
      solution.robotPaths(6).should.equal(1262816);
    });
  });
});