// const assertEqual = function(array1, array2) {
//   if (ifEqual(tail(array1), array2)) {
//     console.log(`✅✅✅ Assertion passed: ${tail(array1)} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion failed: ${tail(array1)} !== ${array2}`);
//   }
// };

const tail = function(array) {
  array.shift();
  return array;
};

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

  
module.exports = tail

