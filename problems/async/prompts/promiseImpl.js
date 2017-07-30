// an async function
var asyncFunc = (callback) => {
    setTimeout(() => {
        callback('the value 1');
    }, 200);
};

asyncFunc((val) => {
    console.log('hi', val);
});

//promisify the async function
var myPromisify = (callback) => {
    //Promise takes in a func, which takes 2 inputs: resolve and reject
    // resolve will get the value once async function is resolved
    // and that value will be available in .then()
    return new Promise((resolve, reject) => {
        callback(resolve);
    });
};

var proAsyncFunc = myPromisify(asyncFunc);

proAsyncFunc
    .then((val) => {
        console.log('from proAsyncFunc', val);
    });

 // Start with examples in http://www.mattgreer.org/articles/promises-in-wicked-detail/
 function doSomthing(callback){
    value = 'the value 42';
    callback(value);
 };

 doSomthing(function(val){
    console.log('Value passed into callback:',val);
 });

 //if we want to achieve the following:
 doSomething2().then(function(val){
    console.log('Value passed via promise',val);
 });
 //then we need to define doSomething2 as.....
 function doSomething2(){
    //promise keeps the notion of eventual value into an object
    return {
        then: function(callback){
            value = 'the promise value 55'
            callback(value);
        }
    };
 };

 //if we redefine the promise to achieve the following
 function doSomthing3(){
    return Promise(function(resolve){
        var value = 66;
        resolve(value);
    });
 }
 //the Promise takes in a resolve function, which gets called and receives the fulfilled value when the asynchronous task completes successfully