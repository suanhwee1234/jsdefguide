/**
 *
 * The in operator expects a left-side operand that is a string, symbol, or value
 * that can be converted to a string.
 * It expects a right-side operand that is an object.
 * It evaluates to true if the left-side value is the name of a property of the right-side object
 */

console.log("test");
let point = { x: 1, y: 1 }; // Define an object
console.log("x" in point); // => true: object has propertynamed "x"
console.log("z" in point); // => false: object has no "z"property.
console.log("toString" in point); // => true: object inherits toString method
let data = [7, 8, 9]; // An array with elements(indices) 0, 1, and 2
console.log("0" in data);
console.log(1 in data); // => true: numbers are convertedto strings
console.log(3 in data); // => false: no element 3
console.log();
