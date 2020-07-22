// if middle = 0, return: []
// if middle is a whole numb, return: array[middle]
// id middle != whole num, return: array[Math.floor(middle)] and array[Math.celi(middle)]

const middle = function (array) {	
	let output = [];
	let middleIndex = array.length / 2;
	let evenElements = array.length % 2
	
	if (array.length === 1 || array.length === 2) {
		return output;
	} else {
		if (evenElements !== 0) {
			output.push(array[Math.floor(middleIndex)]);
			return output;
		} else {
			output.push(array[middleIndex - 1]);
			output.push(array[middleIndex]);
			return output;
		}
	} 
};

console.log(middle([1, 4, 6, 7, 7, 3, 6]));


const eqArrays = function (array1, array2) {	
	array1 = middle(array1);
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



const assertArraysEqual = function (array1, array2) {
	let input = eqArrays(array1, array2);

	if (input) {
		console.log(`✅✅✅ Assertion passed: ${middle(array1)} === ${array2}`);
	} else {
		console.log(`🛑🛑🛑 Assertion failed: ${middle(array1)} !== ${array2}`);
	}
};

assertArraysEqual([1, 2, 4, 3], [2, 4]);