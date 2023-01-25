//variables to be reused.
let i,j;

//=================     1
//Iterate 0 to 10 using for loop, do the same using while and do while loop

//using for loop.
i = 0;
for(i = 0; i <= 10; i++){
    console.log(i)
}

//using while loop
i = 0;
while( i <= 10 ){
    console.log(i);
    i ++;
}

//using do-while loop.
i = 0;
do{
    console.log(i);
    i ++;
}while(i <= 10 )




//===========================       2
//Iterate 10 to 0 using for loop, do the same using while and do while loop

//using for loop.
i = 10;
for(i = 10; i >= 0; i --){
    console.log(i);
}

//using while loop.
i = 10;
while(i >= 0){
    console.log(i);
    i--;
}

//using do-while loop.
i = 10;
do {
    console.log(i);
    i--;
} while (i >=0);






//======================        3
//Iterate 0 to n using for loop.

let n = 3;
for(i = 0; i <= 3; i++){
    console.log(i)
}




//===========================       4
//  Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

let str = '#';
for(i = 0; i <= 5; i++){
    console.log(`${str}\t \n`);
    str = str + '#';
}




//=============================     5
// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(i = 0; i <= 10; i ++){
    console.log(`${i}\t * \t${i}\t =\t ${i * i}`)
}




//====================      6
// Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

console.log(`i\t\t i\^2\t\t i^3`)
for(i = 0; i <= 10; i ++){
    console.log(` ${i}\t ${i * i}\t ${(i * i) * i} `)
}


//===========================       7
//Use for loop to iterate from 0 to 100 and print only even numbers

for(i = 1; i <= 100; i ++){
    if(i % 2 !== 0)
        continue;
    console.log(i)
}




//===========================       7
//Use for loop to iterate from 0 to 100 and print only odd numbers

for(i = 1; i <= 100; i ++){
    if(i % 2 == 0)
        continue;
    console.log(i)
}




//====================       9
//Use for loop to iterate from 0 to 100 and print only prime numbers

// a prime number is a number which can be divided by itself, or 1;

// loop through 1-100;
// then get a number from 2 to (i - 1)
//divide i by the other loop 
//then show the output.

//don`t know th esolution.


//========================      10
//The sum of all numbers from 0 to 100 is 5050.

//loop through all the numbers 1-100
sum = 0;
for(i = 0; i <= 100; i ++){
    //on each iteration add the number and update sum variable value;
    sum += i;
}
console.log(`Sum of number from 0 to 100 is ${sum}`);





//============================      11
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//lets iterate from 1-100
let sumEven = 0;
let sumOdd = 0;
for(i = 0; i <= 100; i ++){
    //if a number is odd exclude that.
    if(i % 2 == 0){
        continue;
    }
    sumOdd += i;
}
console.log(`Sum of all odd numbers between 0-100 is ${sumOdd}`)
for(i = 0; i <= 100; i ++){
    //if a number is odd exclude that.
    if(i % 2 !== 0){
        continue;
    }
    sumEven += i;
}
console.log(`Sum of all even numbers between 0-100 is ${sumEven}`)



//======================        12.
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

sumEven = 0;
sumOdd = 0;
const sumArr = [];
for(i = 0; i <= 100; i ++){
    //if a number is odd exclude that.
    if(i % 2 == 0){
        continue;
    }
    sumOdd += i;
}
for(i = 0; i <= 100; i ++){
    //if a number is odd exclude that.
    if(i % 2 !== 0){
        continue;
    }
    sumEven += i;
}
sumArr.push(sumOdd,sumEven);
console.log(sumArr)




//========================  13.
//Develop a small script which generate array of 5 random numbers

//generate 5 random numbers.
//push them to the array.
i = 1;
let arrayOfRandNum = [];
while(i <= 5){
    let rand = parseInt(Math.random() * 10);
    arrayOfRandNum.push(rand)
    i ++;
}
console.log(arrayOfRandNum);




//====================      13
//Develop a small script which generate array of 5 random numbers and the numbers must be unique

const uniqueRands = [];
let randNum;
//generate 5 random numbers.
i = 1;
while(i <= 5){
    randNum = Math.floor(Math.random() * 10);
    if(uniqueRands.indexOf(randNum) !== -1){
        continue;
    }
    uniqueRands.push(randNum);
    i++;

}
console.log(uniqueRands)



//Develop a small script which generate a six characters random id:

//---------5j2khz

//lets create a array of characters and numbers to generate random id of characters with unique items.

let char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
i = 0;
// Now we need to generate random index of char, 5 times,each index should be unique;
let randIndex;
let randId = 0;
while(i < 5){
    randIndex = Math.floor(Math.random() * char.length);
    //now concat the char at random index of the string to randId;
    randId = randId + char.charAt(randIndex);
    i++;
}
console.log(randId);