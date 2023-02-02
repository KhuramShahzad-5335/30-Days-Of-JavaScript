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


//==========            .EVERY()            =========
// every(), checks if all the elements of th earray are same in one aspect and return if the value is true.

let isTrue = [true,true,true];
const areSame = isTrue.every(function(value){
    return value === true;
})

console.log(areSame);





//============          Find()      =================
// checks all the elements and returns the element which satisfies the condition.


//EXP:  1

let findVal = [0,1,'23',23,'findMe'];
const findMe = findVal.find((value) => {
    return value == 23;
});

console.log(findMe);


//EXP: 2
// return element with highest score.
const scores2 = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

  const findUser = scores.find((val) => {
    return val.score < 80;
  });
  console.log(findUser);




//=============         .FINDiNDEX()        ============
// Returns the first index of the first element which satisfies the condition.

const findIndexArr = [1,2,3,4,5,6,7,8,9];

const findMyIndex = findIndexArr.findIndex((val)=>{
    return val === 8;
});

console.log(findMyIndex);





//============          .SOME()             ============
//checks if some of the elements of the array are same in some aspect, and returns a boolean.

let sameElSame = ['khuram',true,'ali','babloo','guldasta'];

const areTheseSame = sameElSame.some((val) => {
    return typeof(val) === 'boolean';
});
console.log(areTheseSame);





//===========              .sort()           ============
//sort sorts the array in the ascending or descending ordr. By default this method sorts arrays as the array as strings. It works well for the strings but it is problematic for numbers. IF a numbers is sorted as a string it results in wrong value. It modifies the original array so alway make sure to copy the original array.

const sortProductsArr1 = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
const copyProductsArr1 = sortProductsArr;

console.log(copyProductsArr.sort());






// sorting string values.
const sortProductsArr = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
const copyProductsArr = sortProductsArr;

console.log(copyProductsArr.sort());



//sorting the numeric values
const sortNumArr = [9.81, 3.14, 100, 37];

console.log(sortNumArr.sort()); // as you can see the number 100 came first, lets modify the method a bit.

// to sort in ascending order.
sortNumArr.sort(function(a,b){
    return a - b;
});
// as the above method mutates the array, so thats why we print it this way.
console.log(sortNumArr);

// to print this in descending order.
sortNumArr.sort((a,b) => {
    return b - a;
});
console.log(sortNumArr);







// Sorting the object arrays.
// when ever we sort object in array, we use objectArr.key to compare the values.

// EXP: 1 as an syntaxx
let objectArr = [];

objectArr.sort(
    function(a,b){
        if(a.key < b.key) {
            return -1;
        }
        if(a.key > b.key){
            return 1;
        }
        return 0;
    }
)

//or

objectArr.sort(
    function(a,b){
        if(a['key'] < b['key']) {
            return -1;
        }
        if(a['key'] > b['key']){
            return 1;
        }
        return 0;
    }
);




const usersObj = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]

  //sort the users object w.r.t age of the properties

  // so for sorting w,r,t numbers we have to use ab,
  usersObj.sort(
    function(a, b){
        // it is necessary for first value to be greater then the second value common sense.
        if(a.age > b.age){
            return 1;
        }
        
        if(a.age < b.age){
            return -1
        }
    }
  );
  console.log(usersObj);