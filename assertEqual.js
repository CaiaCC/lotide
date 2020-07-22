// var assert = require('assert');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Lab", "Bootcamp");
assertEqual("Boot camp", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(3, 1);
assertEqual(0.3, 1);

// assert.equal(assertEqual("Lighthouse Lab", "Bootcamp"), "Assertion failed: Lighthouse Lab!==Bootcamp");
// assert.equal(assertEqual(1, 1), "Assertion passed: 1 === 1")