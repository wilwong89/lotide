const eqArrays = function(obj1, obj2) {
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



module.exports = eqArrays;
