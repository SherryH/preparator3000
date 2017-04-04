'use strict';

// flatten a nested array into a flat (1D) array
// const flatten = arrays => {
// 	// your code here
//   var results = [];
//   for (var i = 0; i < arrays.length; i++) {
//     if (checkArray(arrays[i])) {
//       flattenArray(arrays[i])
//     } else {
//       results.push(arrays[i])
//     }
//   }

//   function checkArray(array) {
//     if (Array.isArray(array)) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function flattenArray(array) {
//     for (var i = 0; i < array.length; i++) {
//       if (checkArray(array[i])) {
//         flattenArray(array[i])
//       } else {
//         results.push(array[i])
//       }
//     }
//   }

//   return results;
// };

const flatten = (arrays, flattenedArr=[]) => {
  // for each elem in the arrays
  // check if it is an array
  // if array
  //    continue flatten recursion
  // else
  //    add to the final array
  arrays.forEach((item) => {
    if(Array.isArray(item)) {
      flatten(item, flattenedArr);
    } else {
      flattenedArr.push(item);
    }
  });

  return flattenedArr;
}


module.exports = { flatten };
