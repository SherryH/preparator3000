"use strict";
/**
 * Manifest specifying test file order.
 * Uncomment to run tests
 */

[
  "./javascript/tests/arrays.test.js",
  "./javascript/tests/math.test.js",
  "./javascript/tests/hoisting.test.js",
  "./javascript/tests/scoping.test.js",
  "./javascript/tests/async.test.js",

  "./strings/tests/isPalindrome.test.js",
  "./strings/tests/longest_palindrome.test.js",
  "./strings/tests/string_compression.test.js",
  "./strings/tests/string_permutation.test.js",

  "./arrays/tests/flatten.test.js",
  "./arrays/tests/reduce.test.js",
  "./arrays/tests/every.test.js",
  "./arrays/tests/reverse_array_in_place.test.js",
  "./arrays/tests/some.test.js",
  "./arrays/tests/remove_duplicates.test.js",
  "./arrays/tests/search_sorted_matrix.test.js",

  "./linkedLists/tests/linkedList.test.js",
  "./linkedLists/tests/cycle.test.js",
  "./linkedLists/tests/sortedListMerge.test.js",

  "./math/tests/isPrimeNumber.test.js",
  "./math/tests/recursiveMultiply.test.js",
  "./math/tests/max_product.test.js",

  "./trees/tests/basic_tree.test.js",
  "./trees/tests/traverse_tree.test.js",
  "./trees/tests/pathSum_basic.test.js",

  "./stacksAndQueues/tests/stack.test.js",
  "./stacksAndQueues/tests/minStack.test.js",
  "./stacksAndQueues/tests/queue.test.js",

  "./graphs/tests/graph.test.js",

  "./sortAndSearch/tests/search.test.js",
  "./sortAndSearch/tests/sort.test.js"
].forEach(function(test) {
  require(test);
});
