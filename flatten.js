const newArr = [];

const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  for (const ele of arr) {
    if (Array.isArray(ele)) {
      flatten(ele);
    } else {
      newArr.push(ele);
    }
  }
  return newArr;
};

module.exports = flatten;
