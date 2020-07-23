const assertObjectEqual = function(actual, expected) {
  let isEqual = (eqObjects(actual, expected))

	if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

// { "trent": "skinny", "caia":"fat"}
// { "trent": "skinny", "caia":"really fat"}

const eqObjects = function (obj1, obj2) {
	let obj1Array = Object.keys(obj1);
	let obj2Array = Object.keys(obj2);

	if (obj1Array.length !== obj2Array.length) {
    	return false;
	} else {
		for (let ele1 of obj1Array) {
			if (obj1Array[ele1] !== obj2Array[ele1]) {
				return false;
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

console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));
console.log(eqObjects(ab, abc));
console.log(eqObjects(bb, abc));
