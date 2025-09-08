/*
A string is a collection of characters. They are
used to store and manipulate text.
A string can be declared using single quotes or
double quotes but, strings that start with sigle
quote must end with a single quote and strings
created with a double quote must end with a double
quote.
A string can be created using let/var/const
*/
let str = 'example string';
//To access it,we can use the variable's name:
console.log(str);
console.log('');
/* We can find the length(number of characters) of
a string using the 'length' property.
Syntax:
string.length
*/
console.log('length of string = ',str.length);
console.log('');
/* To access a specific character of a we using
the syntax string[index] where index is the
position of the character we want to access.
Note that the index starts from zero i.e.,
string[0] will give the first character. */
console.log('First character of string: ',str[0]);
console.log('');

/* We can also define a string using backtics(``).
These are called template literals. With these,
we can use variables inside of strings. To use a
variable, we can put the variable name inside
the curly brackets with a dollar sign($) at the
start : `${variable-name}`
*/
/* So, instead of using:
console.log('Value of string is: ',str);
we can just use:       */
console.log(`Value of string is ${str}`)
//The second method reduces the usage of commas
console.log('');

/*    Escape sequence characters
Suppose we want to use a single quote, inside a
single quote string. For example, I want str to be:
str = ' 'example' string'
This will give out an error as it is incorrect
syntax. In this case, we can use an escape sequence
character:       */
str = '\'example\' string';
/* Here, the backslash(\) is the escape sequence
character that lets us use a single quote in a
single quote string. This also works for double
quote strings and template literals. */
console.log(str);
/* Although the \' is technically two characters,
is is interpreted as a single character */
console.log(str.length);
/* Some more escape sequence characters:
\n - new line
\t - tab	
\r - carriage return

*/
console.log('Javascript is a pretty \n difficult language')
//here, the 'difficult language' will print in
//the next line
console.log('abcd \r efgh')
