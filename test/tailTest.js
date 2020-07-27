const assert = require('chai').assert.deepEqual;
const tail = require('../tail');

describe("#tail", () => {
	it ("should return pass", () => {
		assert(tail([3, 0 ,"hi"]), [0 ,"hi"]);
	});

	it ("should return pass", () => {
		assert(tail([]), []);
	});
});
// console.log(eqArrays(tail(["Lighthouse Lab", "Bootcamp"]), ["Bootcamp"]));
// eqArrays(tail(["Bootcamp", "Lighthouse Lab", "Caia"]), ["Bootcamp"]);
// eqArrays(tail([3, 0 ,"hi"]), [0 ,"hi"]);
// eqArrays(tail([1, 0.3]), [1]);
// eqArrays(tail([]), []);
// eqArrays(tail([1]), [1]);