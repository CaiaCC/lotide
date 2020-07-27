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
* `head(...)`:returns the first item in the array
* `tail(...)`:returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `middle(...)`: takes in an array and returns an array contains the most middle element from the input array
* `asseertArraysEqual(...)`:take in two arrays and console.log an appropriate message to the console.
* `assertEqual(...)`: the function compare the two values it takes in and print out a message telling us if they match or not
* `*eqArray(...)`: takes in two arrays and returns true or false, based on a perfect match.