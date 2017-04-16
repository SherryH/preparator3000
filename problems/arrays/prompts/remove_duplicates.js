'use strict';

// returns an array without duplicates
const removeDuplicates = (array) => {
  // Keep O(n) to linear
  // approach 1: move item to newArray, check if the same item exists in newArray
  // approach 2: save array elem as keys in an obj, Object.keys to return
  var obj = {};
  array.forEach((item)=>{
    obj[item] = true;
  });

  return Object.keys(obj);
};

module.exports = { removeDuplicates };
