// ======  REUSABLE VARIABLES:

let txt = '',
pattern;



//=====================================================



//==================            1.
//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'

//  STEP : 2 - Create the pattern to extract the numbers from the txt.
pattern = /\d+/g;

let arrOfDigits = txt.match(pattern);

let [salary, bonus, courses] = arrOfDigits;

const total_annual_income = parseInt(salary) + parseInt(bonus) + parseInt(courses);

console.log('His total annual income is : ',total_annual_income);










//=========================         2.
//The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'

// Step : 2- We have to extract the values of the numbers.
pattern = /[0-9-]+/g;
array_of_position = txt.match(pattern).sort((a, b) => a - b)
array_of_position.shift();
console.log(array_of_position);

let first_element = + (array_of_position[0]);
let last_element = + (array_of_position[array_of_position.length - 1]);

let difference = first_element - last_element;
console.log('Distance = ',-1*(difference));




//=======================                   3.
//Write a pattern which identify if a string is a valid JavaScript variable.

// step : 1 : create a function which takes varible name as input

function isValidVariable(varStr){

    // Step-2: We need to create a pattern which accepts characters and underscore.
    let res = false;
    pattern = /^[0-9a-zA-Z_]+$/g
    res = pattern.test(varStr);
    res  ? true : false

    return res;
}
console.log(isValidVariable('firstname'));
console.log(isValidVariable('first_name'));
console.log(isValidVariable('first-name')); 
console.log(isValidVariable('1firstname')); 