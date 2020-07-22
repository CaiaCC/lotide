const assertEqual = function(actual, expected) {
	if (actual === 0) {
		actual = undefined;
	}
	if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// Object.keys(…) if o

const countOnly = function(allItems, itemsToCount) {
	let inspect = Object.keys(itemsToCount);
	let output = {};
	
	for(let i = 0; i < inspect.length; i++) {
		let count = 0;
		let inspectItem = inspect[i];

		for (let j = 0; j < allItems.length; j++) {
			if (itemsToCount[inspectItem] && inspectItem === allItems[j]) {
				count += 1;
			} 
		}
		output[inspectItem] = count;
	}
	return output;
}


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
// console.log(countOnly(firstNames, {Jason: true, Karima: true, Fang: true}))
const result1 = countOnly(firstNames, {Jason: true, Karima: true, Fang: true});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);