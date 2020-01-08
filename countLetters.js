const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} + " !== ${expected}`);
  }
};

const countLetters = function (inputString = "") {
  let letterCount = {};
  inputString = inputString.replace(" ", "").toLowerCase();

  for (const letter of inputString) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
}

console.log(countLetters("hallowed"))