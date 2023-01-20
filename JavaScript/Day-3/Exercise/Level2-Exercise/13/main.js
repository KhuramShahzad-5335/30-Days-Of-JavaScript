// taking input
const Y_O_B = parseInt(prompt("Enter Your Year of birth" , ''));

//creating date object
const CURRENT_YEAR  = new Date();

// getting current-year form date object using getyear.

let year = CURRENT_YEAR.getFullYear();

const AGE = year - Y_O_B;

AGE > 18
    ?   alert(`You are ${AGE}. You are old enough to drive`)
    :   alert(`You are ${AGE}. You wil be able to drive after ${18 - AGE}`);