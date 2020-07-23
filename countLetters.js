const assertLetterEqual = function(actual, expected) {
	let isEqual = isObjEqual(actual, expected);

	if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

const countLetters = function (sentence) {
	let result = {};

	for (let letter of sentence) {
		if (result[letter]) {
		  result[letter] += 1;
	  } else {
		  result[letter] = 1;
		}
	}
	return result;
}

const isObjEqual = function (obj1, obj2) {
	return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(countLetters("Caia"));
assertLetterEqual(countLetters("Caia"), { C: 1, a: 2, i: 1 })