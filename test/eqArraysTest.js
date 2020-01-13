const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

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

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false