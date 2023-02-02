//============          FUNCTIONAL PROGRAMMING          ====================
/**
 * instead of using for loops to solve complex, problems, modern day javascript its new versions has added any new
 * built in methods to solve many complex problems, all these build in methods use, callback functions.
 * lets discuss each one of them
 */


//========      1. FOR.EACH METHOD
// for method is used to iterate over the array, and it is used only with the arrays

//EXP:  1.
const arr = [1,2,3,4,5];

// using anonymous callback function
arr.forEach(function(element, index, arr){
    console.log(index);
    console.log(element);
    console.log(arr);
});

// above code using arrow function.
arr.forEach((index, element, arr) => {
    console.log(index);
    console.log(element);
    console.log(arr);
});

// one liner for above code
arr.forEach((index, element, arr) => console.log(index, '\n', element, '\n', arr));



// lets print each number of arr.

arr.forEach((element) => console.log(element));


// sum of number of elements of array.
let sum = 0;
arr.forEach((element) => {
    sum += element;
})
console.log(sum);



// capitalize the letters of country array.
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((country) => {
    console.log(country.toUpperCase())
    });







    //========      2.  .MAP()      ==============
// It is used to iterate over an array, then **modify the array. it returns an new array, after modification.
// it takes, a callbackfunction, arr, index and element as an parameter and returns new modified array.

//EXP:1
// to get an array with some of the previous array.
num = [1,2,3,4,5];
const sumArry = num.map((el) =>{
    return el * el;
});
console.log(sumArry);


//EXP:2
// to get names in uppercase
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const uppercaseNames = names.map(
    (element) => {
        return element.toUpperCase();
    }
)
console.log(uppercaseNames);



//EXP: 3
// uppercase countries name
const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

const uppercaseCountries = countries1.map((country) => country.toUpperCase());
console.log(uppercaseCountries);



// countries first three letters
const shortCountryNames = countries.map(
    (country) => {
        return country.slice(0,3).toUpperCase();
    }
)
console.log(shortCountryNames);






//==============        3. .FILTER()           =========
//filter: filter out the elements which fulfill the filtering condition, and returns an new array, of elements
// which fullfill the condition.It also takes, index, element and arr as the parameter


const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  // to filter countries containing land.

  const landCountries = countries2.filter(
    (country) => {
        return country.includes('land');
    }
  )
  console.log(landCountries);


  // to see countries which are 5character long.

  const fiveCharLongCountries = countries2.filter(
    (country) => {
        return country.length === 5;
    }
  )
  console.log(fiveCharLongCountries);



  // find elements whose score are more than 80.
  const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

  const eightScorer = scores.filter(
    function(score){
        return score.score > 80 
    }
  )
  console.log(eightScorer);






  //=============           4.  .REDUCE()               ===========
  // reduce takes back an callback function, the callback function takes accumuator, current, and optimal initial value as the parameter and reduce a single value. It is a good practice to add optimal initial value for the accumulator, which is bcz the accumulator will take the first value of the array if the array is empty then it will return an error =, so try to use th eintitial value.

/**
 * syntax:
 *  arr.reduce(function(acc, cur){
 *      // some operations goes here, before it returns the value.
 * }, initialvalue)
 */


//EXP: 1
// to return the sum of elements of the arr.
const num = [1,2,3,4,5];
const sumR = num.reduce(function(acc,cur){
    return acc + cur;
},0)

console.log(sumR);



