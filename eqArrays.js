const eqArrays = function (array1, array2) {	
	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
      if (array1[i] !== array2[j]) {
				return false;
			} 
		}
	}
	return true;
};
	console.log(eqArrays([1, 3, 3], [1, 2, 3]))
	
	const assertEqual = function (actual, expected) {
	
		if (actual === expected) {
			console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
		} else {
			console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
		}
	};

assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true);