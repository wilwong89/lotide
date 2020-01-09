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

const takeUntil = function(array, callback) {
  let resultArray = [];

  for (const element of array) {
    if (callback(element)) break;
    resultArray.push(element);
  }

  return resultArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);