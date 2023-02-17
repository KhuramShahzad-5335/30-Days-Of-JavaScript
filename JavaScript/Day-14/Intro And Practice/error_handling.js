// ==============           ERROR HANDLING              ================

// JavaScript is an loosely typed language, sometimes it throws runtime errors, like when you try to access undefined variable or undefined function

// So like all popular prigramming languages, it provides error handling mechanism.

// The mechanism is try cathch and finally block




// ============      SYNTAX FOR THE ERROR HANDLING BLOCKS.

try {
    // code that may throw the error.
}
catch(error){
    //code to be executed if the error occurs
}
finally{
    // code to be executed even if error occurs or not.
}




/**
 * Try : 
        Wrap the suspicious code in try block, which may through the error.
    This block helps us test the code which returns the error.

 * Catch: 
        Write code to do something in catch block after the errr occurs.
    It also takes parameters like error.
    This is usually used to log the error message or some warning message.

 *Finally : 
        Runs even if the error is occured or not.
    The finally block can be used to complete the remaining task or reset the variables whose values might have been changed, before error occured
    in try block.

 */



// ===      EXAMPLE
console.group('First example');

try{
    let lastName = 'Shahzad';
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
catch(error){
    console.log(error);
}
finally{
    console.log('I will run even if the error occurs.')
}

console.groupEnd('First example');




// In The catch block it takes an parameter.
// The parameter could be err or error to catch the previous block.
// The error is an object with message and name key so lets use them.



console.group('Second example')

try{
    lastName = 'Shahzad';
    fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
catch(e){
    console.log('Error message ', e.message);
    console.log('Error Name ', e.name);
}

finally{
    console.log('Above info is important.');
}

console.groupEnd('Second example');



// ==========       THROUGHT : STATEMENT-
// Through tatement allows us to create our custom message or error
// see below examples.


console.group('Throw examples');

//  throw 'Error 2';  // throw an exception of string
//  throw 42;         // throw an exception of int type val.
//  throw true        // Throw an exception of bool type true 
//  throw new Error('Required');   //Generates an error of Object type with message of required.


// example two;

const throwExampleFunc = () => {
    let num = prompt('Enter a number: ');
    try{
        if(num = ''){
            throw 'Empty';
        }
        if(num = NaN){
            throw 'Not a number';
        }
        let x = + (num);
        if(x < 5){
            throw 'Too low';
        }
        if(x > 5){
            throw 'Too Big';
        }
    }
    catch(err){
        console.log(err);
    }
}

throwExampleFunc();

console.groupEnd('Throw examples');








console.group('4th example');
// Study the error types as you know it is too easy to be practiced.
console.groupEnd('4th example');