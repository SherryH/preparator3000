'use strict';

const solution = require('../prompts/math.js');
const assert = require ('chai').assert;

describe('JavaScript', () => {

  describe('Math.pow', () => {
    it('predict the result calling Math.pow(7, 2)', () => {
      assert.isTrue(solution.pow === Math.pow(7, 2));
    });
  });

  describe('Math.round', () => {
    it('predict the result calling Math.round(2.01)', () => {
      assert.isTrue(solution.round1 === Math.round(2.01));
    });

    it('predict the result calling Math.round(13.5)', () => {
      assert.isTrue(solution.round2 === Math.round(13.5));
    });
  });

  describe('Math.floor', () => {
    it('predict the result calling Math.floor(13.95)', () => {
      assert.isTrue(solution.floor === Math.floor(13.95));
    });
  });

  describe('Math.ceil', () => {
    it('predict the result calling Math.ceil(1.004)', () => {
      assert.isTrue(solution.ceil === Math.ceil(1.004));
    });
  });

  describe('Math.sqrt', () => {
    it('predict the result calling Math.sqrt(16)', () => {
      assert.isTrue(solution.sqrt === Math.sqrt(16));
    });
  });

});
