const assertKeyValue = function(actual, expected) {
	if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, val) {
	let keyArray = Object.keys(obj);
	let output;

	for (let element of keyArray) {
		if (obj[element] === val) {
			output = element;
	  } else {
      output = undefined;
		}
	}
	return output;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



assertKeyValue(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertKeyValue(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
