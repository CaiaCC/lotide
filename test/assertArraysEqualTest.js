const assert = require('chai').assert.strictEqual;
const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 4, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3, 9], [1, 2, 3, 8]);
// assertArraysEqual([1, 2], [1, 2, 3]);

describe("#assertArraysEqual", () => {
	it("should return Assertion passed: 1,2,3 === 1,2,3 for [1, 2, 3], [1, 2, 3] ", () => {
    assert(assertArraysEqual([1, 2, 3], [1, 2, 3]));
	});
});