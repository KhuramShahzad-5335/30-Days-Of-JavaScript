
//1.    Declare a variable named challenge and 
//assign it to an initial value '30 Days Of JavaScript'.

const challenge = ' 30 Days Of JavaScript ';


//2.    Print the string on 
//the browser console using console.log()

console.log(challenge);

//3. Print the length of the string
// on the browser console using console.log()

const lengthOfStr = challenge.length

console.log(lengthOfStr)

//4. Change all the string 
//characters to capital letters using toUpperCase() method

const toUpperCaseStr = challenge.toUpperCase()
console.log(toUpperCaseStr)

//5.Change all the string characters to
// lowercase letters using toLowerCase() method.

const toLowerCaseStr = challenge.toLocaleLowerCase()

console.log(toLowerCaseStr)

//6. Cut (slice) out the first word of the string 
//using substr() or substring() method

const cutSubStr = challenge.substring(0,2)
console.log(cutSubStr)

const cutSubString = challenge.substring(0,3)// ending index not included
console.log(cutSubString)


//7. Slice out the phrase Days Of JavaScript 
//from 30 Days Of JavaScript.

const sliceOutGivenStr = challenge.slice(2,challenge.length)
console.log(sliceOutGivenStr)

//8. Check if the string contains 
//a word Script using includes() method

const checkIncStr = challenge.includes(`Script`);
console.log(checkIncStr)

//9.& 10. Split the string 30 Days Of JavaScript 
// withou using and with the space using split() method.

const simpleSplit = challenge.split()
console.log(simpleSplit)

const splitSpaceWise = challenge.split(' ');
console.log(splitSpaceWise)

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, 
//Amazon' split the string at
//the comma and change it to an array.

const splitStr = 'Facebook, Google, Microsoft, Apple,\
 IBM, Oracle, Amazon ';

const splitUsingComma = splitStr.split(',');
console.log(splitUsingComma)

//12. Change 30 Days Of JavaScript to 30 Days 
//Of Python using replace() method.

const replacedStr = challenge.replace('JavaScript', 'Python');
console.log(replacedStr)

//13. What is character at index 15 in 
//'30 Days Of JavaScript' string? Use charAt() method.

const charAtIndexVar = challenge.charAt(15)
console.log(charAtIndexVar)

//14. What is the character code of J in 
//'30 Days Of JavaScript' string using charCodeAt()

charCodeVar = challenge.charCodeAt(challenge.indexOf('J'))
console.log(charCodeVar)


//15.Use indexOf to determine the position of the first
// occurrence of a in 30 Days Of JavaScript

const occuranceOfStr = challenge.indexOf('a')
console.log(occuranceOfStr)

//16. Use lastIndexOf to determine the position of the 
//last occurrence of a in 30 Days Of JavaScript.

const lastIndexOfStr = challenge.lastIndexOf('a')
console.log(lastIndexOfStr)

//17. Use indexOf to find the position of the 
//first occurrence of the word because 
//in the following sentence:'You cannot end a sentence with 
//because because because is a conjunction'

const GivenStr = 'You cannot end a sentence with\
 because because because is a conjunction';
const keyIndexVar =  GivenStr.indexOf('because');
console.log(keyIndexVar);

//18. Use lastIndexOf to find the position of the last occurrence of 
//the word because in the following sentence

const keylastIndexOfStr = GivenStr.lastIndexOf('because');
console.log(keylastIndexOfStr)


// 19. Use search to find the position of the first occurrence 
//of the word because in the following sentence

const searchKey = GivenStr.search('because');
console.log(searchKey)

//20. Use trim() to remove any trailing 
//whitespace at the beginning and the 
//end of a string.E.g ' 30 Days Of JavaScript '.

const TrimVar = challenge.trim()
console.log(TrimVar)

//21. Use startsWith() method with the string 
//30 Days Of JavaScript and make the result true

const startWithCheckerVar = challenge.startsWith(' 30')//string is starting with space.
console.log(startWithCheckerVar)


//22. Use endsWith() method with the string 
//30 Days Of JavaScript and make the result true

const endsWithCheckerVar = challenge.endsWith(' ');
console.log(endsWithCheckerVar)

//23. Use match() method to find 
//all the a’s in 30 Days Of JavaScript

const matchStr = challenge.match(/a/g)
console.log(matchStr)


//24. Use concat() and merge '30 Days of' and 'JavaScript' 
//to a single string, '30 Days Of JavaScript'

const concatA = '30 Days of';
const concatB = " JavaScript";
const concatBothVar = concatA + concatB;
console.log(concatBothVar)

//25. Use repeat() method to print
// 30 Days Of JavaScript 2 times

const repeatStr = concatBothVar.repeat(2)
console.log(repeatStr)