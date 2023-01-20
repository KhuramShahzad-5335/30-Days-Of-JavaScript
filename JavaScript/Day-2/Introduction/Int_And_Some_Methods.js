// In this file we will check almost every thing we can do with numbers.

//-------------------------1.Declaration

let intNum = 1 // int type number
let floatNum = 3.14 // float type number.


//-------------------------2. Typechecking

console.log(typeof(intNum),typeof(floatNum))

//-------------------------3. TypeCasting
/*
    Casting: Converting one data type to another data type. 
    We use parseInt(), parseFloat(), Number(), + sign, str() 
    When we do arithmetic operations string numbers should be first
    converted to integer or float if not it returns an error.
*/

//-----String To Int using parseint(), Number(), + Sign, 

strNum = '10';
strChar = 'A';

parseIntVar = parseInt(strNum)
console.log(parseIntVar, typeof(parseIntVar))

numberVar = Number(strNum)

plusSignVar = + strNum

console.log(plusSignVar, typeof(plusSignVar))




//-------String to float using parsefloat(), Number(), + sign
// same method goes in for float, except


//-------Int to float and float to Int Using parseInt() and Pasrsefloat()

const FLOAT_PI = 3.14

let intPi = parseInt(FLOAT_PI)

console.log(FLOAT_PI," is Float Type")

console.log("Float type ",FLOAT_PI," is converted to Integer Type ",intPi);


//-------------------Math Object
/*
    In JavaScript Math object Provides alot of methods to work with Numbers, 
    Few of these are Present in the following.
*/

//----------Math.PI
let MATH_PI = Math.PI
console.log(MATH_PI)

//---------Rounding To Closest Number
let round_PI = Math.round(MATH_PI)
console.log(round_PI) 

//--------Floor method to round

floor_PI = Math.floor(MATH_PI)
console.log(floor_PI) //rounding down

//--------Ceil method to round up
ceil_PI = Math.ceil(MATH_PI)
console.log(ceil_PI) //round up

//--------finding minimum and maximum value between numbers

let maxNum = Math.max(-10,15,2,1,0,-20,50,12)
console.log(maxNum)

let minNum = Math.min(-10,15,2,1,0,-20,50,12)
console.log(minNum)

//--------Math.Random(), to generate random number betwoon 0-1

randomNumberBasic = Math.random()
console.log(randomNumberBasic)

// Create a program that generates random number between 1-10

randomNum = Math.random()
console.log(randomNum)
requiredRandNum =  Math.ceil(randomNum * 11)
console.log(requiredRandNum)

//--------Absolute value
console.log(Math.abs(-20.5530))

//--------square root

let sqrtVar = '25';
// convert to int
intSqrtVar = + sqrtVar
//output square root on abouve value
oneSqt = Math.sqrt(intSqrtVar)
console.log(oneSqt)
againSqt = Math.sqrt(oneSqt)
console.log(Math.round(againSqt));

//---------power of Numbers
let down = 2
let up = 8
let powVarDoubleEsteric = down**up
console.log(powVarDoubleEsteric)
let powOperatorVar =  down ^ up // this ^ operator is used for addition not power.
console.log(powOperatorVar)

//........let use math obj

console.log(Math.pow(2,4))
console.log(Math.E)

//-------Logarithmic Method

console.log(Math.log(2))
console.log(Math.log(10))


//-------Natural logarithic functions.
console.log(Math.LN2)
console.log(Math.LN10)

//-------Trignometry
console.log(Math.sin(0))
console.log(Math.sin(60))

console.log(Math.cos(0))
console.log(Math.sin(60))

console.log(Math.tan(0))
console.log(Math.tan(180))

teesSQT =  Math.sqrt(3)
tan60 = teesSQT/2
console.log(Math.round(tan60))


