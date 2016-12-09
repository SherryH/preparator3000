'use strict';

const solution = require('../prompts/arrays.js');
const assert = require ('chai').assert;
const _ = require('underscore');

describe('JavaScript', () => {
  
  describe('Array.concat', () => {
    it('predict what concatenating ["A", "B", "C"] with [1, 2, 3] will return', () => {
      assert.isTrue(_.isEqual(solution.concat, ["A", "B", "C"].concat([1, 2, 3])));
    });
  });

  describe('Array.join', () => {
    it('predict the resulting array from joining ["A", "B", "C"] with no argument', () => {
       assert.isTrue(_.isEqual(solution.join, ["A", "B", "C"].join()));
    });
  });

  describe('Array.push', () => {
    it('predict the return value of pushing "D" to ["A", "B", "C"]', () => {
      assert.isTrue(solution.push === ["A", "B", "C"].push("D"));
    });
  });

  describe('Array.pop', () => {
    it('predict the return value of ["A", "B", "C"].pop()', () => {
      assert.isTrue(solution.pop === ["A", "B", "C"].pop());
    });
  });

  describe('Array.shift', () => {
    it('predict the return value of ["A", "B", "C"].shift()', () => {
      assert.isTrue(solution.shift === ["A", "B", "C"].shift());
    });
  });

  describe('Array.unshift', () => {
    it('predict the return value of ["A", "B", "C"].unshift("X")', () => {
      assert.isTrue(solution.unshift === ["A", "B", "C"].unshift("X"));
    });
  });

  describe('Array.slice', () => {
    it('predict the resulting array when slicing ["one","two", "three", "four"] at 0,2', () => {
      const expected = ["one","two", "three", "four"].slice(0,2);
      assert.isTrue(_.isEqual(solution.slice1, expected));
    });

    it('predict the resulting array when slicing ["one","two", "three", "four"] at 0', () => {
      const expected = ["one","two", "three", "four"].slice(0);
      assert.isTrue(_.isEqual(solution.slice2, expected));
    });

    it('predict the resulting array when slicing ["one","two", "three", "four"] at -2', () => {
      const expected = ["one","two", "three", "four"].slice(-2);
      assert.isTrue(_.isEqual(solution.slice3, expected));
    });
  });

  describe('Array.splice', () => {
    it('predict the resulting array of ["one","two", "three", "four"].splice(1, 2, 3, 4)', () => {
      const expected = ["one","two", "three", "four"].splice(1, 2, 3, 4);
      assert.isTrue(_.isEqual(solution.splice, expected));
    });
  });

  describe('Array.reverse', () => {
    it('predict the resulting array when invoking reverse on ["one","two", "three", "four"]', () => {
      const expected = ["one","two", "three", "four"].reverse();
      assert.isTrue(_.isEqual(solution.reverse, expected));
    });
  });

  describe('Array.sort', () => {
    it('predict the resulting array from sorting ["BAT", "CAT", "ARTICHOKE"]', () => {
      const expected = ["BAT", "CAT", "ARTICHOKE"].sort();
      assert.isTrue(_.isEqual(solution.sort1, expected));
    });

    it('predict the resulting array from sorting [1, 9, 3, 100, 800, 20]', () => {
      const expected = [1, 9, 3, 100, 800, 20].sort();
      assert.isTrue(_.isEqual(solution.sort2, expected));
    });
  });

  describe('Array.indexOf', () => {
    it('predict the return value of ["A", "B", "X", "Z"].indexOf("X")', () => {
      assert.isTrue(solution.indexOf1 === ["A", "B", "X", "Z"].indexOf("X"));
    });

    it('predict the return value of ["A", "B", "X", "Z"].indexOf("Y")', () => {
      assert.isTrue(solution.indexOf2 === ["A", "B", "X", "Z"].indexOf("Y"));
    });
  });

  describe('Array.map', () => {
    it('predict the resulting array when performing [1, 4, 9].map(n => n * 3)', () => {
      const expected = [1, 4, 9].map(n =>  n * 3);
      assert.isTrue(_.isEqual(solution.map, expected));
    });
  });

  describe('Array.filter', () => {
    it('predict the resulting array from [1, 40, 900, 60, 300].filtern(n =>  n < 300)', () => {
      const expected = [1, 40, 900, 60, 300].filter(n => n < 300);
      assert.isTrue(_.isEqual(solution.filter, expected));
    });
  });

  describe('Array.every', () => {
    it('predict the return value of [10, 9, 8, 7].every(n => n < 15)', () => {
      const expected = [10, 9, 8, 7].every(n => n < 15);
      assert.isTrue(solution.every === expected);
    });
  });

  describe('Array.some', () => {
    it('predict the return value of [400, 243, 86, 138, 302].some(n => n < 100)', () => {
      const expected = [400, 243, 86, 138, 302].some(n =>  n < 100);
      assert.isTrue(solution.some === expected);
    });
  });

  describe('Array.reduce', () => {
    it('predict the return value of [\'S\', \'T\', \'A\', \'R\'].reduce((a, b) => a + b)', () => {
      const expected = ['S', 'T', 'A', 'R'].reduce((a, b) =>  a + b);
      assert.isTrue(solution.reduce === expected);
    });
  });

  describe('Array.reduceRight', () => {
    it('predict the return value of [\'S\', \'T\', \'A\', \'R\'].reduceRight((a, b) => a + b)', () => {
      const expected = ['S', 'T', 'A', 'R'].reduceRight((a, b) =>  a + b);
      assert.isTrue(solution.reduceRight === expected);
    });
  });

});
