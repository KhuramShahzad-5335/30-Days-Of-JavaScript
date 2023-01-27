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
arrAdd = addItem('khuram');
console.log(addItem(5))
console.log(addItem(55));   