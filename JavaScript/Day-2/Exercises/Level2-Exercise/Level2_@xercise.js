//------------------------1

/*
Using console.log() 
print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/

console.log("The quote \'There is no exercise better\
 for the heart than reaching down and lifting people up.\
'\ by John Holmes teaches us to help one another.")




//-----------------------------2.
/*
Using console.log() 
print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/


console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don'\ t just give money but reach out your hand instead.\"")





//-----------------------------3.
/*
Check if typeof '10' 
is exactly equal to 10. If not make it exactly equal.
 */

let typeCheck = '10';
console.log(typeof(typeCheck) == typeof(10))
let strToNum = parseInt(typeCheck)
console.log(typeof(strToNum) == typeof(10))




//-----------------------------4.
/*
Check if parseFloat('9.8') is equal 
to 10 if not make it exactly equal with 10.
*/

let strToFloatVar = '9.8'
floatVal = parseFloat(strToFloatVar)
console.log(floatVal == 10)
console.log(Math.round(floatVal) == 10)







//---------------------------5
/*
    Check if 'on' is found in both python and jargon
*/

const match1 = 'python';
const match2 = 'jargon';

console.log(match1.includes('on'),match2.includes('on'))







//--------------------------6.
/*
    I hope this course is not full of jargon. 
    Check if jargon is in the sentence.
*/

const checkWordInStr = 'I hope this course is not full of jargon.';
console.log(checkWordInStr.includes('jargon'))






//--------------------------7.
/*
    Generate a random number between 0 and 100 inclusively.
*/

const randMin = Math.random()
console.log(randMin)

const requiredRandomNumbers = randMin * 101;
console.log(Math.round(requiredRandomNumbers))






//--------------------------8.
/*
    Generate a random number between 0 and 100 inclusively.
*/

// baad mn krna ha, mind is fucked for now.






//---------------------------------9.
/*
    Generate a random number between 0 and 255 inclusively.
*/

const randomNumberReq = Math.random() * 255;
console.log(Math.ceil(randomNumberReq))









//-------------------------------10
/*
    Access the 'JavaScript' 
    string characters using a random number
*/

const accessStr = 'JavaScript'
lastIndex = accessStr.length - 1
console.log(lastIndex)
randomNumToAccess = Math.ceil(Math.random() * lastIndex)
console.log(randomNumToAccess)
console.log(accessStr.charAt(randomNumToAccess))






//-----------------------------12.
/*
Use console.log() and escape 
characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

*/

console.log("\
1\t1\t1\t1\t1\n\
2\t1\t2\t4\t8\n\
3\t1\t3\t9\t27\n\
4\t1\t4\t16\t64\n\
5\t1\t5\t25\t125\
")










//---------------------------------12.
/*

Use substr to slice out the phrase because because because
from the following sentence:
    You cannot end a sentence with 
    because because because is a conjunction
*/

const givenStrToSLice = 'You cannot end a sentence with\
                        because because because is a conjunction'
firstIndexOfStr = givenStrToSLice.search(/because/g)
console.log(givenStrToSLice.substr(firstIndexOfStr,23))
