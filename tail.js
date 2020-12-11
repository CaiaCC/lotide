
const tail = function(array) {
  const result = [...array];
  result.shift();
  return result;
};
  
module.exports = tail

