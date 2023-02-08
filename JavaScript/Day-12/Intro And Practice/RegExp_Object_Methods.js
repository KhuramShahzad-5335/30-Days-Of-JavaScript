//==================>>>     REGEXP OBJECT METHODS.

//=> 1. TESTING FOR MATCH:
// TEST() =>  is used to check if the pattern is found and returs an array.

//EXP: 1
 
let str = 'I love JavaScript.';
let pattern = /love/g     // g is to check through whole string.
console.log(pattern.test(str));



//=> 2. Array containing all of the match.
//MATCH() : Method is used retuns an array is used without g flag. the array contains all the matches and index, and capturing groups , or null if no result is found.

// so match() returns an aray containing pattern, index, input and group.

//EXP: 1-

let str1 = 'I love JavaScript';
let patter1 = /love/

let res = str.match(patter1);

console.log(res);


// EXP: 2-
// now use global flag and it will only return input.

let pattern2 = /love/g;

res = str1.match(pattern2);
console.log(res);



// => SEARCHING FOR RESULTS INDEX.
// SEARCH() :  This method is used to search for the pattern if it is found it return s the index of the pattern or -1  if not found.

// EXP: 1
 pattern = /love/g ;
 res = str.search(pattern);
 console.log(res);




// => REPLACING AN SUBSTRING:
// REPLACE() :  replaces takes two parameters one is pattern and the other one is text to be replaced with. It searches through the text, if match found then replaces that text with given.

// EXP : 1-
let sentance = 'Python is almost perfect programming language. I reccommend everyone to learn Python.';

let matchReplaced = sentance.replace(/python/gi, 'Javascript');

console.log(matchReplaced);



// EXP : 2-
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

pattern = /%/g;
let replaceWith = '';

matchReplaced = txt.replace(pattern, replaceWith);

console.log(matchReplaced);





