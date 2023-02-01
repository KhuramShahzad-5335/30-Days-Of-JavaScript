//======            SETTING TIME      =====

// IN JAVASCRIPT, we can set up timing, to limit execution of a certain function,
// In other words we can schedule time, after, which an query will be executed, which can be done in two ways...



//      1.=>    SETINTERVAL()
//In javascript we use setinterval, function to continuously execute a function after the scheduled time, which is generally in milli seconds.
// Syntax:
// setInterval(callBackfunc, time in milliseconds). where call back function is an function which you want to execute continuously in given time.

//EXP : 1
function callBack(){
    // do whatever you want
}
// setInterval(callBack,1000);


//EXP : 2.
// print hello world after 1 sec continuously
function sayHello(){
    console.log('Hello!');
}
// setInterval(sayHello,1000);




//===============           SetTimeOut()         ==================
// settimeout() is an higher order function, which takes, an call back function  and time in ms, the callback function waits for time, give and executes after that much time.

//EXP : 1
// if you want to say hello after 5 seconds then

function dontSayHelloTill(){
    console.log('hello after 5 sec');
}
setTimeout(dontSayHelloTill,5000);

// above function can also be written as

setTimeout(function(){
    console.log('hello')
},5000);