const assertEqual = function(actual, expected) {
  if (actual === expected) {
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
    } else if (obj1[i] !== obj2[i]) {
      return false;
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([["a", "b"], "2", "3"], [["a", "b"], "2", "3"]), true);
assertEqual(eqArrays([["a", "b"], "2", "3"], [["a", "b"], "2", 3]), false);

const test = [1,2,3];
assertEqual(eqArrays(test, test), true);

assertEqual(eqArrays([{a: "test", b: "test2"}, "2", "3"], [{a: "test", b: "test2"}, "2", "3"]), true);
assertEqual(eqArrays([{a: "test", b: "test2"}, "2", "3"], [{a: "test", b: "fail"}, "2", "3"]), false);
assertEqual(eqArrays([{a: "test", b: "test2"}, "2", "3"], [{a: "test", bc: "test2"}, "2", "3"]), false);
assertEqual(eqArrays([{a: "test", b: "test2"}, "2", "3"], [{a: "test", bc: "fail"}, "2", "3"]), false);

assertEqual(eqArrays({a: "test", b: "test2"}, {b: "test2", a: "test"}), true);