//Operators

//-+-+-+-+-+-+Arithmetic Operators-+-+-+-+-+-+-+

// Operator |  Function  | Other Form
//——————————+————————————+————————————
//    +     |        add |   a + b
//    -     |   subtract |   a - b
//    *     |   multiply |   a × b
//   **     |   exponent |    aᵇ
//    /     |     divide |   a ÷ b
//    %     |  remainder |   a - ⌊ a ÷ b ⌋  (refer¹)
//   ++     |  increment |   refer²
//   --     |  decrement |   refer³

//¹ The remainder operator gives the remainder
// obtained when a number is divided. Example:
// 25%4 = remainder obtained when 25÷4 => 1

//² The increment operator is for one number and
// depends on where it's placed. It adds one number
// to the operand and whether its before or after
// the operand decides the output. Example:
// a=5, a++ will print 5 and then one will be
// added to a. Now, console.log(a) will give 6
// a=10, ++a will add one to a first, and then print
// the value of a. So the output will be 11.

//³ The decrement operator is the same as the
// increment operator except it subracts one from
// the operand.

console.log("Arithmetic Operators");
let a = 48;
let b = 17;

console.log( a , "+" , b , "=" , a+b );
console.log( a , "-" , b , "=" , a-b );
console.log( a , "*" , b , "=" , a*b );
console.log( a , "**" , b , "=" , a**b );
console.log( a , "/" , b , "=" , a/b );
console.log( a , "%" , b , "=" , a%b );

console.log("")
console.log("Increment Operator");
console.log("Current value of a:", a);
console.log( "a++ =", a++);
console.log("Current value of a:", a);
console.log( "++a =", ++a);
console.log("Current value of a:", a);
console.log( "a-- =", a--);
console.log("Current value of a:", a);
console.log( "--a =", --a);
console.log("Current value of a:", a);

//===========Assignment Operators===========
//Used to assign a new value to a declared variable

// Operator | New Value | Long Form
//——————————+————————————+———————————
//    =     |   c = d   |    c = d
//   +=     |   c + d   | c = c + d
//   -=     |   c - d   | c = c - d
//   *=     |   c × d   | c = c * d
//   /=     |   c ÷ d   | c = c / d
//   %=     |   c % d   | c = c % d
//   **=    |   c ^ d   | c = c ** d

let c = 6;
let d = 4;
console.log("")
console.log("")
console.log("Assignment Operators")
console.log( "c = ", c ,", d =", d)
console.log( c ,"+=", d , "New value of c:", c += d)
console.log( "c = ", c ,", d =", d)
console.log( c ,"-=", d , "New value of c:", c -= d)
console.log( "c = ", c ,", d =", d)
console.log( c ,"*=", d , "New value of c:", c *= d)
console.log( "c = ", c ,", d =", d)
console.log( c ,"/=", d , "New value of c:", c /=  d)
console.log( "c = ", c ,", d =", d)
console.log( c ,"%=", d , "New value of c:", c %= d)
console.log( "c = ", c ,", d =", d)
console.log( c ,"**=", d , "New value of c:", c **= d)

//<≠=<≠=<≠=<≠=Comparision Operators=≠>=≠>=≠>=≠>=≠>

// These ooerators check for a certain conditions
// and output true or false
