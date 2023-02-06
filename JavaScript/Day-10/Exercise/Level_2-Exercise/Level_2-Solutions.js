// REUSABLE ARRAYS.

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway'];

let c= [];

//===================           1.
//  Find a union b.

// The union of two sets can be found by using spread operator.

c = [...a, ...b];

// create the set of above array.

const union = new Set(c);

console.log(union.size,union);







//===============           2.
//Find a intersection b.

// Intersection of two sets can be found by using filter as follows,

let B = new Set(b);

const intersection  = a.filter(el => B.has(el));      // now this will compare all the elements and will return the same elements.

// now create the set for c.

intersectionSet = new Set(intersection);

console.log(intersectionSet.size, intersectionSet);








//=================         3.
//  Find a with b.

//  A-B can also be found by using filter.

const difference = a.filter(el => !B.has(el));      // this will compare all the elements and unique elements,

const differenceMap = new Set(difference);
console.log(differenceMap.size, differenceMap);







