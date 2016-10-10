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
 *
 *
 */


const asyncMap = (tasks, callback) => {
  var arr = [];
  var i = 0;
  function hitMe(result) {
    arr.push(result);
    i++
    if (i === tasks.length) {
      callback(arr)
    } else {
      tasks[i](hitMe)
    }
  }
  tasks[0](hitMe)
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
