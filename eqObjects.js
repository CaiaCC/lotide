const assertObjectEqual = function(actual, expected) {
	let isEqual = (eqObjects(actual, expected))

	if (isEqual) {
		console.log(`✅✅✅ Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
	} else {
		console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
	}
};

const eqArrays = function (array1, array2) {
	if (array1.length !== array2.length) {
		return false;
	}	
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	}
	return true;
};

// { "trent": "skinny", "caia":"fat"}
// { "trent": "skinny", "caia":"really fat"}
/*
const eqObjects = function (obj1, obj2) {
	let obj1Keys = Object.keys(obj1);
	let obj2Keys = Object.keys(obj2);

	if (obj1Keys.length !== obj2Keys.length) {
    	return false;
	} else {
		for (let key1 of obj1Keys) {
			const val1 = obj1[key1];
			const val2 = obj2[key1];

			if (Array.isArray(val1) && Array.isArray(val2)) {
				if (!eqArrays(val1, val2)) {
					return false;
				}
			} else {
				if (val1 !== val2) {
					return false;
				}
			}
		}
	}
	return true;
}*/
const eqObjects = function (obj1, obj2) {
	let obj1Keys = Object.keys(obj1);
	let obj2Keys = Object.keys(obj2);

	if (obj1Keys.length !== obj2Keys.length) {
    	return false;
	} else {
		for (let key1 of obj1Keys) {
			const val1 = obj1[key1];
			const val2 = obj2[key1];

			if (Array.isArray(val1) && Array.isArray(val2)) {
				if (!eqArrays(val1, val2)) {
					return false;
				} else if (!Array.isArray(val1) && !Array.isArray(val2)) {
          if(!eqObjects(val1, val2)) {
						return false;
					}
			  } 
			} else {
				if (val1 !== val2) {
					return false;
				}
			}
		}
	}
	return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// assertObjectEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
// assertObjectEqual(ab, abc); // => false
const bb = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

/*
console.log(eqObjects(ab, ba)); //true

console.log(eqObjects(bb, abc)); //true
console.log(eqObjects(cd, dc)); // true
console.log(eqObjects(cd, cd2)); // false
console.log(eqObjects(ab, abc)); //false
*/
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false