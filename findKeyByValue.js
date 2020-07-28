const findKeyByValue = function (obj, val) {
	let keyArray = Object.keys(obj);
	let output;

	for (let element of keyArray) {
		if (obj[element] === val) {
			output = element;
	  } else {
      output = undefined;
		}
	}
	return output;
}
module.exports = findKeyByValue



