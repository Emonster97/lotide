// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([], []), false); // => should FAIL