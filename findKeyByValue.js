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

