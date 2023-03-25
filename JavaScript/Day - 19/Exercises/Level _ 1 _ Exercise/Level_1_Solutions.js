// 1. Create a closure which has one inner function exercise 

// Solution

// in closure we have to access the variables of outer function within the inner function

function outerFunction () {
    let number = 5;
    function innerSqrFunc(){
        let sqr = number * number;
        return sqr;
    }
    return innerSqrFunc;
}

let sqr = outerFunction();

console.log(sqr());