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

const letterPositions = function(sentence = "") {
  const results = {};
  let letterPosition = 0;
  // logic to update results here

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(letterPosition);
      } else {
        results[letter] = [letterPosition];
      }
    }
    
    letterPosition++;
  }
  return results;
};

assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('h ello').e, [2]);
assertArraysEqual(letterPositions('h  ello').e, [3]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('h ello').l, [3, 4]);