/*
First remove all the punctuations and change the string to array and count the number of words in the array
*/



let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let finalString = punctuationless.replace(/\s{2,}/g," ");
console.log(finalString)

// after ermpving all the punctuation and extra spaces. we can covert the final string into the required array.

wordsArr = finalString.split(" ");
console.log(wordsArr);

// to show length of this array.

console.log(wordsArr.length);



//----------------------thanks god i did this.----------------------//