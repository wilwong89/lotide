const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} + " !== ${expected}`);
  }
};

const findKey = function(inputObject = {}, callback = ()=>false) {
  for (const key in inputObject) {
    if (callback(inputObject[key])) return key;
  }
};

const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const test1 = x => x.stars === 2;
const test2 = x => x.stars === 7;
findKey(obj1, test1);

assertEqual(findKey(obj1, test1), "noma");
assertEqual(findKey(obj1, test2), undefined);
assertEqual(findKey(obj1), undefined);