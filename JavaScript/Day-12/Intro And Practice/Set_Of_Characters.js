//==============>>>         CREATING A SET OF CHARACTERS USING SETS         .........

// [] : Set of characters:
    //  [a-c] means a, b or c
    //  [a-z] means any chacter between a, z
    //  [A_Z] means any chacter between A, Z
    //  [0-3] means any number between 0,1,2,3
    //  [0-9] means any number between 0 to 9
    //  [a-zA-Z0-9] mean any character which is a to z, A to Z, 0 to 9


// \: Uses to escape special characters.
    // \d :  matches for strings containing numbers.
    // \D :  matches for strings does not contain numbers.
    // \D :  matches for strings does not contain numbers.


// . : any character except new line character.


// ^ : Starts with :
    //  r'^substring' eg r'^love', a sentance which starts with a word love.
    //  r'[^abc]' : means any character starting with a,b or c.


// $: : Ends with :
    // r'substring$' eg r'love$', a sentance which ends with the word love.


// * : Zero or more times :
    // r'[a]*' , means a is optional or it can appear many times.


// +: one or more times:
    // r'[a]+ : means a can appear once or more than once.


// ? : Zero or one times:
    // r'[a]?' means atleast once or more times appearance.


// \b : word bounder, matches with the beginning or ending of a word.


// {3} :  Means exactly 3 characters.
// {3, } :  Means 3 or more characters.
// {3, 8} :  Means characters between 3 or 8.


// |:  : either or:
    // r'apple | banana' means either apple or banana.


// () : Capture and group.







//***  LETS SEE SOME EXAMPLES TO CLARIFY ABOVE META CHARACTERS :


// EXP : 1 : Lets use square brackets to include lower or upper case in apple regExp.

let pattern = '[Aa]pple'     // this bracket pair means either A or a.
let txt = ' Apple and banana both are fruits.'

let matches = txt.match(pattern);

console.log(matches);






// EXP : 2 : Escape character(\) in RegExp.

pattern = /\d/g;        // \d is special char which means digits.
txt = 'This is testing txt, written in 2023, 1/ 10';

matches = txt.match(pattern);      // this metod returns aray of digits
console.log(matches); 




// EXP : 3 : ONE OR MORE TIMES : 

// to get full pair of digits or grp or digits we do this
pattern = /\d+/g          // \d+ will get full grp of digits.

matches = txt.match(pattern);
console.log(matches);




// EXP : 4 : PERIOD .   :
//  period means any char to initial character for once except new line.

pattern = /[a].]/g          // a and . means any char except new line
txt = 'Apple and banana both are fruits.'

matches = txt.match(pattern);
console.log(matches)



// Now to get full txt we will use, + operaor which selects any char one or more times.

pattern = /[a].+/g ;

matches = txt.match(pattern);
console.log(matches);







// EXP : 5 : (*) 0 OR MORE TIMES :
// ZERO OR MANY TIMES :  The pattern may not occur or may occur many times.


pattern = /[a].*/g;
txt = 'Apple and banana are sweet fruits.';     //. any char except next line, + any character once or many times 

matches = txt.match(pattern);
console.log(matches);








// EXP : 6 : 0 or once ?/
pattern = /[Ee]-?mail/g;    // which means mail is optional. // Ee any can appear.
txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.';

matches = txt.match(pattern);
console.log(matches);









// EXP : 6 : QUANTIFIER IN REGEXP : 
//  We can speify the length of the substring we are looking for in a text, using curly braces
//  lets imaging we are interested in a substring which has exactly 4 characters.

pattern = /\b\w{4}\b/g        //  exactly strign of 4 characters long.
txt = 'This regular expression example was made in December 6,  2019.';

matches = txt.match(pattern);
console.log(matches);



// Exactly four characters string without numbers.
pattern = /\b[a-zA-Z]{4}\b/g

matches = txt.match(pattern);
console.log(matches);








// EXP : 7 : CART ^
// ^ starts with returns an array of substring from which the text starts.
txt = 'this is text to check the working of starts with meta character.'
pattern = /^[Tt]his/;

matches = txt.match(pattern);
console.log(matches);


// If ^ is in set than it negates, lets see example.
txt = 'This regular expression example was made in December 6,  2019.'
pattern = /[^a-zA-Z,. ]+/g     // means not a-z,A-Z no comma periood or space + contains all the character except the negated
matches = txt.match(pattern);
console.log(matches);







// EXP : 8 : NEGATION :
//  Negation will check for the matches and will return the opposite things.

txt = 'This regular expression example was made in December 6,  2019.'

//  Now neglect the text and return only numbers
pattern = /[^a-zA-Z,. ]+/g;

matches = txt.match(pattern);
console.log(matches);




// EXP : 8 : EXACT MATCH:
// To match all the words it should have ^ in the starting and $ in the ending.

txt = 'Asabeneh'

// now we will try to match if the pattern has all the elements in the txt string.
pattern = /^[a-z][A-Z]{3,12}$/;

matches = pattern.test(txt);
console.log(matches);














//=======================       THE END        ====================