'use strict';

// returns an array without duplicates
const removeDuplicates = (array) => {
  // your code here
  var storage = {};
  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    if (!storage[array[i]]) {
      newArr.push(array[i]);
    } 
    storage[array[i]] = true;
  }

  console.log(storage);
  return newArr;
};

module.exports = { removeDuplicates };
