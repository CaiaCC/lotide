

const findKey = function(obj, val) {
	let nameArray = Object.keys(obj);

	for (let name of nameArray) {
		if (val(obj[name])) {
			return name;
		} 
		
	}
	return undefined;
}

module.exports = findKey;
