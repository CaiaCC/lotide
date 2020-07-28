

const findKey = function(obj, callback) {
	let nameArray = Object.keys(obj);

	for (let name of nameArray) {
		if (callback(obj[name])) {
			return name;
		} 
		
	}
	return undefined;
}

module.exports = findKey



// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
//   }
// };


