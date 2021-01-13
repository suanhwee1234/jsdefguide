/*
3 types of object creation
object literal
new operator
*/

/*
object literal
create object
simplest form

object literal that is a comma list of colon seperated name


*/


// simple object literals
let empty = {}; // An object with noproperties
let point = { x: 0, y: 0 };// Two numericproperties
let p2 = { x: point.x, y: point.y + 1 };// More complexvalues

let book = {
    "main title": "JavaScript",// These property names include spaces
    "sub-title": "The Definitive Guide",// and hyphens, souse string literals.
    for: "all audiences", // for is reserved,but no quotes.
    author: {// The value of this property is
        firstname: "David",// itself an object.
        surname: "Flanagan"
    }
};

console.log(book.author)
console.log(book["sub-title"])


/**
 * new operator creates and initializes a new project
 *  
 */

let o=new Object();// Create an empty object: same as {}.
let a=new Array();// Create an empty array: same as [].
let d=new Date();// Create a Date object representingthe current time
let r=new Map();// Create a Map object for key/valuemapping

a=[1,2,3]
console.log("o typeof:",typeof o)
console.log("a typeof:",typeof a)
console.log("d typeof:",typeof d)
console.log("d typeof:",typeof 'blubber')

/**
 * prototypes
 * every object has 2 object
 * 1 itself and inherits properties from prototype
 * 2 prototype
 * 
 * All objects have a prototype except object.prototype
 * small number of objects have prototype property
 * this small number of object define the prototypes for all other
 * objects
 * eg. Date.prototype inherits Object.prototype
 * new Date inherits properties from Date.prototype
 * and Object.prototype
 * this forms the prototype chain
 */

 /**
  * Object.create()
  * creates a new object, using its first argument asthe prototype of that object
  * Usage: prevent changes from external libs
  * let o ={x:"dont change this value"};
  * library.function(Object.create(o)); guard against accidental modifications
  */
 let o1 =Object.create({x:1,y:2}); // o1 inherits properties x and y
console.log("o1.x+o1.y=",o1.x+o1.y)


//creates object without prototype, no props or methods
let o2=Object.create(null); 

//creates ordinary empty object {} or new Object() passes Object.prototype
let o3 = Object.create(Object.prototype);

