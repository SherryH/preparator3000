/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 * BONUS: Implement a solution that uses memoization to make this more efficient. 
 */

const nthFibonacci = n => {
  // Recursive implementationfor
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) {
  	return 1;
  } else {
  	return nthFibonacci(n-1) + nthFibonacci(n-2);
  }

};

const nthFibonacci2 = n => {
  // TODO: implement me!
  var output = [0,1,1];
  var temp;
  if (n < 3) {
    return output[n];
  }
  for (var i = 3; i <= n; i++) {
    temp = output[1] + output[2];
    output[1] = output[2];
    output[2] = temp;
  }
  return output[2];
};

module.exports = { nthFibonacci };