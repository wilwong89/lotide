const assertObjectsEqual = require('../assertObjectsEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertObjectsEqual(result.length, 2); // ensure we get back two elements
assertObjectsEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertObjectsEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertObjectsEqual(words.length, 3);