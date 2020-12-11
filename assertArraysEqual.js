const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  let isArrEqual = eqArrays(array1, array2);

  if (isArrEqual) {
    console.log(`👍 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion failed:  ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual
