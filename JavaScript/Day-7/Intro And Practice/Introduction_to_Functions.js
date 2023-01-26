// ====================== There are 4 types of Functions in js.



//================ REGULAR FUNCTION =================
/*
    syntax:

    declaration and definatio:
    function functionName(){
        code goes here.
    }

    calling or invoking:
    functionName();
 */

//      +++++++++++     Function without parameters and return      

//example-1:
function square(){
    let num = 2;
    let sq = num * num;
    console.log(sq)
}
square(); //4


//example-2
function addTwoNumbers(){
    let a = 2;
    let b = 3;
    console.log(a + b);
}
addTwoNumbers(); // A function has to be called by its name to be executed otherwise it will not execute.


//example-3;
function printFullName(){
    let firstName = 'Khuram';
    let space = ' ';
    let lastName = 'Shahzad';

    let fullName = firstName + space + lastName;
    console.log(fullName);
}

// if we don't invoke the function then the function won't be executed.
printFullName();





//++++++++++++++++++++++        Function Returning a value.

//example-1:
function sum(){
    let a = 2;
    let b = 3;
    
    return a + b;
}
// we can see the value returned by using any printing method.
console.log(sum());


//example-2;
function printFullName(){
    let firstName = "Khuram";
    let space = " ";
    let lastName = "Shahzad.";

    return firstName + space + lastName;
}
console.log(printFullName());





//+++++++++++++         Function with a parameter
// in fuction we can pass, arguments of any datatypes..
/**7
 * Syntax:
 * function functionName(param1){
 *      //code goes here
 * }
 * 
 * invaking:
    fuctionName(value of param);
*/

//example:1
function areaofCircle(r){
    let area = Math.PI * r * r;
    return area;
}
console.log(Math.round(areaofCircle(10)));




//+++++++++++++++++ Function with two parameters

//example:1
function sumOfTwoNumbers(a,b){
    return (a + b);
}
console.log(sumOfTwoNumbers(2,4));

//example:2
function fullName(firstName,lastName){
    return firstName + ' ' +  lastName;
}
console.log(fullName('Khuram','Shahzad'));






//+++++++++++++++++ Function With Many parameters.
//example:1

//following function takes array as the parameter, and returns sum of all elements.
function sumOfElOfArr(arr){
    let sum = 0;
    for (const el of arr) {
        sum += el;
    }
    return sum;
}
const num = [1,2,3,4,5];
console.log(sumOfElOfArr(num));





//+++++++++++++     Function With unlimited number of arguments..
// this method goes different for arrow and regular function.

//..1.  Regular function with unlimited arguments.

// we can access all the parameters passed to an function, using argument object of javascript.
// example:1
function prntParameters(){
    return arguments;
}
console.log(prntParameters(),prntParameters(1,2,))

// the argument object returns ke value pair by index : value;we can manipulate this as required.

function sumOfNumbers(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sumOfNumbers(1,2,3,4,5,6));



//....2:Unlimited Arguments for arrow function.

//there is no aruments object in arrow functions.

//so instead we use spread operator(...args), which also returns array of arguments.

//example:1

const printArgs = (...args) =>{
    return args;
}
console.log(printArgs(1,2,3,4,5));



//example:2.

const SumOfNumbers = (...number) => {
    let sum = 0;
    for (const el of number) {
        sum += el;
    }
    return sum;
}
console.log(sumOfNumbers(1,2,3,4,5,6));



//======================================================================




//========================      2. ANONYMOUS FUNCTIONS      +++++++++++
// anonymous function is a function without name.

const anonymousFun = function(){
    console.log('I am an anonymous function and my value is stored in anonymousFun.');
}
anonymousFun();





//=================================================================================





//=======================       3.  EXRESSION FUNCTION      =============
//expression functions are anonymous function, we declare a function withou name,
// assign it to a variable and when we call this function we call it through it variable,

//example:1
const squareFun = function(n){
    return (n * n)
}
console.log(squareFun(5));





//====================================================================




//======================        4.  SELF INVOKING FUNCTION ++++++++++++++

// self invoking functions are anonymous functions which does not need to
// be called/invoked to return a value;

//examlpe:1
(function(n){
    return console.log(n * n);
}    
)(2);

//example:2
// if you want to store the value returned by self invoking function.then
const returnedSquare = (function(n){
    return (n * n)
})(5);
console.log(returnedSquare);





//========================================================




//=================     4. ARROW FUNCTIONS      ================

//it is another way of using functions
//instead of function keyword it uses arrow to define a function

//example:1
//regular function 
function regularSquareFunc(n){
    return (n * n);
}

//arrow function.
const arrowSquareFunc = (n)=>{
    return (n * n);
}
//if arrow function has only return statement we, can write it in single line
// const arrowSquareFunc = n => (n * n)



//example:2

const changeToUppercase = (arr) =>{
    const newArr = [];
    for (const el of arr) {
        newArr.push(el.toUpperCase());
    }
    return newArr;
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
console.log(changeToUppercase(countries))


//example:2
const nameFun = (firstName,lastName) => `${firstName} ${lastName}`
console.log(nameFun('Khuram','Shahzad'));




//===========================================================




//=============     6. FUNCTION WITH DEFAULT VALUE      ============

//some times we define a function with default value if the user does,
// not provide any argument while calling a function.

//example:1

function greeatings(name = 'Lorem'){
    return `${name}, welcome to the 30 days of JavaScript challenge. `
}
console.log(greeatings());
console.log(greeatings('khuram'));


//example:2
function generateFullName(fname = 'Lorem',lname = 'Ipsum'){
    return `${fname} ${lname}`;
}
console.log(generateFullName());
console.log('Khuram','Shahzad');



//example:3.
function ageCalculator(birthYear,currentYear = 2023){
    return currentYear - birthYear;
}
console.log("Age: ",ageCalculator(2000));


//example: 4
function weightOfObjectInNewton(mass,gravity = 9.81){
   let weight = (mass * gravity) + ' N';
   return weight; 
}
console.log(weightOfObjectInNewton(50))
console.log(weightOfObjectInNewton(50,12))



//===================================================




//lets write above programs in arrow functions

//example:1
const fullNameArrow = (fname = 'Lorem',lname = 'Ipsum') => {
    let fullName = `${fname} ${lname}`;
    return fullName;
}
console.log(fullNameArrow());
console.log(fullNameArrow('Khuram','Shahzad'));


//example:2
const greeatingsArrow = (name = 'Lorem') => {
    let msg = name + ', welcome to the 30 days of JavaScript challenge.';
    return msg;
}
console.log(greeatingsArrow());
console.log(greeatingsArrow('Khuram'));


//example:3
const ageCalculatorArrow = (birthYear,currentYear = 2023) => {
    let age = currentYear - birthYear;
    return age;
}
console.log(ageCalculatorArrow(2000))
console.log(ageCalculatorArrow(2000,2024));