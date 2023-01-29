//=======================       2
const rgbColorGenerator = () => {
    let rgb = '';
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}
console.log(rgbColorGenerator());





//========================         3.
let hexChar = '0123456789abcdef';
const index = () => {
    let i = Math.floor(Math.random() * (hexChar.length - 1))
    return i;
} 
function arrayOfHexaColors(){
    newArr = [];
    hexColor = `#${hexChar.charAt(index())}${hexChar.charAt(index())}${hexChar.charAt(index())}${hexChar.charAt(index())}${hexChar.charAt(index())}${hexChar.charAt(index())}`
    for (let i = 0; i <= Math.floor(Math.random() * hexChar.length); i ++) {
            newArr.push(hexColor);
    }
    return newArr;
}

console.log(arrayOfHexaColors());





//=====================         4.
//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(){
    let i = 0,
    lewArr = [];
    let rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    while(i <= Math.floor(Math.random() * 256)){
        newArr.push(rgb);
        i++;
    }
    return newArr;
}
console.log(arrayOfRgbColors());





//==================        5;
//Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
String.prototype.convertHexaToRgb =  function(hexa){
    let aRgbHex = this.match(/.{1,2}/g),
    aRgb;
    if(this.length == 6){
    aRgb = [
        parseInt(aRgbHex[0],16),
        parseInt(aRgbHex[1],16),
        parseInt(aRgbHex[2],16),                
        ];
        return aRgb;
    }

    else{
        return 'Only 6 character code values are allowed '
    }
}
console.log('150290'.convertHexaToRgb());





//===================       6.
//Write a function convertHexaToRgb which converts rgb color to hex and it returns an hex color.
function rgbToHex(r,g,b){
    let hexVal = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    return hexVal;
}
console.log(rgbToHex(12,51,255));





//=================         7.
//Write a function generateColors which can generate any number of hexa or rgb colors.
let hexStr = '0123456789abcdef',
i = 0;
const randIndex = () => Math.floor(Math.random() * 16);
console.log(randIndex())
function colorGenerator(format, numbers){
    let hexColors = [];
    let rgbColors = [];
    if(format == 'rgb'){
        i = 0;
        while(i < numbers){
            rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
            rgbColors.push(rgb);
            i++;
        }
        return rgbColors;
    }
    else if(format == 'hexa'){
        i = 0;
        let hexa = `#${hexStr.charAt(randIndex())}${hexStr.charAt(randIndex())}${hexStr.charAt(randIndex())}${hexStr.charAt(randIndex())}${hexStr.charAt(randIndex())}${hexStr.charAt(randIndex())}` 
        while(i < numbers){
            hexColors.push(hexa);
            i++;
        }
        return hexColors;
    }
    else{
        return 'Enter valid numbers for format!'
    }
}

console.log(colorGenerator('rgb',2))





//===================           8.
//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.

function shuffleArray(arr){
   arr.sort(() => Math.random() - .5)
   return arr;
}
const shuffleMe = [0,1,2,3,4,5]
console.log(shuffleArray(shuffleMe))




//=================         9.
//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorialFunc = (num) => {
    let factorial = 1,
    i = num;
    if(num == 0 || num == 1)
    {
        return factorial;
    }
    else{
        while(i > 0){
            factorial = factorial * i;
            i --;
        }
        return factorial
    }
}
console.log(factorialFunc(5));





//==================        10.
//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
const isEmpty = (val)=>{
    if(val){
        return val;
    }
    else{
        return 'Its empty!'
    }
}
console.log(isEmpty());



//=================         11.
//Call your function sum, it takes any number of arguments and it returns the sum.

const sum = (...args) => {
    let s = 0;
    for (const el of args) {
        s += el;
    }
    return s;
}
console.log(sum(5,4,3,2,1));




//=================         12.
//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(arr){
    let sum = 0;
    for (const item of arr) {
        if(typeof(item) == "number"){
            sum += item;
        }
        else{
            msg = 'Array also conatains other datatypes which are not added as num!';
        }
    }
    return 'Sum is : ' + sum + '\n' + msg
}
const toGetSum = [1,2,'Khuram',3,4,5];
console.log(sumOfArrayItems(toGetSum));






//=============         13.
//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function averageOfArrItems(arr){
    let avg = 0,
    sum = 0;
    for (const items of arr) {
        if(typeof(items) == 'number'){
            sum += items;
        }
        else{
            msg = 'Array also conatains other datatypes which are not aused to compute average.!';
        }
    }
    avg = sum/arr.length;
    return 'Average is : ' + avg + '\n' + msg
}

const toFindAvg = [0,1,2,3, 'Khuram',false, 4,5];
console.log(averageOfArrItems(toFindAvg))




//================          14.
//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

const modifyArray = (arr) => {
    let newArr = [];
    if(arr.length >= 5){
       for (const el of arr) {
            if(arr.indexOf(el) == 4){
                console.log(arr.indexOf(el))
                newArr.push(el.toUpperCase());
                continue;
            }
            newArr.push(el)
       }
       return newArr;
    }
    else{
        return 'Item Not Found...'
    }

}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));





//========          15.
//Write a function called isPrime, which checks if a number is prime number.

/**
 * if a number is divided by any number between 2-to-num-1, then it is not prime, a prime number can only be divided by 1 or itself, so
 */

// program to check if a number is prime or not
const isPrime=(number)=>{
let isPrime = true;
// check if number is equal to 1
if (number === 1) {
    return "1 is neither prime nor composite number.";
}
// check if number is greater than 1
else if (number > 1) {
// looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        return `${number} is a prime number`;
    } else {
        return `${number} is a not prime number`;
    }
}
// check if number is less than 1
else {
    return "The number is not a prime number.";
}
}

console.log(isPrime(19));




//=============         16.
//Write a functions which checks if all items are unique in the array.

const isUnique = (arr) => {
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length; j++) {
        if( i !== j){

            if(arr[i] === arr[j]){
                return 'Not unique'
            }

            else if(arr[i] !== arr[j]){
                return 'Elements of array are unique'
            }
        }
       }
    }
}
console.log(isUnique([0,3,4]));




//=============         17.
//Write a function which checks if all the items of the array are the same data type.

const areSame = (arr) =>{
    let isUnique = true;
    if(arr.length == 0){
        return 'Array is empty bro. WTF...'
    }

    else if(arr.length == 1){
        return 'Array has only one element bro. WTF...'
    }

    else if(arr.length > 0){
        for(let i = 0; i < arr.length; i ++){
            if(arr[0] !== arr[i]){
                isUnique = false;
            }
        }
    }
    if(isUnique){
        return 'Elements are unique!'
    }
    else{
        return 'Elements are not unique!'
    }
}
console.log(areSame([1,1,2]))


