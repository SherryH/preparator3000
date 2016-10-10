function count(numbers, k) {
  var subarrays = [];

  var subroutine = function(arr) {
    // var product = arr.reduce(function(start, item) {
    //   start = start * item;
    //   return start;
    // })
    // if (product < k) {
    // }
      subarrays.push(arr)
    if (arr.length === 1) {
      return;
    } else {
      var mid = Math.floor(arr.length / 2)
      if (arr.length % 2 !== 0) {
        subroutine(arr.slice(0, mid + 1));
        subroutine(arr.slice(mid, arr.length));
      } else {
        subroutine(arr.slice(0, mid))
        subroutine(arr.slice(mid, arr.length));
      }
    }
  }
  subroutine(numbers)
  console.log(subarrays);

}

function countOne(numbers, k) {
  var subarrays = [];
  for (var i = 0; i < numbers.length; i++) {
    var subarray = [];
    var product = 1;
    for (var j = i; j < numbers.length; j++) {
      product = product * numbers[j];
      subarray.push(numbers[j])
      if (product < k) {
        var newSubarray = subarray.slice(0)
        subarrays.push(newSubarray)
      } else {
        break;
      }
    }
  }
  console.log(subarrays);
  return subarrays.length;
}

countOne([1, 1, 1, 1], 2);
      // var product = subarray.reduce(function(start, item) {
      //   start = start * item;
      //   return start;
      // })