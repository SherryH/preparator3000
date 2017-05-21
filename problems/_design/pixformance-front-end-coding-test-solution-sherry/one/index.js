'use strict';

var fruit = [
  'apple',
  'pear',
  'banana',
  'apple',
  'orange',
  'pear',
  'apple',
  'banana'
];

function tidyArray(array) {

  // Write your logic here
  //1. Remove duplicates from an array.
  //2. Sort the array alphabetically.
  var arr = array;
  var obj = {};
  array.forEach((item)=>{
    obj[item] = true;
  });
  return Object.keys(obj).sort();

}

console.log(tidyArray(fruit));
