//=====================     1
//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


// will do later.






//=====================     2.
//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.



// alse will do later.






//==================        3.
//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    let arrayElements = '';
    for (const el of arr) {
        arrayElements = arrayElements + '\n' + el;
    }
    return arrayElements;
}
const printMe = [1,2,3];
console.log(printArray(printMe))





//=================         4
//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
    let dateTime;
    let date = new Date();

    let dd = date.getDate();
    if(dd < 10){
        dd = '0' + dd;
    }

    let mm = date.getMonth() + 1;
    if(mm < 10){
        mm = '0' + mm;
    }
    
    let yyyy = date.getFullYear();

    let hh = date.getHours();
    if(hh < 10){
        hh = '0' + hh;
    }

    let min = date.getMinutes();
    if(min < 10){
        min = '0' + min
    }

    dateTime = `${mm}/${dd}/${yyyy} ${hh}:${min}`;
    
    console.log(dateTime);
}
showDateTime();




//=========================         5
//Declare a function name swapValues. This function swaps value of x to y.

const swapValues = (x,y) => {
    let tempx,tempy;
    tempx = x;
    tempy = y;
    return 'x = '+ tempy + ' and y = ' + tempx;
}
console.log(swapValues(1,2))




//======================           6.
//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    const newArr = [];
    for (const el of arr) {
        newArr.unshift(el);
    }
    return newArr;
}
const reverseMe = [1,2,3,4,5]
console.log(reverseArray(reverseMe));




//====================           7.
//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr){
    const newArr = [];
    for (const el of arr) {
        newArr.push(el.toUpperCase());
    }
    return newArr;
}
const capitalizeMe = ['apple','Mango','orange'];
console.log(capitalizeArray(capitalizeMe));





//====================          8.
//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const arrAdd = [];
const addItem = (item) => {
    arrAdd.push(item);
    return arrAdd;
}
carrAdd = addItem('khuram');
console.log(addItem(5))
console.log(addItem(55));   



//======================        9.
//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.
let remArr = ['Khuram',23,1,2,3,4];
function removeItem(index){
    if(index != undefined || index != null){
    remArr.splice(index,1);
    }
    return remArr;
}
remArr = removeItem()
console.log(removeItem(0));
console.log(removeItem(2));





//====================          10.
//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(num){
    let i = 0,
    sum = 0;
    while(i <= num){
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumOfNumbers(10));




//===================           11.
function sumOfOdds(num){
    let i = 0,
    sum = 0;
    let evenNum = [];
    while(i <= num){
        if(i % 2 !== 0){
            evenNum.push(i);
            sum += i;
        }
    i++;
    }
    return sum + "-" + evenNum;
}
console.log(sumOfOdds(5));





//================              12.
//it is almost same as above.





//===============               13.
//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function evensAndOdds(posIntNum){
    let numOfEvens = 0,
        numOfOdds = 0,
        i = 0,
        count = 0;
        while(i <= posIntNum){
            if(i % 2 == 0){
                numOfEvens += 1;
            }
            else{
                numOfOdds += 1;
            }
            i ++;
        }
        count = 'Nomber of evens = ' + numOfEvens + '\nNumber of odds = ' + numOfOdds;
        return count;
}
console.log(evensAndOdds(100));





//==============        14
//Write a function which takes any number of arguments and return the sum of the arguments.

function regSum(){
    let sum = 0;
    for (const arg of arguments) {
        sum += arg;
    }
    return sum;
}
console.log(regSum(1,2,3,4,5,6));


//or in arrow function we will write above code as follows:

const arrowSum = (...num) => {
    let sum = 0;
    for (const n of num) {
        sum += n;
    }
    return sum;
}
console.log(arrowSum(1,2,3,4,5,6));




//====================          15.
function randomUserIpGenerator(){
    let ipAddress =  Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 256);
    return ipAddress;
}
console.log('IP-Address: ',randomUserIpGenerator())




//====================          16.
//it is almost same as above.





//==================        17.
//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

const hexChar = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
let index = hexChar.length - 1;

function hexNumGenerator(){
    //generate random number between 0,15 as an index.
}
console.log(hexNumGenerator());