let o={} // o inherits object methods fromObject.prototype
o.x =1;
let p=Object.create(o);// p inherits properties from o and object.prototype
console.log("p: %o",p)
p.y=2;
let q = Object.create(p);//q inhertits properties from p,o,object.prototype
console.log("q: %o",q)
let f = q.toString();//tostring is inherited from object.prototype
console.log("f:",f)
console.log("q.x+q.y",q.x+q.y);


let unitcircle = { r:1 }; //An object to inherit from
let c = Object.create(unitcircle);
c.x = 1;c.y=1;
c.r=2;
console.log("child r:",c.r);
console.log("unitcircle r:",unitcircle.r);