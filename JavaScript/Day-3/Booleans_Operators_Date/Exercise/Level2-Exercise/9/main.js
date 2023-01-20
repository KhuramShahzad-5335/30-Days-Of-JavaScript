const HOURS = parseInt(prompt("Enter Hours You Worked Per Week: ", ''));
const RATE_PER_HOUR = parseInt(prompt("Enter Rate Per Hours: ", ''));

let earningPerWeek = HOURS * RATE_PER_HOUR;

alert(`Your Weeky Earning Is ${earningPerWeek}$`);

console.log(`Your Weeky Earning Is ${earningPerWeek}$`);