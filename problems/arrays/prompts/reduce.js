"use strict";

// determine if reduce an array into a single value
const reduce = (array, iterator, accumulator) => {
  // your code here
  let result = accumulator || array[0];
  const firstInd = accumulator ? 0 : 1;
  for (let i = firstInd; i < array.length; i++) {
    result = iterator(result, array[i]);
  }
  return result;
};

module.exports = { reduce };
