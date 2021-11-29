const letterPositions = function letterPositions(sentence) {
  let obj = {};
for (let i in sentence) {
  if (sentence[i] !== " "){
    if (!obj[sentence[i]])
      obj[sentence[i]] = [];
    obj[sentence[i]].push(i);
  }
}
return obj;
}
console.log(letterPositions("lighthouse in the house"));

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

