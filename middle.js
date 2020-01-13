const middle = function(inputArray) {
  let newArray = [];

  if (inputArray.length < 2) return newArray;
  let middleIndex = (inputArray.length - 1) / 2;
  let keysForMiddleElements = [];

  //Add middle index rounded down, if not integer, add middle index rounded up.
  keysForMiddleElements.push(Math.floor(middleIndex));
  if (middleIndex % 2 !== 0) {
    keysForMiddleElements.push(Math.ceil(middleIndex));
  }

  keysForMiddleElements.forEach(element => {
    newArray.push(inputArray[element]);
  });
  
  return newArray;
};

module.exports = middle;