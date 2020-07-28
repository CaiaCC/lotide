const assert = require('chai').assert.deepEqual;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
	it("should return  { C: 1, a: 2, i: 1 } for Caia", () => {
		assert(countLetters("Caia"), { C: 1, a: 2, i: 1 })
	});
});
