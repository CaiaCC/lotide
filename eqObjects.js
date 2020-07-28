const eqArrays = require('./eqArrays')

const eqObjects = function (obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } else {
    for (let key1 of obj1Keys) {
      const val1 = obj1[key1];
      const val2 = obj2[key1];

      if (Array.isArray(val1) && Array.isArray(val2)) {
        if (!eqArrays(val1, val2)) {
          return false;
        }
      } else if (typeof val1 === 'object' && typeof val2 === 'object') {
        if(!eqObjects(val1, val2)) {
          return false;
        }
      } else {
        if (val1 !== val2) {
        return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects