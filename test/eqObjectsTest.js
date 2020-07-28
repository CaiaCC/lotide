const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

	it ("should return true", () => {
		const ab = { a: "1", b: "2" };
		const ba = { b: "2", a: "1" };

		assert.isTrue(eqObjects(ab, ba));
	});

	it ("should return false", () => {
		const ab = { a: "1", b: "2" };
		const abc = { a: "1", b: "2", c: "3" };

		assert.isFalse(eqObjects(ab, abc));
	});

  it ("should return true for a and b objects", () => {
		const a = { a: { z: 1 }, b: 2 };
		const b = { a: { z: 1 }, b: 2 };
		assert.isTrue(eqObjects(a, b));
	});

	it ("should return false", () => {
		assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
	});

	it ("should return false", () => {
		assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
	});
});
