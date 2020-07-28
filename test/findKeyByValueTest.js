const assert = require('chai').assert.strictEqual;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

	it ("should return drama, undefined", () => {
		const bestTVShowsByGenre = { 
			sci_fi: "The Expanse",
			comedy: "Brooklyn Nine-Nine",
			drama:  "The Wire"
		};
		
		assert(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
		assert(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
	
	});
});