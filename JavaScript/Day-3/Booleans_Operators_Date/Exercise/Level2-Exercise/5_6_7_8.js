//====================================5======================
//y = 2 * x - 2  
//2. x = (y + 2)/2

const x = 0;
const y = 0;

// x-intercept
//Substitute x=0 into the equation and solve to find 
//the intercept (0,2)with the yaxis.


const xIntercept = (y+2)/2;
console.log(`X-INTERCEPT: (${xIntercept},0)`);


// x-intercept
//Substitute x=0 into the equation and solve to find 
//the intercept (0,2)with the yaxis.

const yIntercept = 2 * x - 2;
console.log(`X-INTERCEPT: (0,${yIntercept})`);

//to find slope
// m = (y2-y1)(x2-x1)
//or y = mx + b

let x1 = xIntercept;
let y2 = yIntercept;
const x2 = 0;
const y1 = 0;

const m = (y2 - y1) * (x2 - x1);

console.log(`Slope Of Expression:\ny = 2x - 2 is ${m}`)














//=============================================6============
//Slope is m = (y2-y1)/(x2-x1). 
//Find the slope between point (2, 2) and point(6,10)

let x1Val = 2,
    y1Val = 2,
    x2Val = 6,
    y2Val = 10;

slope = (y2Val - y1Val) / (x2Val - x1Val);
console.log(`Slope Of (2,2) & (6,10) is ${slope}`)




//===========================================7=============
//comparison of 5,6 questions slope
console.log(m === slope) //it is true.








//==========================================8==============
//Calculate the value of y (y = x2 + 6x + 9). 
//Try to use different x values and 
//figure out at what x value y is 0.


// solution by factorization
//x^2 + 3x + 3x + 9, as px2, = 3x * 3x;
//taking commons, x(2x + 3)+3(2x+3)
//(x+3),(2x+3),
// x = (-3,-2/3)

const x1Eq = -3;
const x2Eq = -3/2;

const y1Eq = (x1Eq * x1Eq) + 6*x1Eq + 9;
console.log(y1Eq)

y2Eq = (x2Eq * x2Eq) + 6*x2Eq + 9;
console.log(y2Eq)

// to find y-intercept,y will be, let x = 0

yEq = x*x + 6*x + 9;
console.log(yEq);

// value of y is zera when x == -3





//=======================================================>
