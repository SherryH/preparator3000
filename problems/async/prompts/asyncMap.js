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

// Solve using Recursion
var asyncMap = (tasks, callback) =>{
  var task;
  var answer = [];
  console.log(tasks);
  asyncMapRecur = () => {
    if (tasks.length === 0) {
      return callback(answer);
    }
    task = tasks.shift();
    task((val)=>{
      answer.push(val);
      asyncMapRecur();
    });
  }
  asyncMapRecur()
};


//Solve using foreach
var asyncMap = (tasks, callback) => {
  var answer = [];
  var count = 0;
  tasks.forEach((task, ind)=>{
    task((val)=>{
      answer[ind] = val;
      count++;
      //can't use answer.length in if comparison because answer.length doesn't reflect
      // the actual num of items in the array -> it reflects the last index occupied
      if(count === tasks.length) {
        callback(answer);
      }
    });
  });
}

const asyncMap = (tasks, callback) => {
  var array = [];
  var count = 0;
  for (var i = 0; i < tasks.length; i++) {
    (function(i){
      tasks[i]((val)=>{
        console.log(i, val);
        // array.push(val);
        array[i] = val;
        count++;
        if (count === tasks.length) {
          callback(array);
        }
      });
    })(i);
  }
};


// solve using promise

// first, create a myPromisify func to turn an async function to a promise
// solve using promise

// create a myPromisify func to turn an async function to a promise
var myPromisify = (asyncFunc) =>{
  return new Promise((resolve, reject) => {
    asyncFunc((val)=>{
      resolve(val);
    });
  });
};
//OR
var myPromisify = (asyncFunc) =>{
  return new Promise((resolve, reject) => {
    asyncFunc(resolve); //resolve is a function takes in a value
  });
};

// Use promise.all
var asyncMap = (tasks, callback) =>{
  var promiseArr = [];
  promiseArr = tasks.map(task=>{
    return myPromisify(task);
  });

  Promise.all(promiseArr)
  .then((val)=>{
    callback(val);
  });
};

// OR, shortened promise version
var asyncMap = (tasks, callback) =>{
  var promiseArr = [];
  promiseArr = tasks.map(myPromisify);

  Promise.all(promiseArr)
  .then(callback);
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