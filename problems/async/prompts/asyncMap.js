'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  cb => {
 *    setTimeout(() => {
 *      cb('one');
 *    }, 200);
 *  },
 *  cb => {
 *    setTimeout(() => {
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  results => {
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


const asyncMap = (tasks, callback) => {
  var array = [];
  for (var i = 0; i < tasks.length; i++) {
    (function(i){
      tasks[i]((val)=>{
        console.log(i, val);
        // array.push(val);
        array[i] = val;
        if (array.length === tasks.length) {
          callback(array);
        }
      });



    })(i);
  }
};

module.exports = { asyncMap };


 asyncMap([
  cb => {
    setTimeout(() => {
      cb('one');
    }, 200);
  },
  cb => {
    setTimeout(() => {
      cb('two');
    }, 100);
  }
 ],
  results => {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });
