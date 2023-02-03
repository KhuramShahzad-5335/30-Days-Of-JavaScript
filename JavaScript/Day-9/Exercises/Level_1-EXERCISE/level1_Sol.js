//==============            1.          ===========================
//  Explain the difference between forEach, map, filter, and reduce.

//........... FOREACH(): for each is used to iterate over the array, to get each element of the array, it takes an callback, function with index, element and array as an parameter and returns the elements of the arr.

/**
 * arr.foreach(func(index,element,arr) {
 *      // some operations on the elements are performed here.
 * })
 */



//...........MAP(): it also takes an callback function, with index, element,or th arr as the parameter and used to iterate the arr and modify the array, and it returns a new arr.

/**
 * arr.map((element,index,arr) => {
 *  // operations like modifying the arr are performed here.
 * })
 */



//............FILTER(): It filter out the element which satisfies the condition, it also takes callbaack function, with same parameters discussed above.

/**
 * arr.filter((element,index,arr) => {
 *      // enter the condition here.
 * })
 */



//............Reduce(): It takes an callback function, with accumulator and current element, and optimal initial value and returns a value.








////==========================            2.
//Define a callback function before you use it in forEach, map, filter or reduce.

//....... CALLBACK(): a callback function is an function which is passed to an function as the parameter, to perform specific task

/**
 *  function callback(){
 *      // perform the action.
 * }
 * 
 * function otherFunction(callback){
 *  return
 * }
 * 
 */

//EXP:1
function callback(n){
    return n ** 2
}

function cube(callback,n){
    return callback * 2;
}
console.log(cube(callback(2),2));




//============              3               ===================
//Use forEach to console.log each country in the countries array.

const countries3 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

countries3.forEach((Element) => {
    return console.log(Element);
});





//============              4.              ==================
//Use forEach to console.log each name in the names array.

const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

names3.forEach((Element) => {
    return console.log(Element);
});





//===========               5.              ==================
//  Use forEach to console.log each number in the numbers array.

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers3.forEach((num) => {
    console.log(num);
});




//===================           6           =======================
//Use map to create a new array by changing each country to uppercase in the countries array.

const countries6 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

// as this method returns new array, so lets store it in the var,

const uppercaseCountries6 = countries6.map((country) => {
    return country.toUpperCase();
});

console.log(uppercaseCountries6);





//==================            7           ======================
//Use map to create an array of countries length from countries array.

// as the method returns an array, lets store that new arr in the var,

const countries7 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesLength7 =  countries7.map((Element) => Element.length);

console.log(countriesLength7);





//===================           8.             ==================
//Use map to create a new array by changing each number to square in the numbers array

const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareOfNums8 = numbers8.map(function(n){
    return n ** 2;
});

console.log(squareOfNums8);





//====================          9.              =================
//Use map to change to each name to uppercase in the names array

const names9 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

const uppercasedNames = names9.map((name) => {
    return name.toUpperCase();
});

console.log(uppercasedNames);





//===================           10              ==================
//Use map to map the products array to its corresponding prices.

// maping product to price is like product + price so,

const products10 = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

 const productWithPrice = products10.map(function(obj){
    return obj['product'] + ' = $' +obj.price;
 });

 console.log(productWithPrice)





//================             11               ====================
//Use filter to filter out countries containing land.

// by default, it returns true false, or  the array of the elements which satisfy the filter condition

const countries11 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

countries11.filter(function(country){
    console.log(country.includes('land'))
});

// or

const landicCountries = countries11.filter((country) => country.includes('land'));

console.log(landicCountries);






//=====================             12              =================
//Use filter to filter out countries having six character.

const countries12 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

specificCounties = countries12.filter((country) => country.length == 6);

console.log(specificCounties);





//=====================             13              ==================
//  Use filter to filter out countries containing six letters and more in the country array.

const countries13 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

const specificCounties13 = countries13.filter((country => country.length >= 6));

console.log(countries13);





//====================              14              ====================
// Use filter to filter out country start with 'E';

const countries14 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

const countryStartWith_E = countries14.filter((country) => country[0] === 'E');

console.log(countryStartWith_E);






//====================              15              ====================
//  Use filter to filter out only prices with values.

const products15 = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

  const productsWithPrice = products15.filter((Object) => typeof Object.price === 'number');

  console.log(productsWithPrice)


 