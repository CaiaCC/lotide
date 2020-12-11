const without = (source, itemsToRemove) => {
  const set = new Set();
  const resultArr = [];

  for (let item of itemsToRemove) {
    set.add(item);
  }

  for (element of source) {
    if (!set.has(element)) {
      resultArr.push(element);
    }
  }

  return resultArr;
};

module.exports = without
