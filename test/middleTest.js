const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 4, 3]), [2, 4]);

assertArraysEqual(middle([5, 2, 4, 4]), [2, 4]);