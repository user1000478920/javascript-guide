/* Extra: alert() and prompt()

The prompt() function prompts the user for an
input and this also shows a popup in a browser and
this also shows the text inside the brackets.

The alert() function is like console.log(), but
it displays the text given inside the brackets
as a popup window in a browser.

Both of these are intended to be used in browsers,
so we will add prompt as an additional requirement
for this project.
*/
const ps = require("prompt-sync");
const prompt = ps();

/*
    Conditonal Statements
These expressions execute a block of code when a
certain condition is met.

Types of conditionals in javascript:
• if ...
• if ... else ...
• if ... elseif ... else

*/

let a = prompt("Enter a number: ");

a = parseInt(a);
//  ^^^^^^^^^^^
// This function converts a string into a number

/* The if statement checks if the condition given
inside the brakets() is true. If it is true, then it
runs the code inside the curly brakets{}. Otherwise
the code won't execute.
Syntax:
if(condition){
 code to be executed if condition is true
}
*/


console.log("If statememt");
if(a>40){
 console.log("The number entered is greater than 40")
}


/* In addition to the if statement, we can add the
else statement that runs the code inside the curly
brackets{} if the condition inside the if(){ }
statement is false.
Syntax:
if(condition){
 code to be executed if condition is true
}
else{
code to be executed if condition if false
}
*/


console.log("");
console.log("if ... else statement");
let b = prompt("Enter something: ");

b1 = parseInt(b)
if(b1 >= 0){
console.log(b,"is a number.")
}
else{
console.log(b,"is not a (positive) number")
}


/* In addition to the if ... else ... statement, we
can add an else if statement in between if we want
multiple code for multiple conditions. There isn't
a limit to how many else ifs one can use.
General syntax:
if(condition1){
 code when condition1 is true
}
else if(condition 2){
 code when condition 2 is true
}
else if(condition 3){
 code when condition 3 is true
}
...
else{
 code when all conditions are false
}
*/
console.log("")
console.log("if ...  else if ... else ...");
let c = prompt("Enter a number between 10 and 100: ");
c1 = parseInt(c)

if( c1 >= 10 && c1 <= 100 ){
console.log(c,"is between 10 and 100");
}
else if( c1 < 10 ){
console.log(c,"is less than 10...");
}
else if( c1 > 100 ){
console.log(c,"is greater than 100...");
}
else{
console.log(c,"isn't even a positive number...");
}



/*     Switch statements
Switch statements check is a given expression
is equal(strict equality) to any one of the case
expressions. Like else if, there isn't a limit to
the number of case statements. These can be used if
you want the user to select an option from a
provided list of options. The break marks the end
of a statement. default is used if the expression
isn't equal to any of the case expressions.

General Syntax:
switch (expression) {
  case caseExpression1:
    statements1
    break;
  case caseExpression2:
    statements2
    break;
  // …
  case caseExpressionN:
    statementsN
    break;
  default:
    statements
}
Here if 'expression' is equal to 'caseExpression1',
then statements1 will execute and the rest will not
be executed. Similarly if 'expression' is equal to
'caseExpression2', statements2 will be executed and
the switch statement will end. Switch cases
evaluate downwards, so if the first one is true,
all other case statements below will not be
checked.
*/

console.log("");
console.log("Switch statement");
console.log("Select from one of the following constantsto know their value");
console.log("[g , pi , e]");
let d = prompt("Selection: ");

switch (d) {
 case "g":
 console.log("g =" ,9.81, "m/s²");
 break;
 case "pi":
 console.log("pi =",3.141);
 break;
 case "e":
 console.log("e =",2.71);
 break;
 default:
 console.log("Invalid option");
}


/*      Ternary operator
The ternary operator can be used as a shorthand
for the if ... else ... statement.
Syntax:
 condition ? truestatement : falsestatement
If the condition is true, 'truestatement' will
run and if it is false(or null, 0, undefined, "")
then falsestatement will run.
*/
console.log("");
console.log("Ternary operator");
let age = prompt("Enter your age: ");
age = parseInt(age);

let candrive = age >= 18 ? "can" : "can not";
console.log("You",candrive,"legally drive");

