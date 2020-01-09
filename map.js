const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["1", "2", "3", "4", "5"];
const words2 = [ '5', ' ', '3', '2', '1' ];

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(obj1, obj2) {
  //Test for same object referenced
  if (obj1 === obj2) return true;

  //Get keys
  let obj1keys = Object.keys(obj1);
  let obj2keys = Object.keys(obj2);

  //Compare lengths
  if (obj1keys.length !== obj2keys.length) return false;

  //Iterate through keys, ending early on mismatches
  for (let i of obj1keys) {
    //Test for nesting
    if (isObject(obj1[i]) || isArray(obj1[i])) {
      if (!eqArrays(obj1[i], obj2[i])) {
        return false;
      }
      //Actual test of values
    } else {
      if (obj1[i] !== obj2[i]) {
        return false;
      }
    }
  }
  return true;
};

const isArray = function(toBeTested = false) {
  let arrayConstruc = [].constructor;
  let testConstruc = toBeTested.constructor;

  return testConstruc === arrayConstruc;
};

const isObject = function(toBeTested = false) {
  let objectConstruc = ({}).constructor;
  let testConstruc = toBeTested.constructor;

  return testConstruc === objectConstruc;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words2, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ '1', '2', '3', '4', '5' ]);
assertArraysEqual(results3, [ '5', ' ', '3', '2', '1' ]);