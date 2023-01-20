//============================         Q-1       =========================
//Grading system using if else if else

const GRADES = 10000; // try to change grades

if (GRADES <= 100 && GRADES > 79)
    console.log("Grade A")
else if (GRADES > 69 && GRADES < 80)
    console.log("Grade B")
else if (GRADES > 59 && GRADES < 70)
    console.log("Grade C")
else if (GRADES > 49 && GRADES < 60)
    console.log("Grade B")
else if(GRADES > -1  && GRADES < 49)
    console.log("Grade F");
else
    console.log("Enter number between 0-100");

//=========================================================================



//=============================         Q-2         =======================
//check if season us autumn, winter, spring.. using month from date ob:

let date = new Date();

let mm = date.getMonth();

if(mm == 0 || mm == 1 || mm == 11){
    console.log("Its \'Winter\' season.")
}
else if(mm == 2 || mm == 3 || mm == 4){
    console.log("Its \'Spring\' season.");
}
else if(mm == 5 || mm == 6 || mm == 7){
    console.log("Its \'Summer\' season.");
}
else if(mm == 8 || mm == 9 || mm == 10){
    console.log("Its \'Autumn\' season.")
}
else{
    console.log("Enter a valid month number.")
}


//=========================================================================



//=============================         Q-3         =======================
//get what day it is and return if it is weekend or working day.

// try to change weekdays
let promptVal = 'TUEsday';

// converting the days into lowercase to save accuracy.
promptVal = promptVal.toLowerCase();

switch(promptVal){
    case 'sunday':
        console.log("Its working day!");
        break;
    case 'monday':
        console.log("Its working day!");
        break;
    case 'tuesday':
        console.log("Its working day!");
        break;
    case 'wednesday':
        console.log("Its Working day!");
        break;
    case 'thursday':
        console.log("Its working day!");
        break;
    case 'friday':
        console.log("Its working day!");
        break;
    case 'saturday':
        console.log("Its weekend!");
        break;
    default:
        console.log("Plz enter valid day!")
}
