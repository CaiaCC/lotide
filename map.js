// const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
	const results = [];

	for (let item of array) {
	  results.push(callback(item));
	}
	return results;
}

module.exports = map
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

// const results1 = map(words, word => word[0]);
// console.log(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]));
// console.log(eqArrays(map(words, word => word.length), [ 'g', 'c', 't', 'm', 't' ]));
// console.log(eqArrays(map(words, word => word.length), [ 'g', 'c', 't', 'm', 't' ]));