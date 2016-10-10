/**
  * Given a number, find the max product that
  * can result from breaking the input number into multiple
  * pieces.
  * 
  * Input number will be positive and an integer.
  *
  * For example:
  * the number 8 can be broken into :
  * 1,7
  * 1,1,5
  * 2,6
  * 3,5
  * 3,3,2
  * 2,4,2
  * 2,2,2,2
  * ...etc
  *
  * maxProduct(8); // => 18
  * Because the largets product can be obtained by 3, 3, 2.
  */

const maxProduct = int => {
  var largest = 0;

  function range(val) {
    var arr = [];
    for (var i = 2; i <= val; i++) {
      arr.push(i);
    }
    return arr;
  };

  var start = range(Math.floor(int/2));
  subroutine(int, start, 1);

  function subroutine(val, options, multiply) {
    if (!val) {
      if (multiply > largest) {
        largest = multiply;
      }
    } else {
      for (var i = 0; i < options.length; i++) {
        if (val - options[i] >= 0) {
          subroutine(val - options[i], options, multiply * options[i]);
        }
      }
    }

  }
  return largest;
};

console.log(maxProduct(20));

module.exports = { maxProduct };
