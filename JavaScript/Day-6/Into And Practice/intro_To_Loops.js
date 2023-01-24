
// //=======================================     FOR LOOP     ================================================>

// /**
//  * SYNTAX:
//  * for (initialization; condition; increment/decrement) {
//  *   // code block to be executed
//  * }
//  */

// // Example 1
let i;
for(i = 0; i <= 5; i = i + 1){
    console.log(i);
}

// // Example 2

for(i = 5; i >= 0; i--){
    console.log(i);
}

// example 3
// to multiply a number by itself;

for(i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`);
}



// example 4
// using for loop put array 1 elements to array2 and makw them uppercase

let countries = ['pakistan','india','bangladesh','sri lanka', 'uganda'];
let newArr = [];

for(i = 0; i < countries.length; i ++){
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);




//  example-5
//adding all numbers of the array;

let arr = [0,1,2,3,4,5]
let sum = 0
for(i = 0; i < arr.length; i++){
    sum = sum + arr[i]; // sum+ = arr[i]; can be shorten this way;
}
console.log("Sum of elements of Array is:",sum)



// example 6
// creating new array based on previous arr;
const numArr = [1,2,3,4,5];
let sqrNoArr = [];
for(i = 0; i < numArr.length; i ++){
    sqrNoArr.push(numArr[i] ** 2);
}
console.log("Square of each element number array is: ", sqrNoArr);

//creating new countries array based on other countries array;

const oldCountriesArr = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
const newCountrieArr = [];

for(i = 0; i < oldCountriesArr.length; i ++){
    newCountrieArr.unshift(oldCountriesArr[i]);
    newCountrieArr.toUpperCase;
}
console.log(newCountrieArr);





//___________________________________________________________________________________________________





//<=========================================        While & Do-While loop ===================================================

// the purpose of the while loop is perporm the operation repeatedly till the condtion is true;

//example -1--------While-Loop.

i = 0;
while(i <= 5){
    console.log(i);
    i++;
}

//exampe -2---------Do-While loop;
i = 0;
do{
    console.log(i)
    i++;
}while(i <= 5);






//______________________________________________________________________________________________________________________________






//=====================================        For Of Loop          ===================================================
/*
-----It is used to iterate through the arrays. As in conventional loops we have to deal with the index of the element.
    Syntax:
        for(const num of array){
            //body of the loop;
        }
        here const num contains the current element of the array/which could be number boolean or anything, we can take this element do what we want to do with this element.
*/



// example 1
let num = [1,2,3,4,5,true];
for(const el of num){
    console.log(el,typeof(el))
}


// example 2;
//square of each element of array;

num = [1,2,3,4,5];
for(const el of num){
    console.log(el*el);
}




// example 3
// sum of elements of array.
num = [1,2,3,4,5];
sum = 0;
for (const el of num) {
    sum = sum + el;
}
console.log(sum);


//example 4;
// to create newarr using another arr;

const webTech = ['html', 'css','js','Sass','bootstrap','react'];
let newWebTech = [];
for (const tech of webTech) {
    newWebTech.push(tech.toUpperCase());
}
console.log(newWebTech);


// example 4.
// create new array which contains only 1st letter of the newWebTech.eg htm = h;

newWebTech;
let webTechLetter = [];
for (const tech of newWebTech) {
    console.log(tech[0])
}





//___________________________________________________________________________________________________________________




//===============================       BREAK & Continue        ===========================

//BREAK is used to interrupt the loop by using a condition, if condition becoomes true it breaks;

//Example:  1

i = 0;
for(i = 0; i <= 5; i ++){
    if(i == 3){
        break;
    }
    console.log(i);   
}




// we use CONTINUE statement to skip certain iteration.
i = 0;
for(i = 0; i <= 5; i ++){
    if(i == 3){
        continue; // when i == 3, it will skip this iteration and start the loop from next iteration.
    }
    console.log(i)
}







//========================================      THE END     ===============================================
