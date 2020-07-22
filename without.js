const without = function (array1, array2) {
	let newArray1 = [];
	const values = new Set();// "new set" is and object, create a database

	for (let i = 0; i < array2.length; i++) {
		values.add(array2[i]);
	}

	for (let i = 0; i < array1.length; i++) {
		if (!values.has(array1[i])) {
			newArray1.push(array1[i]);
		}
	}

	// for (let i = 0; i < array1.length; i++) {
	// 	let itemFound = false;

	// 	for (let j = 0; j < array2.length; j++) {
	// 		if (array1[i] == array2[j]) {
	// 			itemFound = true;
	// 		}
	// 	}
	// 	if (!itemFound) {
	// 		newArray1.push(array1[i]);
	// 	}
	// }
	// console.log(newArray1);
	return newArray1;
	
};

const eqArrays = function (array1, array2) {	
	if (array1.length !== array2.length) {
		return false;
	}

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
without(words, ["world", "lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);


// const func1 = function() {
// 	let trent = 5;
// 	func2();
// }

// const func2 = function() {
// 	const caia = 4;
// 	func3()
// 	const treee = 10;
// 	const values = new Set();
// 	const values2 = values;
// }

// const func3 = function() {
// 	const pooop = 4;
// }

// func1();



						
						
						
						
// 						         new Set();
// Stack -------             Heap    ---------






// Heap
// [   0101010101 = "hello"                    ]


// Stack

// [0101010101 = "hello" 0101010101 = "caia"]



