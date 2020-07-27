// if middle = 0, return: []
// if middle is a whole numb, return: array[middle]
// id middle != whole num, return: array[Math.floor(middle)] and array[Math.celi(middle)]


const middle = function (array) {	
	let output = [];
	let middleIndex = array.length / 2;
	let evenElements = array.length % 2
	
	if (array.length === 1 || array.length === 2) {
		return output;
	} else {
		if (evenElements !== 0) {
			output.push(array[Math.floor(middleIndex)]);
			return output;
		} else {
			output.push(array[middleIndex - 1]);
			output.push(array[middleIndex]);
			return output;
		}
	} 
};
module.exports = middle