//====================Booleans==============

//.......Example Boolean values
let isLightOn = true;
let isRaining = false;
let trueVal = 4 > 3 // true
console.log(trueVal)
let falseVal = 4 < 3 //false
console.log(falseVal)


/**
 * Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true
Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
 */

//.........example truth falsy values are

console.log(Boolean(4))
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(-5))
console.log(Boolean())
console.log(Boolean(null))
console.log(Boolean(0n))





//======================undefined=================
let firstName;
console.log(firstName)




//======================Null======================
let a = null //null means no value
console.log(a)





//=====================Operators===================
/*
    There are many oprators, =, + , -, *, /, %, &, ?, |, ==, >, <
    ,=>, !=.......
*/

//.....Expample Calculate area of circls

const PI = Math.PI;
let r = 10
const areaOfCircle = PI * (r * r);

console.log(areaOfCircle)

//.......String Interpolation for concation

console.log(`If cirle has radius of ${r} then Area would be ${areaOfCircle} `);


//...........Example of comparison operators.

console.log(3>4)
console.log(3<4)
console.log(3==3)
console.log(3==="3")//comparing both type and value
console.log('python'.length < "jargon".length)


//......more on these
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


// && ampersand operator example

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true



//=========Increment,Decrement operators.

let count1 = 0;

//........PreIncrement
// increments first then shows
console.log(++count1)
console.log(count1)

//.........postIncrement
console.log(count1++)
// will increment after assignment
console.log(count1)

// same goes for decrement.
//****Note that we generally use post increment, deecrement */







//=====================Ternary Operators================
/*
?,: combined with booleans are used to generate conditionals eg:
*/

let isRainingTern = true;
isRainingTern
    ? console.log("You need a rain coat bro.")
    : console.log("No need to worry bro")
isRainingTern = false

isRainingTern
? console.log("You need a rain coat bro.")
: console.log("No need to worry bro")

//..exp:2

let numTern = 5;

5 > 0
    ? console.log(`${numTern} is Positive number`)
    : console.log(`${numTern} is negative number`)
!(5 > 0)
    ? console.log(`${numTern} is Positive number`)
    : console.log(`${numTern} is negative number`)








//================Precedence Of Operators=================
// check them yourself.








//==================Window Method===================
/*
  Discussed in another folder.
*/












//=================Date Object=====================
//We create an object from date and do wonders by getting every info from the object using getName() way.

// Creating an object of date.

const current = new Date();
console.log(current)
//........getting year
const year = current.getUTCFullYear()
console.log(year)

//........getting millisecons..........
const milliSeconds = current.getUTCMilliseconds()
console.log(milliSeconds) // milliseconds of a second


//............Getting month
const month = current.getUTCMonth() + 1
console.log(month)//month (0-11)



