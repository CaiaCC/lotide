const assertEqual = require("../assertEqual");

const assert = require('chai').assert.strictEqual;
const head = require('../head');

describe("#head", () => {
	it("should returns 1 for [1, 2, 3]", () => {
		assert(head([1, 2, 3]), 1);
	});

	it("should returns 4 for [4, 1, 2, 3]", () => {
		assert(head([4, 1, 2, 3]), 4);
	});
});
// assertEqual(head(["Lighthouse Lab"]), "Bootcamp");
// assertEqual(head(["Boot camp", "Bootcamp"]), "Bootcamp");
// assertEqual(head(["Bootcamp", "Lighthouse Lab", "Caia"]), "Bootcamp");
// assertEqual(head([3, 0 ,"hi"]), 1);
// assertEqual(head([1, 0.3]), 1);
// assertEqual(head([]), 1);
// assertEqual(head([1]), 1);

