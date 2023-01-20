let age = prompt("Enter your age: ", '');

if(age > 18)
    alert(`You are old enough to drive.`);
else
    alert(`It will take ${age - 18} years more for you to drive`);

console.log(`You are ${age}`);

let myAge = 25;

if(myAge > age)
    console.log(`I am ${myAge - age} older than you`);
else
    console.log(`I am ${age - myAge} older than you`);
