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

const assertEqual = function (array1, array2) {
	let input = eqArrays(array1, array2);

	if (input) {
		console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
	} else {
		console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
	}
};

assertEqual([1, 2, 3], [1, 2, 3]);