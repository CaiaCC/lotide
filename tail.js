const assertEqual = function(array1, array2) {
	array1.shift();
	
  const array1ToString = array1.join("");
  const array2ToString = array2.join("");

  if (array1ToString === array2ToString) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else if (array1ToString !== array2ToString) {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};

assertEqual(["Lighthouse Lab", "Bootcamp"], ["Bootcamp"]);
assertEqual(["Boot camp", "Bootcamp"], ["Bootcamp"]);
assertEqual(["Bootcamp", "Lighthouse Lab", "Caia"], ["Bootcamp"]);
assertEqual([3, 0 ,"hi"], [0 ,"hi"]);
assertEqual([1, 0.3], [1]);
assertEqual([], []);
assertEqual([1], [1]);