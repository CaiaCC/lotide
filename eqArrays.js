const eqArrays = function (array1, array2) {	
	let isequal = true;
	let i = 0;
	while(i < array1.length) {
		if (array1[i] !== array2[i]) {
			isequal = false;
			return false;
		}
		i++;
	}
		return isequal;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
	
	const assertEqual = function (actual, expected) {
	
		if (actual === expected) {
			console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
		} else {
			console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
		}
	};

assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true);