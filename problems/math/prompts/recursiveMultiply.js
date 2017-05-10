/**
  * Write a recursive function to multiply two positive integers without using the * operator.
  * You can use addition, substraction, and bit shifting operators but you should minimize the number
  * of those operations.
  *
  * recursiveMultiply(2, 4) // 8
  * recursiveMultiply(3, 10) // 30
  *
  * Extra Credit: Handle multiplication of negative numbers
  * recursiveMultiply(2, 4) // 8
  */

const recursiveMultiply = (num1, num2) => {
  // TODO: Implement recursive multiply
  if (num2 ===1) {
    return num1;
  } else if (num2 === 0) {
    return 0;
  } else if (num1 > 0 && num2 > 0){
    return recursiveMultiply(num1, num2-1) + num1;
  } else if (num1< 0 && num2 <0) {
    return recursiveMultiply(num1, num2+1) - num1;
  }
};

module.exports = { recursiveMultiply };
