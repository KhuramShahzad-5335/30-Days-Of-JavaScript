//____________In this file we will learn more about strings and some things wee can do using string.

//-----String Declaration

const spaceStr = ' ';
const firstName = "Khuram";
const lastName = "Shahzad";
const age = '20';
const job = "Student";
const country = `Pakistan`
const city = 'Multan'


// strings can be too long

const paragraph = "Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing.\
Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself!\
Fix Punctuation Errors. Find and Add Sources Fast.\
Improve Word Choice."

console.log(paragraph)

//------2.Concatenation
//------Concatenation through + operator

const fullName = firstName + spaceStr + lastName
console.log(fullName)

//------concatination and adding strings 

const intro = fullName + '. I\'m ' + age + ' years old.' + ' I live in ' + country + ', city ' + city + '.' // this is es5 addition
console.log(intro)

//-------3. Escape Sequences in strings

console.log("next \n line, adding \t space, back\\slash,\"iverted comma\'s")


//-------4. template literals and injection of dynamic data in strings 

const a = 2;
const b = 3;

console.log(`Sum of ${a} and ${b} is ${a+b}`)

const intro2 = `Hello I am ${fullName}.\nI am ${age} years old.\nI live in ${city}, ${country}.`;
console.log(intro2)

//-------5. String Methods

const js = "JavaScript"
lengthOfStr = js.length
console.log(lengthOfStr)

//-------6. Accessing litterals of string

const accessLiterals = "HOD";
console.log(accessLiterals[0]);
console.log(accessLiterals.length-1,accessLiterals[2]) // this is to find index of last digit


//-------7. Upper and lowerCase.

const convertInUpLowCases = "HeLLo Iam a TeXt in DiffeRENt cases"
const upperCase = convertInUpLowCases.toUpperCase();
const lowerCase = upperCase.toLowerCase();
console.log(" In UpperCase = ",upperCase,".\n","In lowerCase = ",lowerCase,".")


//------8. String slicing
/*
    1. subStr(starting, number of characters),=. 
    substr method takes two arguments one is starting index, 
    other one is nuber of chahraters to slice

    2. subString(Starting Index, Stopping index) it does not include stopping litteral.
*/

const sliceMe = "Finland"
console.log(sliceMe.substr(3,4))

console.log(sliceMe.substring(3,7))

//-----9. Slitting the String and converting it into array

const simpleSplit = "30, Days, o,f javas,cript";
// the string will convert into array with single element
testSplit = simpleSplit.split()
console.log(testSplit)
// as array contains single element hence its length will be 1
console.log(testSplit.length) 

const splitUsingSpace = "30 Days of javascript"
// in this example the length of array will be 4
console.log(splitUsingSpace.split(' '))
console.log(splitUsingSpace.split(''))// split after each char
console.log(simpleSplit.split(','))// split after each comma

//------10. trimming spaces, commas etc

const trimMe = "    Hello    "
console.log(trimMe,trimMe.length)
afterTrim = trimMe.trim()
// string's leading and trailing spaces are removed and the length of string is proof of that
console.log(afterTrim,afterTrim.length)


//------11-Includes and replace method
// include(stringto check), it is case sensitive.and it returns booleans.

const includeChecker = "30 days of javascript";
console.log(includeChecker.includes('days'))

// replace(oldstring,newstring), it replaces the string, it is also case sensitive,
// if the string is not found it will not replace that
console.log(includeChecker.replace('javascript', 'python'))

//------12. charat method takes index and tell which character is at that index.
charAtVar = "Pakistan"
console.log(charAtVar.charAt(3))
lastChar = charAtVar.length-1
console.log(charAtVar.charAt(lastChar))

//------13-CharCodeAt(Index of character), it takes the index of th echaracter and 
//returns its ASCII code.

let asciiAtIndexCheck = "Khuram"
console.log(asciiAtIndexCheck.charCodeAt(4))// a Ascii is 97

//------14. indexof(substring), it takes sub string and tells its index.

let indexCheck = "3 days of javascript"

console.log(indexCheck.indexOf('s',))
console.log(indexCheck.indexOf('javascript'))

//-------15. lastIndexOf(substring), it takes substring, matches it and then,
// returns its last position.

let lastIndexCheck = "uranussa";

console.log(lastIndexCheck.lastIndexOf('a'))// rreturns last index of a at 7

//-------16. concat(substr, substr,....), it takes many strings and concatenate them.

let concatMe = "30";

console.log(concatMe.concat(" days"," of"," javascript"));


//-------17.StartsWith('Substr'), and EndsWith('substr'),
// it takes str and checks if it starts or ends with that and returns booleans
// note that it is case sensitive, be sure of upper/lower cases

let strtEndCheck = "I am doing 30 days of js challenge, and i am lovin\' it"

console.log(strtEndCheck)

console.log(strtEndCheck.startsWith('am'), strtEndCheck.startsWith('I'))

console.log(strtEndCheck.endsWith('.'), strtEndCheck.endsWith('it'))

//-------18. Search('substring'), it takes sub string as arguent,
// and returns index of firstly matched string 
// it can also take regular expression pattern as an argument to search

searchMe = "30 days of javascript";

console.log(searchMe.search('p'))

//--------19. Match('substr'), it takes string or r.e. pattern as an argument and 
//returns array of found elemets or returns null, lets see how it works.

let matchStr = "I started earning js in jan, 2023.If you don\'t love js 3000 times what else would you love."

pattern1 = "love"
pattern2 = /love/ // without any flag search this
pattern3 = /LOVE/gi // g -flag means search throu whole str, i- flag is for case-insensitive, to output all the matching words

console.log(matchStr.match(pattern1))

console.log(matchStr.match(pattern2))

console.log(matchStr.match(pattern3))

// to extract numbers from the given string lets create a pattern.

pattern4 = /\d+/
//here d with \(escape sequnece means it is an digit not d string )
// + means search for all sequences 
// and if we add g- global flag it will match through whole string and will retun array of matched string

console.log(matchStr.match(pattern4)) // it will search for digits return first matched str.

// to return all numbers in given str use global flag

console.log(matchStr.match(/\d+/g))


//-------19. repeat(how many times), this method takes input int type as an argument and repeats the 
//input as many times as required.

const repStr = "Javeria"

console.log("I love you ",repStr.repeat(10))