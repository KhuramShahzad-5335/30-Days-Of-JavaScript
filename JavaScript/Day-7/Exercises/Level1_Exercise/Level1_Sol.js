//================      1
//Declare a function fullName and it print out your full name.
function fullName(){
    let fname = 'Khuram';
    let lname = 'Shahzad';
    console.log(`${fname} ${lname}`); 
}
fullName();



//================      2
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(fname,lname){
    let fullName = fname + ' ' + lname;
    return fullName;
}
console.log(fullName('Khuram','Shahzad'));



//==============        3
//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2){
    let sum = num1 + num2;
    return sum;
}
console.log(addNumbers(2,5));



//==============        4
//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = function(length,width){
    return length * width;
}
console.log(areaOfRectangle(10,20));



//=============         5
// /A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
(function(length,width){
    return console.log(2 * (length + width));
})(10,20);




//============          6
//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = function(l,w,h){
    return (l * w * h);
}
console.log(volumeOfRectPrism(2,2,2));




//============          7
//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.

const areaOfCircle = function(r){
    return Math.round(Math.PI * (r * r));
}
console.log(areaOfCircle(5));




//==============        8.
// /Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    let circumference = 2 * 3.14 * r;
    return circumference;
}
console.log(Math.round(circumOfCircle(5)));



//=================     9.
//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density = function(mass,volume){
    return (mass * volume);
}
console.log(density(5,5.9));



//=================         10.
//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speedOfMovingObject = function(distance,time){
    return distance/time;
}
console.log(speedOfMovingObject(10,2));





//================          11.
//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass,gravity){
    return mass * gravity;
}
console.log(weight(10,10));





//================          12
//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (oC) => (oC * 9/5) + 32;
console.log("oF: ",convertCelsiusToFahrenheit(50));





//==============            13.
/**
 * Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
 */


const BMI = function(weight,height){
    let message = '';
    let bmi = weight/(height * height);
    if(bmi < 18.5){
        message = 'Underweight!';
    }
    else if(bmi > 18.5 && bmi <= 24.9){
        message = 'Normal weight!';
    }
    else if(bmi > 25 && bmi < 30){
        message = 'Overweight!';
    }
    else if(bmi > 30){
        message = 'Obese.';
    }

    return `Your BMI is ${Math.round(bmi)} and you are ${message}`;
}
console.log(BMI(125,2.2));




//==========================        14
//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    let message;
    if(month == 12 || month == 1 || month == 2){
        message = 'Winter';
    }
    else if(month == 3 || month == 4 || month == 5){
        message = 'Spring';
    }
    else if(month == 6 || month == 7 || month == 8){
        message = 'Summer';
    }
    else if(month == 9 || month == 10 || month == 11){
        message = 'Autumn';
    }
    return message;
}
console.log(checkSeason(4));





//======================        15.
//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(n1,n2,n3){
    let max = 0;
    if(n1 > n2 && n1 > n3){
        max = 'Max number is = ' + n1;
    }
    else if(n2 > n1 && n2 > n3){
        max = 'Max number is = ' + n2;
    }
    else if(n3 > n1 && n3 > n2){
        max = 'Max number is = ' + n3;
    }
    else if(n1 == n2 == n3){
        max = 'All numbers are equal.'
    }
    else{
        max = "Enter number like these..(5,6,7)"
    }
    return max;
}
console.log(findMax(1,2,3))



