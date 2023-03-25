//=====================             INTRODUCTION TO CLOSURES          ==========================//
/*
    Javascrpt allows us to write function inside an outer function. When we access the variables of the outer
function, than it is called closure.

*/

// EXAMPLE - 1

const outerFunction = () => {
    let counter = 0;
    function innerFunction ( ) {
        counter ++
        return counter;
    }
    return innerFunction;
}

const innerFun = outerFunction();

console.log(innerFun());
console.log(innerFun());
console.log(innerFun());




// EXAMPLE 2

const bahirWalaFunction = () => {
    let kumzyada = 0;

    const zyadaKarFunc = () => {
        kumzyada ++;
        return kumzyada;
    }

    const kumKarFunc = () => {
        kumzyada --;
        return kumzyada;
    }

    return {
        incr : zyadaKarFunc(),
        decr : kumKarFunc()
    }
}

let plusOne = bahirWalaFunction();
let minusOne = bahirWalaFunction();

console.log(plusOne.incr);
console.log(minusOne.decr);