const letterPositions = (sentence) => {
  let result = {};

  for (let index in sentence) {
    if (sentence[index] !== " ") {
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
