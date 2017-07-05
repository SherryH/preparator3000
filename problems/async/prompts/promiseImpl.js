// an async function
var asyncFunc = (callback) => {
    setTimeout(() => {
        callback('the value 1');
    }, 200);
};

asyncFunc((val) => {
    console.log('hi', val);
});

