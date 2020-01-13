const assertEqual = require("./assertEqual")

const eqObjects = function(obj1, obj2) {
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
      return eqObjects(obj1[i], obj2[i]);
      //Actual test of values
    } else if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

//Objects
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//Arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

//Nested
const ccd = {c: ["c", "d", 1], d: ["c", "d"]};
const dcc = {d: ["c", "d"], c: ["c", "d", 1]};
assertEqual(eqObjects(ccd, dcc), true);

const dcc11 = {d: ["c", "d"], c: ["c", "d", 1, 1]};
assertEqual(eqObjects(ccd, dcc11), false);


const cq = {c: ["c", "d", {q: "qq"}], d: ["c", "d"]};
const qc = {d: ["c", "d"], c: ["c", "d", {q: "qq"}]};
assertEqual(eqObjects(cq, qc), true);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false

assertEqual(eqObjects("a", "a"), true);