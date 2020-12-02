const newArr = [];

const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  // if (!arr.length) {
  //   return [];
  // }

  for (const ele of arr) {
    if (Array.isArray(ele)) {
      flatten(ele);
    } else {
      newArr.push(ele);
    }
  }
  return newArr;
};

const a = flatten([1, 2, [3, 4], 5, [6]]);
console.log(a)