const eqObjects = function(obj1, obj2) {
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
      if (!eqObjects(obj1[i], obj2[i])) {
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Objects
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

//Arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

//Nested
const ccd = {c: ["c", "d", 1], d: ["c", "d"]};
const dcc = {d: ["c", "d"], c: ["c", "d", 1]};
assertObjectsEqual(ccd, dcc); // => true

const dcc11 = {d: ["c", "d"], c: ["c", "d", 1, 1]};
assertObjectsEqual(ccd, dcc11); // => false


const cq = {c: ["c", "d", {q: "qq"}], d: ["c", "d"]};
const qc = {d: ["c", "d"], c: ["c", "d", {q: "qq"}]};
assertObjectsEqual(cq, qc); // => true