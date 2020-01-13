const tail = function(array) {
  return array.slice().splice(1, array.length - 1);
};

module.exports = tail;

