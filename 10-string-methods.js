/* String properties and methods

The length property gives the number of characters
in a string. Note: escape sequence characters are
not counted.
Syntax: string.length
*/
//example
let example = "\`String\` methods";
console.log('Original string:',example)
console.log(`Length of \'${example}\' is ${example.length}\n`);

/* The toUpperCase() is a built-in method
that converts the characters of a string to Upper
Case. Similarly, the toLowerCase() method converts
the characters of a string to lower case.
Syntax:
 string.toUppercase()
 string.toLowercase
*/
//example:
console.log(`Upper case: ${example.toUpperCase()}`);
console.log(`Lower case: ${example.toLowerCase()}`);
console.log('');

/* The slice() is also a built-in method that
can make 'slice', or make parts of a string.

Syntax: string.slice(start,end)

This will print the string from the 'start'
of character to the one before 'end' character.
Note: Specify start,end in number , for example
string.slice(1,5) will print from the 1st character
to the 4th character.
Also, this count(index) starts from zero

*/

console.log(`1st to 5th character:`,example.slice(1,5));

/* If the 'end' argument isn't provided, the output
will be 'start' character to the end it the string.
*/

console.log(`4th to end:`,example.slice(4));
console.log('');

/*
The replace() method replaces a particular thing
in a string with something else.

Syntax:
 string.replace(somethig,replacement)

something: what to replace
replacement: with what
*/
console.log("Replacing \"methods\" with \"examples\"");
console.log(example.replace("methods","examples \n"));

/*
The concat() method joins a string at thr end
of another string.

Syntax:
 string.concat(string2,string3,...)

string: original string
string2: string to join at the end of original
string
string3: string to join at the end of string2,
and so on. There is no limit to the number of
arguments, or strings one can join

*/
let string1 = "joining string 1 ";
let string2 = "with string 2 \n";
console.log(string1.concat(string2));

/* Strings are iterable in javascript. This
means that we can access a particular index
(character) in a string using the syntax:

string[index]

Note: Strings are immutable, we can access a
particular character but we cannot change the
value of it without creating another variable.

For example: `string[index] = new value` will
not work
*/
console.log(string1[1]); // prints 'o'

/* A lot of methods haven't been used
in this file. For more info, refer
to the MDN Web Docs. */
