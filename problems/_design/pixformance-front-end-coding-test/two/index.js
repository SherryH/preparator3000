'use strict';

var add2 = add.bind(undefined, 2);

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Types must be numbers');
  }
  return a + b;
}

module.exports = {
  add: add,
  add2: add2
};
