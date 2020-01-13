const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

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