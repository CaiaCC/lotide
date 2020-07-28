// const assertEqual = function(actual, expected) {
	// if (actual === 0) {
	// 	actual = undefined;
	// }
// 	if (actual === expected) {
//     console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
//   }
// };

// Object.keys(…) if o

const countOnly = function(allItems, itemsToCount) {
	// let inspect = Object.keys(itemsToCount);
	let results = {};
	
	for (const item of allItems) {
		if (itemsToCount[item]) {
			if (results[item]) {
				results[item] += 1;
			} else {
				results[item] = 1;
			}
		}
	}
	// for(let i = 0; i < inspect.length; i++) {
	
	// 	let inspectItem = inspect[i];

	// 	for (let j = 0; j < allItems.length; j++) {
	// 		if (itemsToCount[inspectItem] && inspectItem === allItems[j]) {
	// 			count += 1;
	// 		} 
	// 	}
	// 	results[inspectItem] = count;
	// }
	return results;
}

module.exports = countOnly
