const middle = require("../middle")
const assertArraysEqual = require('../assertArraysEqual');

const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [1, 2, 3, 4, 5, 6];

assertArraysEqual(middle(testArray1), [testArray1[2]]);
assertArraysEqual(middle(testArray2), [testArray1[2],testArray1[3]]);