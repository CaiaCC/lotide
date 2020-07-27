const assert = require('chai').assert.deepEqual;
const middle = require('../middle');

describe("#middle", () => {
	it ("should return pass for 1, 2, 4, 3]), [2, 4]", () => {
		assert(middle([1, 2, 4, 3]), [2, 4]);
	});

	it ("should return pass for [5, 2, 4, 4]), [2, 4]", () => {
		assert(middle([5, 2, 4, 4]), [2, 4]);
	});
});

