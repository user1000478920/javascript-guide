//Primitive data types: nn bb ss u
//null,number boolean,BigInt string,Symbol undefined
let a = null;
let b = 100478920;
let c = true; //can also be false
let d = BigInt("401") + BigInt("19");
let e = "Euler's number: 2.71...";
let f = Symbol("Symbol");
let g = undefined; //same as `let g`
console.log(typeof a,a);
console.log(typeof b,b);
console.log(typeof c,c);
console.log(typeof d,d);
console.log(typeof e,e);
console.log(typeof f,f);
console.log(typeof g,g);

console.log("")
console.log("Start of Object")
// Non primitive - Object
const the_box = {
 "bool":true,
 "pi":3.141,
 key:"value",
}
//syntax to access a key's value:
// object['key'] or object.key
console.log(the_box["bool"]);
console.log(the_box["pi"]);
console.log(the_box["key"]);
console.log(the_box["name"]);
// note that the values in an object can be modified
// even if the object is declared by a const
console.log("");
the_box['key'] = "new value";
console.log(the_box['key']);
console.log("");
console.log(the_box);