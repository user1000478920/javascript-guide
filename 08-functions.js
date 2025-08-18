const ps = require("prompt-sync");
const prompt = ps();

/*
Sometimes there are certain blocks of code that may
need to be used multiple times in a single file.
Instead of copying the code block repeatedly,we
can seperate that logic from the rest of the code.
This task can be done with the help of functions
in javascript. And with these, we can also use
different parameters(inputs) for our function
to get different results.
The return statement is optional and ends the
function and outputs with the given expression

Syntax:
To define a function:
function name(parameters){
code to be executed
return expression(optional)
}

To use a function:
name(params)

We can also define functions by using 'arrow'
functions. Their syntax is a bit different:
const name = (params) =>{
code to be executed
return expression(optional)
}
or we can also define them as:
const name = (params) => expression
Here the output of the expression is returned

name: name of function
parameters: inputs of function(optional), seperated
by commas `,`. These work as local variables for
the function body


Examples: console.log(), prompt(), Numbet.parseInt()
*/
console.log('Functions');
//Example: newline: prints an empty line
function newline(){
console.log('');
return " ";
}

newline()
console.log('Facrorial calculator');
//Factorial calculator
function factorial(m){
let temp = 1; //defined only for this function
let res = 1; //same as above
m = Number.parseInt(m);
 while( temp <= m ){
 console.log(temp, '*' ,res);
 res = res * temp
 temp++
 }
 return res
}
let n = prompt('Enter number: ');
console.log('Factorial of ',n,'is:', factorial(n) )
newline();
//arrow function
const sum = (a,b) => a+b

console.log('Sum of',2,'and',9,'is',sum(2,9));
newline();
