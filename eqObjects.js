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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
/*
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for (a in Object.keys(object1)){
    for (b in Object.keys(object2)){
      if (Array.isArray(object1[a])&& Array.isArray(object2[b])){
        eqArrays(object1[a],object2[b]);
      } else
      if (a !== b){
        return false;
      }
    }
  }
  return true;
};
*/

const eqObjects = function (object1, object2) {
  for (let i in object1) {
    for (let j in object2) {
      if(Array.isArray(i) && Array.isArray(j)){
        if (!eqArrays(object1.i, object2.j)) 
       {
          return false; 
        }
      } else {
        if (Object.keys(object1).length !== Object.keys(object2).length) {
          return false;
        } else if (object1.i === object2.j) {
          return true;
        }
      }      
    }
  }
  return true;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };

module.exports = eqObjects;