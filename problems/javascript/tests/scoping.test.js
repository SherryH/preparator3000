'use strict';

const solution = require('../prompts/scoping.js');
const assert = require ('chai').assert;
const _ = require('underscore');

describe('JavaScript', () => {
  describe('Scoping with var and let', () => {
    
    it('predict what endingValue will be', () => {
      var initialValue = 0;

      for(var i = 0; i < 1; i++) {
        let value = initialValue + 1;
      }

      if(1 == 1) {
        var value = value || -1;
        value++;
      }

      (function changeValue() {
        if(1 == 1) {
          var value = 2;
        }
        value = 3;
      })()
      assert.isTrue(value === solution.value);
    });

  });

  describe('Closures', () => {

    it('predict what function foo invoked twice will return', () =>  {
      var foo = () => {
        var a = 5;
        return function bar() {
          return a + 10;
        };
      };
      assert.isTrue(_.isEqual(foo()(), solution.doubleFoo));
    });

  });
});
