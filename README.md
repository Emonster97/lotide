# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Emonster97/lotide`

**Require it:**

`const _ = require('@Emonster97/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assertion tests to check if arrays are equal to each other
* `assertEqual(...)`: assertion tests to check if values are equal to each other
* `assertObjectsEqual(...)`: assertion tests to check if objects are equal to each other
* `countLetters(...)`: counts the number of times each letter appears
* `countOnly(...)`: counts the number of times a specific element appears
* `eqArrays(...)`: compares arrays
* `eqObjects(...)`: compares objects
* `findKey(...)`: finds a key in an object by index
* `findKeyByValue(...)`: finds a key in an object by value
* `head(...)`: returns the start of an array
* `letterPositions(...)`: gives you the index of each letter in a string
* `map(...)`: maps the first letter of each value in an array
* `middle(...)`: returns the middle of an array
* `tail(...)`: returns the end of an array
* `takeUntil(...)`: returns a string until it runs into a specified value/character
* `without(...)`: takes away specified items from an array