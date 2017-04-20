'use strict';

// determine if some elements in the array pass a truth test
const some = (array, truthTest) => {
  // your code here
  for (var i =0; i<array.length; i++) {
  	if(truthTest(array[i])){
  		return true;
  	}
  }
  return false;
};

module.exports = { some };
