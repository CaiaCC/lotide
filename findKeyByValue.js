// const findKeyByValue = function (obj, val) {
// 	let keys = Object.keys(obj);
// 	let foundKey;

// 	for (let key of keys) {
// 		if (obj[key] === val) {
// 			foundKey = key;
// 	  } else {
//       foundKey = undefined;
// 		}
// 	}
// 	return foundKey;
// }

const findKeyByValue = (obj, val) => {
  let foundKey;

  for (const key in obj) {
    if (obj[key] === val) {
      foundKey = key;
    } else {
      foundKey = undefined;
    }
  }
  return foundKey;
};

module.exports = findKeyByValue

