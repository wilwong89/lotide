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
    } else if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const middle = function(inputArray) {
  let newArray = [];
  if (inputArray.length < 2) return newArray;
  let middleIndex = (inputArray.length - 1) / 2;

  let keysForMiddleElements = [];
  //Push middle element, if not integer, push second element
  console.log(middleIndex, Math.floor(middleIndex), Math.ceil(middleIndex));

  //Add middle index rounded down, if not integer, add middle index rounded up.
  keysForMiddleElements.push(Math.floor(middleIndex));
  if (middleIndex % 2 !== 0) {
    keysForMiddleElements.push(Math.ceil(middleIndex));
  }

  keysForMiddleElements.forEach(element => {
    newArray.push(inputArray[element]);
  });
  
  return newArray;
};

const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [1, 2, 3, 4, 5, 6];

assertArraysEqual(middle(testArray1), [testArray1[2]]);
assertArraysEqual(middle(testArray2), [testArray1[2],testArray1[3]]);