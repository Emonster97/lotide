const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');


// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual([1,2],[1,2]);
assertArraysEqual([1,2],[1,2]);

module.exports = assertArraysEqual;
