// eqArray Function

const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length)
    return false;

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      return false;
}
return true;
};

// FUNCTION IMPLEMENTATION

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5])); // => [3]