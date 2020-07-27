const assert = require('chai').assert.strictEqual;
const eqArrays = require('../eqArrays')

describe("#eqArrays", () => {
	it("should return true for [1, 2, 3], [1, 2, 3])", () => {
		assert(eqArrays([1, 2, 3], [1, 2, 3]), true);
	});
});

// assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true);