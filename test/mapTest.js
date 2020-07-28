const assert = require('chai').assert.deepEqual;
const map = require('../map');



describe("#map", () => {
	
  it("shoud return [ 'g', 'c', 't', 'm', 't' ]", () => {
		const words = ["ground", "control", "to", "major", "tom"];
		const results1 = map(words, word => word[0]);
		console.log(results1)
		assert(results1, [ 'g', 'c', 't', 'm', 't' ]);
	});

	

});

