//how to declare arrays.
//using constructor from Array().

const arrayConstructor = new Array();
console.log("Empty array using constructor",arrayConstructor); // it will eturn an empty array.

// it will declare an array of 8 elements containg 4 at each index..
//array() takes number of elements as an argument and returns 8 empty, or undefined elemnts,
// 8 * undefined
// fill takes value of the element at each index
const array1Constructor = new Array(8).fill('x');
console.log(array1Constructor)

// declaration by simple square braces []

const sqrBraces = [];
console.log("Empty array using recommended way!",sqrBraces);

// array containing num, string,obh,mixups are declared eg..

//num

const numArr = [1,2,4];
console.log("array with num type elemnts",numArr);

//string type elements.

const strArr = ['banana','orange','apple'];
console.log("array with only string type of elements",strArr);

//array constaing num, string,bool,objects;

const mixArr = [
    1,2,3,
    'red',
    'green',
    'blue',
    {
        name : 'Khuram',
        age : 23,
        isMarried : false
    },

];
console.log("Contains mix elements of different datatypes: ",mixArr);

// arrays can also contain arrays as its elements

const nestedArr = [
    [1,2,3],
    ['r','g','b'],
    [
        1,2,3,
        true,
        false,
        'dimagh ki dahi',
        {
            name : "Khuram",
            age : 21,
            isMarried : false
        },
    ],
];
console.log(nestedArr)