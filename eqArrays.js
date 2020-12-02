// const eqArrays = function (array1, array2) {
// 	if (array1.length !== array2.length) return false;
	
// 	for (let i = 0; i < array1.length; i++) {
// 		if (array1[i] !== array2[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let index in array1) {
		const val1 = array1[index];
		const val2 = array2[index];

		if (Array.isArray(val1) && Array.isArray(val2)) {
			if (!eqArrays(val1, val2)) return false;
		} else {
			if (val1 !== val2) return false;
		}
  }
  return true;
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); //true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));//false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));//false

module.exports = eqArrays;

