//<===================================      If-Else    ================================
//----------------------------1.
//---IF Condition
//Syntax =  if(Condition){
        //code goes here;
//  }

let num = 3;

if(num > 0){
    // this part of condition runs for truthy.
    console.log(`${num} is Positive Interger`);
}

//or
if (num > 0)    
    console.log(`${num} is Positive Interger`)
// ............we can omit the brackets.




//------------------------------------------------------------------------





// if the if is false another bblock is needed to execute other condition.

// --- if-else
num = -3;
if(num > 0)
    // this part of code executes for truthy.
    console.log(`${num} is \'Positive' Interger`);
else
    // this part of code executes for falsy.
    console.log(`${num} is \'Negative\' Interger`)




let isRaining = false;

if(isRaining)  //or(isRainig == true) //in both ways condition is true.
    console.log("You need a rain coat.");
else
    console.log("No need for rain coat.")






//-------------------------------------------------------------------------------






//---if-elseif-else
//When we need to to make decisions based on multitple condition we use this way.

/*
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code
}
*/

//Example:

num = 0;

if(num > 0)
    //truthy
    console.log(`${num} is positve number`);
else if(num < 0)
    //truthy
    console.log(`${num} is negative number`);
else if(num == 0)
    //truth
    console.log(`${num} is zero`);
else
    //falsy
    console.log('${num} is not a number');






//<==================================================================================>









//==============================      Switch Statement      =========================

//Switch is an alternative for if else if else else. 

/*
 
    switch(caseValue){
        case 1:
            // code
            break
        case 2:
            // code
            break
        case 3:
            // code
            break
        default:
            // code
}

 */

//example

let weather = 'rainy';

switch(weather){

    case 'sunny':
        console.log("It\' sunny outside");
        break;
    case 'cloudy':
        console.log("It might be cold, get a coat");
        break;
    case 'rainy':
        console.log("Get a rain coat, its rainy.");
    default:
        console.log("No need for the coat.")


}





//Example-2
// get day from date object show in form of english language eg(monday...)

let day = new Date();

let numDay = day.getDay(); // returns day in number from 0-7

switch(numDay)
{
    case  0 :
        console.log("Sunday");
        numDay = 'Sunday';
        break;
    case 1:
        console.log("Monday");
        numDay = 'Monday';
        break;
    case 2:
        console.log("Tuesday");
        numDay = 'Tuesday';
        break;
    case 3:
        console.log("Wednesday");
        numDay = 'Wednesday';
        break;
    case 4:
        console.log("Thursday");
        numDay = 'Thursday';
        break;
    case 5:
        console.log("Friday");
        numDay = 'Friday';
        break;
    case 6:
        console.log("Saturday");
        numDay = 'Saturday';
        break;
    default:
        console.log("Non-SenseDay");
        numDay = 'Non-SenseDayday';
    }
console.log(numDay);










//==================================================================================>








//===========================       Ternary Operators       ==========================

//Aother way of writing conditions is through ternary operators.
// commnonly used when condition could only be tru or false/ incase of boolean conditions

isRaining = true;

isRaining
    ?   console.log("It is Raining outside, get a coat.")
    :   console.log("No need of the coat!");




//====================================      THE END     ==============================
//  ++++++++++++++++++++++++++++++++++        :)        +++++++++++++++++++++++++++++







