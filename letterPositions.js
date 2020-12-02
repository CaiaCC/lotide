// const letterPositions = function (sentence) {
// 	let result = {};
// 	let sentenceArray = sentence.split('');
// 	let index = 0;
	
// 	for (let letter of sentenceArray) {
// 		if (letter === " ") {
// 	  } else {
// 			if (result[letter]) {
				
// 				result[letter].push(sentenceArray.indexOf(letter, index));
// 			} else {
// 				result[letter] = [sentenceArray.indexOf(letter)];
// 			}
// 		}
// 		index += 1;
// 	}
// 	return result;
// };
const letterPositions = (sentence) => {
  let result = {};
	
	for (let index in sentence) {
		if (sentence[index] !== ' ') {
      if (result[sentence[index]]) {
        result[sentence[index]].push(index);
      } else {
				result[sentence[index]] = [index];
			}
		}
	}
  return result;
};

module.exports = letterPositions
