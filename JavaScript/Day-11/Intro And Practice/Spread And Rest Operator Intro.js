//=================     SPREAD OPERATOR OR REST     ==============

// 1. While destructuring an array we use spread operator to get rest of the elements.
// 2. Spread operator is also used to spread array elements to another array.




// => SPREAD OPERATOR TO GET REST ELEMENTS OF THE ARRAY.

//EXP : 1
const num0 = [1,2,3,4,5,6,7];
let [numOne, numTwo, numThree
    , ...rest] = num0;

console.log(numOne, numTwo, numThree);
console.log(rest);

// EXP: 2-
const countries0 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ];

let [gem, fran, ...nordicCountries] = countries0;

console.log(gem, fran);
console.log(nordicCountries);





//=>    SPREAD OPERATOR TO COPY THE ELEMENTS OF THE ARRAY

//EXP : 1-
const evens = [0,2,4,6,8];
const evenNum = [...evens];

const odds = [1,3,5,7,9];
const oddNum = [...odds];

const wholeNums = [...evens, ...odds];

console.log(evenNum);
console.log(oddNum);
console.log(wholeNums);


//EXP : 2-
const frontEnd = ['HTMTL', 'CSS','JavaScript', 'React'];
const backEnd = ['NodeJS','MongoDB','ExpressJS'];

const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);



// => COPYING OBJECT AND MODIFYING IT WHILE COPYING IT.
// ***We can use spread operator to copy an object, and also we can modify the properties while doing so.

//EXP:1-
const user = {
    name:'Khuram',
    title:'Student',
    country:'Pakistan',
    city:'Multan'
  }

const copied_user = {...user, title : 'Programmer'};          // copying user and modifying the title property.

console.log(copied_user);




//=>        SPREAD OPERATOR USING ARROW FUNCTION.
//  *** While using arrow function if we want the function to take many many arguments, we pass ...arg.
// hence when the function is invoked the paramters ara passed as the array.

const addEmAll = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(addEmAll(1,2,3,4,5));









//=============================         THE END          =======================================
