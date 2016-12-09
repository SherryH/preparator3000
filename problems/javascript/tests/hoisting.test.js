'use strict';

const solution = require('../prompts/hoisting.js');
const assert = require ('chai').assert;
const _ = require('underscore');

describe('JavaScript', () => {
  describe('Variable hoisting', () => {

    it('can assign variables before declaring them', () => {
      a = 10;
      var a;
      assert.isTrue(_.isEqual(solution.a, a));
    });

    it('predict what function foo will return', () => {
      var b = 10;
      var foo = () => {
        if (!b) {
          var b = 'I am one with the force';
        }
        return b;
      };
      assert.isTrue(_.isEqual(solution.b, foo()));
    });

  });

  describe('Function hoisting', () => {
    
    it('predict what the type of a function is above the function expression', () => {
      var bar = typeof foo;
      var foo = function(a) {
        return a;
      }
      assert.isTrue(solution.bar === bar);
    });

    it('predict what result of a function will be when invoked above a function declaration', () => {
      var foo = bar(10);
      function bar(a) {
        return a;
      }
      assert.isTrue(solution.foo === foo);
    });
    
  });
});
