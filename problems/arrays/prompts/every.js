'use strict';

// determine if every element in the array passes a truth test
const every = (array, truthTest) => {
  // your code here
  for (var i = 0; i < array.length; i++) {
  	if(!truthTest(array[i])) {
  		return false;
  	}
  }
  return true;
};

module.exports = { every };
