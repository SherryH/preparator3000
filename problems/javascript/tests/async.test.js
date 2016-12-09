'use strict';

const solution = require('../prompts/async.js');
const assert = require ('chai').assert;
const _ = require('underscore');

describe('JavaScript', () => {
  describe('async', () => {

    it('predict what endingValue will be with var', function (done) {
      var endingValue = 0;
      for (var i = 10; i < 13; i++) {
        setTimeout(() => { endingValue += i; }, i);
      }
      setTimeout(()=> {
        assert.isTrue(endingValue === solution.async1);
        done();
      }, 200);
    });

    it('predict what endingValue will be with let', function (done) {
      let endingValue = 0;
      for (let i = 10; i < 13; i++) {
        setTimeout(() => { endingValue += i; }, i);
      }
      setTimeout(()=> {
        assert.isTrue(endingValue === solution.async2);
        done();
      }, 200);
    });

  });
});
