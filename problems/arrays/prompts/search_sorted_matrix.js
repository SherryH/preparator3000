'use strict';

/* return the position of a number [row, col] from a sorted matrix
 *
 * example:
 * var matrix = [
 *   [2, 4, 6, 7],
 *   [5, 7, 8, 11],
 *   [9, 10, 15, 18],
 *   [11, 16, 20, 25],
 * ]
 *
 * searchSortedMatrix(matrix, 15); // returns [2, 2];
 * searchSortedMatrix(matrix, 15); // returns [2, 2];
 */

const searchSortedMatrix = function(matrix, number){
  for (var i =0; i< matrix.length; i++) {
    if (matrix[i][matrix[i].length-1] >= number) {
      for (var j =0; j< matrix[i].length; j++) {
        if(matrix[i][j] === number) {
          return [i, j];
        }
      }
      return 'value not found in row';
    }
  }
  return 'value not found in matrix';
};

// console.log(searchSortedMatrix(matrix, 15)); // returns [2, 2]; 
// console.log(searchSortedMatrix(matrix, 25)); // returns [3, 3];
// console.log(searchSortedMatrix(matrix, 17)); // returns 'value not found in row';
// console.log(searchSortedMatrix(matrix, 30)); // returns 'value not found in matrix';

module.exports = { searchSortedMatrix };
