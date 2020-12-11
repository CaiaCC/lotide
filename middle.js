const middle = (arr) => {
  const length = arr.length;
  if (length <= 2) return [];

  const middleArr = [];
  const middleIndex = Math.floor((0 + (length - 1)) / 2);

  middleArr.push(arr[middleIndex]);
  if (length % 2 === 0) {
    middleArr.push(arr[middleIndex] + 1);
  }

  return middleArr;
};

module.exports = middle
