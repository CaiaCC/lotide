# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @caia/lotide`

**Require it:**

`const _ = require('@caia/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

<!-- * `function1(...)`: description -->
* `countLetters(...)`:take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(...)`:takes an array and an object. It will return an object containing counts of everything that the input object listed.
* `equalArrays(...)`:takes in two arrays and returns true or false, based on a perfect match.
* `equalObjects(...)`:takes in two objects and returns true or false, based on a perfect match.
* `findKeyByValue(...)`:takes in two objects and returns true or false, based on a perfect match.
* `findKey(...)`:takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `head(...)`:returns the first item in the array
* `letterPosition(...)`:returns all the indices (zero-based positions) in the string where each character is found.
* `map(...)`: takes in an array and a callback function.Returns a new array based on the results of the callback function.
* `middle(...)`: takes in an array and returns an array contains the most middle element from the input array
* `tail(...)`:returns the "tail" of an array: everything except for the first item (head) of the provided array.
