'use strict';

// reverse and return an array in place (space complexity of O(1))
const reverseArrayInPlace = array => {
  var newArr = [];
  while (array.length) {
  	newArr.push(array.pop());
  }
  return newArr;
};

module.exports = { reverseArrayInPlace };
