const assert = require('chai').assert.strictEqual;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

	it ("should return 1, undefine, 2", () => {
		const firstNames = [
			"Karl",
			"Salima",
			"Agouhanna",
			"Fang",
			"Kavith",
			"Jason",
			"Salima",
			"Fang",
			"Joe"
		];
		const result1 = countOnly(firstNames, {Jason: true, Karima: true, Fang: true});

		assert(result1["Jason"], 1);
		assert(result1["Karima"], undefined);
		assert(result1["Fang"], 2);
	});
});


