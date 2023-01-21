// Declaring different types of arrays to use them .



//declaring some strings so that we can use them,

const strWithoutSpace = 'JavaScript';
const strWithSpace = '30 days of javascript';
const strCommaSep = 'HTML,CSS,JS,NODE JS,REACT,EXPREE,MONGO DB';

//arrays with same numbers.
const sameValArr = new Array(8).fill(10);

// array num

const num1 = [1,2,3];
const num2 = [4,5,6];

const unSortedArr = [5,3,2,1,4,6,8,7,9];


//array c onstaining strings.

const strColorArr = ["Red", 'Green','Blue'];
const strFruitArr = ["Apple", "Orange", "Mango"];

//mix arrays

const mixArr = [
    1,2,3,6,5,4,
    'r','g','b',
    [
        true,
        false
    ],
    {
        name : 'Khuram',
        Age : 22,
        isHappy : true
    }
]







// here we will change arrays based on some built in methods

//--------- 1.Length of arrays------

console.log(mixArr,mixArr[9].length);

//---------- 2. Concat()----------------
// like strings we can concatenate arrays using this method
//the array will be addded from the tail.......

const concatenateSameTyppeOfArrays = num1.concat(num2)
console.log(concatenateSameTyppeOfArrays);
const concatenateDifferentKindOfArrayc = strColorArr.concat(mixArr);
console.log(concatenateDifferentKindOfArrayc)



//-----------3. IndexOf() ------------
// is used to check if an element is present in the array, 
//or not if present it returns index of that elemt 
//else it returns -1 which means eleent is not present in the array.

console.log(strFruitArr.indexOf('Apple')); //present on index o



//----------4. LastIndexOf() ----------------
// it takes element of array as the argument and returns its last index.

//lets go with an complex array.

console.log(mixArr.lastIndexOf(3));



// ---------5. Sort() ----------------
//we can sort an by using .sort method.

const sortedArr = unSortedArr.sort();
console.log(unSortedArr, sortedArr);

//---------6. push() -----------
//it is used to add elements in th array, 
//the element is inserted on the last index of the array.

const pushArr = strFruitArr.push('Banana')
console.log(strFruitArr,pushArr);


//---------7. pop() --------------
// pop is used to pop the element of the array from last index.


console.log(num1.pop());



//---------8.   shift()   /  unshift()---------

// to remove element from begignng.
// the variable contain sthe element deleted.
const shiftArr = strFruitArr.shift()
console.log(shiftArr)

// unshift adds element in the begning of the array.

console.log(num1.unshift(10),num1);



//----------9.   split() ------------------
// to convert string into the array we use slice method;
// slice takes argument the way we want to convert string to array eg.

let strArrWithouSpaces = strWithoutSpace.split('');
console.log(strArrWithouSpaces);

//split string with spaces
console.log(strWithSpace.split(' '));

// split string into the array using comma's
console.log(strCommaSep.split(','));


//----------10.  Splice()
//syntax array.splice(startIndex,delete count,replace by elemet)
// it returns the elements that were deleted example.

let spliceTest = unSortedArr.splice() //it will not reomove any element and will return array which is empty empty is number of elements deleted
console.log(spliceTest);

let spliceSecond2ElementsAndReplceEmBy10 = unSortedArr.splice(1,3,10)
console.log(spliceSecond2ElementsAndReplceEmBy10,unSortedArr)
// as u can see it removed 3 elemnts starting from [1], and replaced them with 10 element






//----------11. Include(element)
// it checks if the given element is in array or not and return boolean

console.log(strColorArr.includes('Red'));



// ----------12 -Array.isArray() ---------
// checks if the datatype is array is or not.it returns bool
console.log(Array.isArray(strColorArr));



//-----------13.    .toString() ----------

//it takes array as an argument and returns string

let toStringVar = strWithSpace.toString();
console.log(toStringVar,":",typeof(toStringVar));




//-----------14.........join() -----------
// to convert an array into the string, separated by comm's or whatever you want.

let arrToStringJoin = num1.join(" ");
console.log(arrToStringJoin);



//----------15 - Reversing an array-----------

let reverseMe = [1,2,3,4,5,6,7]
console.log(reverseMe.reverse())





