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