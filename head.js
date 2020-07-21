const assertEqual = function(array, element) {
	let firstElement = array.shift();

	if (firstElement === element) {
    console.log(`✅✅✅Assertion passed: ${firstElement} === ${element}`);
  } else if (firstElement !== element) {
    console.log(`🛑🛑🛑Assertion failed: ${firstElement} !== ${element}`);
  }
};

assertEqual(["Lighthouse Lab"], "Bootcamp");
assertEqual(["Boot camp", "Bootcamp"], "Bootcamp");
assertEqual(["Bootcamp", "Lighthouse Lab", "Caia"], "Bootcamp");
assertEqual([3, 0 ,"hi"], 1);
assertEqual([1, 0.3], 1);
assertEqual([], 1);
assertEqual([1], 1);