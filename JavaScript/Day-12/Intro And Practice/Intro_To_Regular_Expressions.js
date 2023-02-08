//================      REGULAR EXPRESSIONS.
//=>  Regular expressions is a small programming language in itself, which helps us find patterns in diferent datatypes.


// *** DECLARATION :
// To use regEx in javascript we use regExp constructor or can declare it by ourself us by using a pair of forward slashes, follwed by a flag.



// To declare a string we use quotes of all types and to declare a regex we use pair of forward slashes followed by a flag which could be, g, i, m, s, u or y.





//==========        REG_EXP PARAMETERS....
// A regurlar expressions takes two parameters one is regEx pattern  and the other one is a flag,

//=> 1. PATTERN:
    // ***  A pattern could be any text, or any form of pattern that  has some similarity. For example we migthg be intersted in looking for a pattern in an contact number, or an spam in email, in spam email we check for some patterns and then filter it as spam mail.



// => 2. FLAGS:
    // ***  Flags are optional type of parameters. Which are there to determine the type of the searching.

    // g:  flag means global, it means we are searching in the whole text

    // i :  this flag means case insensitive.

    // m : multiLine







// =================>>>     CREATING A PATTERN USING CONSTRUCTOR.....

// EXP: 1.
// regex without flags

let pattern0 = 'love';
let regEx0 = new RegExp(patter0);    //  pattern without flag.


// RegEx with flag of global and case insensitive

let patter1 = 'love';
let flags1 = 'gi';
let regEx1 = new RegExp(patter1, flags1);


// declaring directly using regExp object.

let regEx2 = new RegExp('love', 'gi');









//============>>>       Creating a pattern without RegExp Constructor

//EXP : 1.

let regEx3 = /love/gi  ;

