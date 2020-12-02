// const eqArrays = function (array1, array2) {
// 	if (array1.length !== array2.length) {
// 		return false;
// 	}	
// 	for (let i = 0; i < array1.length; i++) {
// 		if (array1[i] !== array2[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };
const eqArrays = require('./eqArrays')
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));

const assertArraysEqual = function (array1, array2) {
	let isArrEqual = eqArrays(array1, array2);

	if (isArrEqual) {
		console.log(`👍 Assertion passed: ${array1} === ${array2}`);
	} else {
		console.log(`❌ Assertion failed:  ${array1} !== ${array2}`);
	}
};

module.exports = assertArraysEqual
