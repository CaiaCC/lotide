const assertLetterEqual = function(actual, expected) {
	let isEqual = isObjEqual(actual, expected);

	if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

const letterPositions = function (sentence) {
	let result = {};
	let sentenceArray = sentence.split('');
	let index = 0;
	
	for (let letter of sentenceArray) {
		if (letter === " ") {
	  } else {
			if (result[letter]) {
				
				result[letter].push(sentenceArray.indexOf(letter, index));
			} else {
				result[letter] = [sentenceArray.indexOf(letter)];
			}
		}
		index += 1;
	}
	return result;
}

const isObjEqual = function (obj1, obj2) {
	return JSON.stringify(obj1) === JSON.stringify(obj2);
}

assertLetterEqual(letterPositions("lighthouse in the house"), 
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
})