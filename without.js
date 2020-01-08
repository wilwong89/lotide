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

const without = function(source, itemsToRemove) {
  let newArray = [];
  let sourceKeys = Object.keys(source);
  let itemsToRemoveKeys = Object.keys(itemsToRemove);

  sourceKeys.forEach((element, i) => {
    let pushCurrent = true;

    itemsToRemoveKeys.forEach((item, j) => {
      if ((isObject(itemsToRemove[item]) && isObject(source[element])) 
        || (isArray(itemsToRemove[item]) && isArray(source[element]))) {
        if (eqArrays(source[element], itemsToRemove[item])) {
          pushCurrent = false;
        }
      } else if (itemsToRemove[item] === source[element]) {
        pushCurrent = false;
      }
    })
    
    if (pushCurrent) newArray.push(source[element]);
  })

  return newArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])

assertArraysEqual(without(["1", "2", [1]], ["1", [1], "2"]), [])
assertArraysEqual(without(["1", "2", [1]], [[3], "2", 1]), ["1", [1]])

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);