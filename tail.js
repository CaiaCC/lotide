const assertEqual = function(array1, array2) {
  if (ifEqual(tail(array1), array2)) {
    console.log(`✅✅✅ Assertion passed: ${tail(array1)} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${tail(array1)} !== ${array2}`);
  }
};

const tail = function(array) {
  let newArray = [];

  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const ifEqual = function(array1, array2) {
  if (array1.toString() === array2.toString()) {
    return true;
  } else {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

  


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(["Lighthouse Lab", "Bootcamp"], ["Bootcamp"]);
assertEqual(["Boot camp", "Bootcamp"], ["Bootcamp"]);
assertEqual(["Bootcamp", "Lighthouse Lab", "Caia"], ["Bootcamp"]);
assertEqual([3, 0 ,"hi"], [0 ,"hi"]);
assertEqual([1, 0.3], [1]);
assertEqual([], []);
assertEqual([1], [1]);