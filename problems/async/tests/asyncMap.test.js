'use strict';

const solution = require('../prompts/asyncMap.js'),
      should = require('chai').should(),
      assert = require('chai').assert;

describe('Async', () => {
  describe('asyncMap', () => {

    it('should exist', () =>{
      should.exist(solution.asyncMap);
    });

    it('should be a function', () => {
      solution.asyncMap.should.be.a.Function;
    });

    it('should take two arguments', () => {
      solution.asyncMap.length.should.equal(2);
    });

    it('should pass the completed tasks to its callback', done => {

      // These functions aren't really asynchronous, but for the purposes of testing it works.
      function wait2For2(callback){
        setTimeout(function () {
          callback(2);
        }, 200);
      }

      function wait3For1(callback){
        setTimeout(function(){
          callback(1);
        }, 300);
      }

      solution.asyncMap([wait2For2, wait3For1], results => {
        /* This should work regardless of order because of
         * the time it takes to execute these 2 functions
         */
        results.should.eql([2,1]);
        results.length.should.equal(2);
        done();
      });

    });

    it('should pass the completed tasks to its callback in the correct order', done => {

      function wait3For1(callback){
        setTimeout(function(){
          callback(1);
        }, 300);
      }

      function wait2For2(callback){
        setTimeout(function(){
          callback(2);
        }, 200);
      }

      solution.asyncMap([wait3For1, wait2For2], results => {
        results.should.eql([1,2]);
        done();
      });

    });

    it('should handle more than two async functions in the correct order', done => {
      function wait2For2(callback){
        setTimeout(function(){
          callback(2);
        }, 200);
      }

      function wait5For4(callback){
        setTimeout(function(){
          callback(4);
        }, 500);
      }

      function wait1For3(callback){
        setTimeout(function(){
          callback(3);
        }, 100);
      }

      function wait3For1(callback){
        setTimeout(function(){
          callback(1);
        }, 300);
      }

      function wait1For5(callback){
        setTimeout(function(){
          callback(5);
        }, 100);
      }

      solution.asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], results => {
        results.should.eql([1,2,3,4,5]);
        done();
      });

    });
  });
});