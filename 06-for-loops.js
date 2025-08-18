const ps = require("prompt-sync");
const prompt = ps();
/*
Loops are used to perform repeated actions.
Example: Printing every number from 0 to 100

Types of loops:

1. for loop
Syntax: for (initial statement;condition;loop body){
 statements
}

initial statement: runs once at the start of the
loop
condition: condition
loop body: statement that runs every time at the
end of the loop until the condition is returned
false
statements: code to be run every time until the
condition is returned false

Order:
° initial statement(once)

• condition is checked
• if condition is true, statements are executed
• if condition is true, loop body is executed

The last three steps are repeated over and over
until the condition is returned false
*/

//example: printing first 40 natural numbers from

console.log('for loop example 1');
console.log('Printing first 40 natural numbers');

for(let n = 0; n <= 40; n++){
console.log(n);
}

console.log('');

//example 2: add first 'm' natural numbers

console.log('for loop example 2');

console.log("Add first 'm' natural numbers");

let m = prompt('m = ');
m = Number.parseInt(m);

let sum = 0;

for(let i = 1;i <= m; i++){
 sum = i + sum
}
console.log('Result:',sum);
console.log('');
/*
for ... in loop is a variant of for loop that gets
all the keys from an object(and arrays) one by one.
Syntax:
 for(variable in object ){
statements
}
*/

console.log('for ... in loop example');
let obj = {
 ab: 72,
 bc: 37,
 cd: 48,
 de: 26,
 ef: 68
}

for (let a in obj){
console.log('Value of', a ,'is', obj[a] );
}
console.log('');

/*
for ... of loop works like the for ... in loop
but instead of keys, it gets the values of an object
For this loop to work, the object needs to be
an iterable(these include string, array, etc).

Syntax:
 for (variable of object ){
statements
}
*/

console.log("for ... of loop example:");
for ( let b of "javascript"){
console.log(b);
}
console.log('');







// sorry for bad explanation
