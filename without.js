const without = function (array1, array2) {
	let newArray1 = array1;

	for(let i = 0; i < array2.length; i++) {
		for (let j = 0; j< array1.length; j++) {
			if (array2[i] === array1[j]) {
        newArray1.splice(j, 1);
			}
		}
	}
	return newArray1;
};

const eqArrays = function (array1, array2) {	
	let isequal = true;
	let i = 0;
	while(i < array2.length) {
		if (array1[i] !== array2[i]) {
			isequal = false;
			return false;
		}
		i++;
	}
		return isequal;
};

const assertArraysEqual = function (array1, array2) {
	let input = eqArrays(array1, array2);

	if (input) {
		console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
	} else {
		console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
	}
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);