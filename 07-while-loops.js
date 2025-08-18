const ps = require("prompt-sync");
const prompt = ps();
/*
The While loop is a type of a loop that keeps
executing a block of code if the given condition
is true. The loop only stops when the condition is
returned false. We have have to use while loops
with caution as if the contition never becomes
false, the loop will keep running which might crash
the runtime.

A small diagram to help visualize:
condition is checked
    ||
    \/
code is executed  if condition is true
    ||
    \/
condition is checked
    ||
    \/
code is executed  if condition is true
... and this process keeps repeating until the
condition is false

Syntax:
 while(condition){
code to be executed when condition is true
 }
*/

//Counter program
{
console.log('What number do you want the program to count to?');
let n = prompt('Enter:');
n = Number.parseInt(n);
let i = 0;
while(i <= n){
 console.log(i);
 i++
 }
}
/* I've placed the program inside a block{} so that
the variables are restricted only to this block
(because let is block oriented) and I can reuse
them later. */

/*
The do ... while loop is very similar to the while
loop but in this loop the code is executed first,
then the condition is checked. If condition is
true, code is executed again. This ensures the
block of code runs atleast once.

Diagram:

code is executed
    ||
    \/
condition is checked
    ||
    \/
code is executed  if condition is true
    ||
    \/
condition is checked
    ||
    \/
code is executed  if condition is true
... and so on until the condition is false.

Syntax:
do{
code to be executed
}while(condition)
*/

//Counter program
{
console.log('What number do you want the program to count to and where to start from?');
let i = prompt('Start from: ');
let n = prompt('Count to: ');
i = Number.parseInt(i);
n = Number.parseInt(n);

do{
 console.log(i);
 i++
 }while( i <= n)
}
