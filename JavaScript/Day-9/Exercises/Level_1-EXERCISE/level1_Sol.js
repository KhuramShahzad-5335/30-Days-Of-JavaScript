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