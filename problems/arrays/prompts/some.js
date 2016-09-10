'use strict';

// determine if some elements in the array pass a truth test
const some = (array, truthTest) => {
  // your code here
  var flag = false;
  for (var i = 0; i < array.length; i++) {
    if (truthTest(array[i])) {
      flag = true;
    }
  }
  return flag;
};

module.exports = { some };
