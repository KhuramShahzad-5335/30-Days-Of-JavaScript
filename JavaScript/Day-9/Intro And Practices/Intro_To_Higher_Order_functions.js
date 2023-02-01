//=============         HIGHER ORDER FUNCTIONS :
// HOF: are functions which take other function as an parameter or return a function as an value. 
// The function passed as an parameter is called callback



//===========           CallBack Function...........
// a callback function is a function which can pa passed to other function as an parameter.

//EXP : 1       cube of a number using square. 

// we will pass this callback function in cube,
const callback = (n) => {
    return n ** 2;
}

function cube(callback,n){
    return callback(n) * n;
}
console.log(cube(callback,2));



//==============        Returning  a function................
// to return a function we have to use the function inside, and return it in its parent function.


//EXP: 1

const higherOrderFunction = m => {
    const anotherFunction = n => {
        const doSomething = o => {
            const multiplyAllValues = () => {
                return m * n * o;
            } // multiplyAllValues
            return multiplyAllValues;

        } //doSomething

        return doSomething;

    } //anotherFunction

    return anotherFunction;

}// higherOrderFunctio

console.log(higherOrderFunction(2)(2)(2)());


//EXP: 2
// For each uses callback function

const num = [1,2,3,4,5];

function sumArrayElements(arr){
    let sum = 0;
    const callback = (el) => {
        sum += el;
    }
    arr.forEach(callback);
    return sum;
}

console.log(sumArrayElements(num));

//EXP : 3
// above function can also be written as.

const sumOfElementsOfArray = (arr) => {

    let sum = 0;

    // call an anonymous function with el returned by for each element  of array, and sum em, all
    // arr.foreach(), returns element, we take that as the parameter of internal, anonymous functions
    arr.forEach(function(element){
        //console.log(element);  // all the elements are returned, do whatever you want with it.
        
        sum += element;
        
        //console.log(sum); this returns each element after summing up with previous element.
    });
    return sum;
}

console.log(sumOfElementsOfArray(num));


