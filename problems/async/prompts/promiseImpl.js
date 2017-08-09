// an async function
var asyncFunc = callback => {
  setTimeout(() => {
    callback('the value 1');
  }, 200);
};

asyncFunc(val => {
  console.log('hi', val);
});

//promisify the async function
var myPromisify = callback => {
  //Promise takes in a func, which takes 2 inputs: resolve and reject
  // resolve will get the value once async function is resolved
  // and that value will be available in .then()
  return new Promise((resolve, reject) => {
    callback(resolve);
  });
};

var proAsyncFunc = myPromisify(asyncFunc);

proAsyncFunc.then(val => {
  console.log('from proAsyncFunc', val);
});

// Start with examples in http://www.mattgreer.org/articles/promises-in-wicked-detail/
function doSomthing(callback) {
  value = 'the value 42';
  callback(value);
}

doSomthing(function(val) {
  console.log('Value passed into callback:', val);
});

//if we want to achieve the following:
doSomething2().then(function(val) {
  console.log('Value passed via promise', val);
});
//then we need to define doSomething2 as.....
function doSomething2() {
  //promise keeps the notion of eventual value into an object
  return {
    then: function(callback) {
      value = 'the promise value 55';
      callback(value);
    }
  };
}

//if we redefine the promise to achieve the following
function doSomthing3() {
  return new Promise2(function(resolve) {
    var value = 66;
    resolve(value);
  });
}
//the Promise takes in a resolve function, which gets called and receives the fulfilled value when the asynchronous task completes successfully
function Promise2(fn) {
  var callback = null; // the action we want to perform after promise returns. it needs to receive the resolved value

  //'this' is the object returned
  this.then = function(cb) {
    callback = cb;
  };

  //without setTimeout, compiler complains that callback is not a function. resolve() is called becore then()
  function resolve(val) {
    setTimeout(function() {
      callback(val);
    }, 250);
  }
  // fn executes with a resolve, and reject function (implemented later)
  // when doSomething3() executes, fn(resolve) executes
  // fn(resolve) goes to the context and assign value = 66, and resolve(value) executes
  // Due to closure, from resolve(value), value is passed to callback via callback(val)
  // the callback is the cb passed in from .then(cb) captured via closure
  // therefore cb is executed with async returned val via callback(val) inside resolve(val)
  fn(resolve);
}

doSomthing3().then(function(val) {
  console.log(val);
});

console.log('===============Promises have states================');
function Promise3(fn) {
  var state = 'pending'; //a Promise is in the pending state before it is fulfilled or rejected

  fn(resolve); //we want to execute fn when Promise is created
}

//deferred = work is yet to be finished. it is the work to be implemented in the .then()
//onResolved is the work that is to be passed into .then(), which will be called when promise resolved

function doSomthing4(time) {
  return new Promise4(resolve => {
    setTimeout(resolve, time);
  });
}
