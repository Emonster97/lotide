// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let freq = {};
  
  for (let a of sentence) { 
      freq[a] = (freq[a] !== undefined ? freq[a] + 1 : 1);
  }
  return freq;
}

console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;