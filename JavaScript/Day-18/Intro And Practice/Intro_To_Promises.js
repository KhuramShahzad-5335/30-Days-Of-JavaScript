//============              INTRODUCTION TO PROMISES             ==============

/*
        We as human give or recieve a promise to do some
    activity at some at some point of time. If we keep
    the promise we make em happy, and if we break the 
    promise then it may cause discontentment. Promise in
    javascript has something in common with the above example.


        A promise in js is a way to handle asynchrounous operations. It allows
    handlers with the asynchronous actions eventual success value or failure reason.
    This lets asynchronous actions return the values like synchronous methods : 
    instead of immediately returning a value., asynchronous method returns a
    promise to supply the value at some point in the future.

        A promise can be one of following states : 
    1. Pending : - Initial state, neither fulfilled nor rejected.
    2. Fulfilled  :- Meaning operation completed successfully.
    3. Rejected  :- Meaning operation completed successfully.
*/

/*
    1. Pending : 
        A pending promise can be completed with an value or can ve dismissed with 
    an error. When either of these options happen, the associated handlers queued
    up by a promise's then method are callled. (If the promise has already been 
    filled or rejected when a corresponding handler is attached, the handler will
    be called, so there is no race condition between an asynchronous operation
    operation completing and its handler being attached.)

    As th ePromise.prototype.then() and Promise.prototype.catch() methods
    return promises, they can be chained.
*/


// ============         CALLBACK FUNCTION           ===================
/*
        To understand promises let us see an example of callback function
    which takes two parameters err and result. If the error parameter is 
    is false then it will return else it will return the result.
*/

// EXAMPLE : - 
const promiseME1 = callback => {
    setTimeout( () => {
        const skills = ['HTML', "CSS", 'JS'];
        callback('IT did\'t go well', skills);
    }, 2000);
}

// here comes the callback function :- 
const callback = (err, res) => {
    if(err){
        return console.log(err);
    }
    else console.log(res);
}

promiseME1(callback);



// now lets repeat above example and return the result

const doSomethingBRo = callback2 => {
    const skills = ['HTML', 'CSS', 'JS'];
    setTimeout(() => {
        callback2(false, skills);
    }, 2000)
}


// define the callback function here.

const callback2 = (err, res) => {
    if(err) console.log(err);
    else console.log(res);
}

doSomethingBRo(callback2);