//let,const,var are ways of defining something
//let and var are used to define variables and can
//be modified later
//const is used to define a constant value,and
//cannot be changed later

//var example
var a = "var string";
console.log(a);
var a = "var string2"; //1
console.log(a);
//using var again (1) to modify a variable is allowed
//this isnt allowed in let
//prefer not to use var as it defines variables
//globally. Instead let only defines variables for the
//block {}  it is in. Example:
let b = "let string";
console.log(b);
//to redefine it, just do (variable) = new value
b = "let string2";
console.log(b);

//const example
const pi = "pi is a constant";
console.log(pi);
//now the variable 'pi' cannot be modified

//Some variable rules

//Variable names must start with a letter (a-z, A-Z), an underscore (_), or a dollar sign ($).
//A variable name cannot start with a digit
//Are cAse-SensItivE
//Variable names cannot be any of the JavaScript reserved keywords (e.g., if, else, function, var, let, const, return, class, etc.).
//Variable names cannot contain spaces
