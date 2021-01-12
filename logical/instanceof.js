/* The instanceof operator expects a left-side operand that is an object 
and a right-side operand that identifies a class of objects 

classes of objects are defined by the constructorfunction that initializes them
*/

let d = new Date(); // Create a new object with the Date()constructor
console.log(d instanceof Date); // => true: d was created with Date()
console.log(d instanceof Object); // => true: all objects are instances ofObject
console.log(d instanceof Number); // => false: d is not a Number object
let a = [1, 2, 3]; // Create an array with array literalsyntax
console.log(a instanceof Array); // => true: a is an array
console.log(a instanceof Object); // => true: all arrays are objectsainstanceofRegExp// => false: arrays are not regularexpressions
console.log(a instanceof RegExp); // => false: arrays are not regularexpressions
