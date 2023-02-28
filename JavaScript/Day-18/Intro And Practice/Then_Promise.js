// ===== >      PROMISE CONSTRUCTOR        <===== //

/*
        We can create a promise using the promise constructor. 
    We can create a new promise using the keyword new followed by the Promise
    word and paranthesis. Inside the paranthesis it takes a callback function.
    The promis's callback function has two parameters resolve and reject functions
*/

// SYNTAX

const promiseObject = new Promise((resolve, reject) => {
    resolve("Success");
    reject('Failure');
})


// EXAMPLE WITH THE PROMISE : -

const doPromise2 = new Promise((resolve, reject) => {
    setTimeout( () => {
        const skills = ['HTML', 'CSS', 'JS'];
        if(skills.length > 0) {
            resolve(skills);
        }
        else{
            reject('Something went wrong!');
        }
    }, 2000);
});

doPromise2
.then(result => {
    console.log(result);
})
.catch(error => {
    if(error){
        console.log(error);
    }
});

// In the above example we have chained the then and catch methods with the
// do promise function.


// EXAMPLE : 2 :-
/*
        Above example is settled with the resolve. Lets create a the above example
    where it will be handled with the reject method
*/

const doPromise3 = new Promise( (resolve, reject) => {
   const skills = [];
    if(skills.length > 0){
        resolve(skills);
   }
   else{
    reject('Arrays is empty, you dumb shit!');
   }
});

doPromise3
.then((result) => {
    console.log(result);
})
.catch((error) => {
    if(error){
        console.error(error);
    }
});