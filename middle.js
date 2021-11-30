const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// ACTUAL FUNCTION
const middle = function(arr) {
  let arr1 = [];
  if (arr.length >= 3){ 
    
    let x = arr.length / 2;

    if (arr.length % 2 === 0) {
  
      arr1.push(arr[x-1], arr[x]);
    } else
    arr1.push(arr[Math.floor(x)]);
    
  }
  return arr1;
}

module.exports = middle;
