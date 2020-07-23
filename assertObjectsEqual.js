const assertObjectEqual = function(actual, expected) {
    const inspect = require('util').inspect; 
    let isEqual = (eqObjects(actual, expected));

	if (isEqual) {
        console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

const eqObjects  = function (obj1, obj2) {
	let obj1Array = Object.keys(obj1);
	let obj2Array = Object.keys(obj2);

	if (obj1Array.length !== obj2Array.length) {
    	return false;
	} else {
		for (let ele1 of obj1Array) {
			const val1 = obj1[ele1];
			
			const val2 = obj2[ele1];

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

assertObjectEqual(ab, ba);
assertObjectEqual(ab, abc);
assertObjectEqual(ab, abc);
assertObjectEqual(bb, abc);
assertObjectEqual(cd, dc);
assertObjectEqual(cd, cd2);