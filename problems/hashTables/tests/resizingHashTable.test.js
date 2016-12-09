'use strict';

const solution = require('../prompts/resizingHashTable.js'),
      should = require('chai').should(),
      assert = require('chai').assert;

describe('hashTables', () => {
  describe('makeHashTable', () => {
    it('should exist', () => {
      should.exist(solution.makeHashTable);
    });
    it('should be a function', () => {
      solution.makeHashTable.should.be.a.Function;
    });
    it('should return a hash table', () => {
      const hashTable = solution.makeHashTable();
      should.exist(hashTable);
      hashTable.should.be.an.Object;
    });
    it('should return different instances of hash tables each time', () => {
      const hashTable1 = solution.makeHashTable();
      should.exist(hashTable1);

      const hashTable2 = solution.makeHashTable();
      should.exist(hashTable2);
      hashTable1.should.not.be.equal(hashTable2);
      // `solution.makehashTable()` should create a new hash table object instance
      // everytime but it's not!
    });
  });

  describe('hashTable', () => {
    describe('#insert', () => {
      it('should exist as a method of hashtable instances', () => {
        const hashTable = solution.makeHashTable();
        should.exist(hashTable.insert);
      })
      it('should take exactly two arguments. a key and a value', () => {
        const hashTable = solution.makeHashTable();
        hashTable.insert.length.should.equal(2);
        /**
          a hashtable gets its awesomeness from associating data. it wouldn't be
          very useful if you just gave it data without any association.
          ie, bad hash table:
          you: hey hashtable, can you please remember "sarah" (key)?
          hashtable: um... okay?
          ... sometime later...
          you: hey hastable, when's "sarah"'s (key) birthday?
          hashtable: "sarah"
          you: Um.. this is awkward...
          ie, good hashtable:
          you: hey hashtable, please remember that "sarah"s (key) birthday is
          "January 23rd" (value)
          hashtable: okay, friend. you got it!
          ... sometime later ...
          you: hey hashtable, when's "sarah"'s (key) birthday?
          hashtable: "January 23rd"
          you: thanks hashtable, you're awesome!
          hashtable: i know
        */
      });
  /*    it('should not throw an error with valid input', function(){
        (function(){
          var hashTable = solution.makeHashTable();
          hashTable.insert('keanu reeves best movie', 'The Matrix');
          // calling insert should not throw an error
        }).should.not.throw();
      });*/
      it('should allow keys to be reinserted with new values', () => {
        const hashTable = solution.makeHashTable();
        (function(){
          hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
          hashTable.insert('keanu reeves best movie', 'The Matrix');
        }).should.not.throw();
      });
      /*it('should throw an error if keys are not strings', function(){
        // not a HUDGE deal but only strings should be keys. regular objects
        // converted to strings are always '[object Object]'
        var hashTable = solution.makeHashTable();
        (function(){
          hashTable.insert({foo:'bar'}, 'oh no!');
        }).should.throw();
      });*/
    });

    describe('#retrieve', () => {
      it('should be a method of hashTable instances', () => {
        const hashTable = solution.makeHashTable();
        should.exist(hashTable.retrieve);
      })
      it('should be a function', () => {
        const hashTable = solution.makeHashTable();
        hashTable.retrieve.should.be.a.Function;
      });
      it('should take exactly one argument', () => {
        const hashTable = solution.makeHashTable();
        // the retrieve function should only take a single `key` argument
        hashTable.retrieve.length.should.equal(1);
      })
      it('should return values previously inserted', () =>{
        const hashTable = solution.makeHashTable();
        hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
        const value = hashTable.retrieve('William Shatner\'s most well known role');
        should.exist(value);
        value.should.be.equal('Captain Kirk');
      });
      it('should return undefined for unknown keys', () =>{
        const hashTable = solution.makeHashTable();
        should.not.exist(hashTable.retrieve('echo?'));
      });
    });

    describe('#insert', () =>{
      it('should allow valus to be updated', () =>{
        const hashTable = solution.makeHashTable();
        hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
        hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
        const value = hashTable.retrieve('Tarantino\'s best movie');
        should.exist(value);
        value.should.be.equal('Pulp Fiction');
      });
    });

    describe('#remove', () =>{
      it('should exist as a method of the hashTable instance', () =>{
        const hashTable = solution.makeHashTable();
        should.exist(hashTable.remove);
      });
      it('should be a function', () => {
        const hashTable = solution.makeHashTable();
        hashTable.remove.should.be.a.Function;
      });
      it('should take exactly one argument', () => {
        const hashTable = solution.makeHashTable();
        // the remove function should only take a single `key` argument
        hashTable.remove.length.should.equal(1);
      });
      it('should allow values to be removed', () => {
        const hashTable = solution.makeHashTable();
        hashTable.insert('Spielberg\'s best movie', 'Jaws');
        hashTable.remove('Spielberg\'s best movie');
        const value = hashTable.retrieve('Spielberg\'s best movie');
        should.not.exist(value);
      });
    });

    describe('#insert', () => {
      it('should handle collisions', () => {
        const hashTable = solution.makeHashTable();
        (function(){
          const n = 1000;
          for(var i = 0; i < n; i++){
            hashTable.insert('userid:' + (i++), 'Jamie Hyneman');
          }
        }).should.not.throw();
      });
    });
    it('should be able to resize', () => {
      // if your hashtable isn't resizing, its going to start running more
      // and more slowly with a large number of inserts and retrievals.
      const hashTable = solution.makeHashTable();
      let n = 10, id = 0, diffs = [];
      let endTime, startTime;
      for(let i = 0; i <= n; i++){
        startTime = new Date();
        for(let j = 0; j < 1000; j++){
          hashTable.insert('userid:' + (id++), 'Syd Mead');
        }
        for(let j = 0; j < 100; j++){
          hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
        }
        endTime = new Date();
        diffs.push(endTime - startTime);
      }
      const sum = arr => {
        let total = 0;
        for(let i = 0;i < arr.length; i++) {
          total += arr[i];
        }
        return total;
      }
      // we should expect the first iteration to take up ruffly 1 / n
      // of the total time. we give it some wiggle room by letting it be as
      // low as a 1 / (n*2) of the total duration.
      const ratio = (diffs[0] / sum(diffs));
      ratio.should.be.above( 1 / ( n * 2 ));
    });
  });
});