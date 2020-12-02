const head = function (arr) {
  return arr.shift();
}

// const assertEqual = function(array, element) {
// 	let firstElement = array.shift();

// 	if (firstElement === element) {
//     console.log(`👍 Assertion passed: ${firstElement} === ${element}`);
//   } else if (firstElement !== element) {
//     console.log(`❌ Assertion failed: ${firstElement} !== ${element}`);
//   }
// };

module.exports = head;