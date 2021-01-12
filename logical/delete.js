/*
delete is a unary operator that attempts to delete the object property
or array element specified as its operand
*/

let o = { x: 1, y: 2 }; // Start with an object
delete o.x; // Delete one of its properties
console.log("x" in o); // => false: the property does notexist anymore

let a = [1, 2, 3]; // Start with an array
delete a[2]; // Delete the last element of thearray
console.log(2 in a); // => false: array element 2 doesn'texist anymore
console.log(a.length); // => 3: note that array lengthdoesn't change, though
console.log(a);
