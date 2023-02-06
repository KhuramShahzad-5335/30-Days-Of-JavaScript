//============      DESTRUCTURING       ============
//Destructurning is a way to unpack or extract info from the arrays or objects, and assigning them to the distict/ unique variables



//=>                        1. =>    DESTRUCTURING ARRAYS:

//EXP: 1
const num = [1,2,3];

// Here we extracted all the elements and the new terms are variables in which these elements are storesd, now we can access them each at a time using these values:
let [numOne, numTwo, numThree] = num;

console.log(numOne, numTwo, numThree);


// EXP: 2
const names = ['Khuram', 'Hussnain', 'Talha'];

let [personOne, personTwo, personThree] = names;

console.log(personOne, personTwo, personThree);



// EXP: 3-

const scientificonstants = [2.72, 3.1415, 9.81, 37, 100];

let [e, pi, gravity, bodyTemp, boilingPont] = scientificonstants;

console.log('Boiling point of water is', 100 ,'Degree Celcius.');



//EXP: 4.

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
];

let [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

// we can furthur destructure this.
let [structure, style, interactivity, library] = frontEnd;

console.log(style);





//=> OMITTING A VALUE:
//If we want to omit a value we use additional comma which helps us omit the value.

const laptop = ['Dell', 'Lenove', 'HP'];

let [, myLaptop, ,] = laptop
console.log(myLaptop);




//=> USING DEFAULT VALUE:
// We can add default value if some value of the array is undefined

//EXP: 1-
const techLearnt = ['html','css','js', undefined];

let [
    techOne,
    techTwo,
    techThree,
    techFour = 'react',
] = techLearnt;

console.log(techFour, techOne);




//=> LIMITING DESTRUCTURING:

// some times we can not destructure all the elements, so we destructure few of them, and use spread operator to get rest of the elements in the array.

// EXP: 1:

const numbers = [1,2,3,4,5,6,7,8,9];

let [one, two, ...rest] = numbers;

console.log(one, two);
console.log(rest);




//=> DESTRUCTURING DURING ITERATING (WHILE LOOPING THROUG ARRAY).

// We can destructure if array constains array of apiry kind of elementbs, eg.

//EXP: 1-
const languagesInCountry = [
    ['Pakistan', 'Urdu'],
    ['India', 'Hindi'],
    ['England', 'EN_UK'],
    ['USA', 'EN_US']
]

for(const [country, lang] of  languagesInCountry){
    console.log(country, lang);
}






//=============================================================





//=>    2. DESTRUCTURONG OBJECTS        
// While destructuring objects the name of destructuring var and the name of the key should exactly be same, then it returns value for that key property.

//EXP:  1-

const rect = {
    width : 10,
    height : 20,
    area : 200,
}

let { width, height, area } = rect;

console.log(width, height, area);



//=> DESTRUCTURING, RENAMING AND ASSIGNING NEW KEY PROPERTY AND GIVING DEFAULT VALUE.

//EXP: 1-
const rectangle = {
    width : 20,
    height : 30,
    area : 600,
}

// renaming:
let {width : w, height : h, area : a} = rectangle;
console.log(w, h, a);

//Addign new key. and default value
// by default this key will have undefined value., we can also add nw key with the default value here.

let{width: w2, height : h2, area : a2 , perimeter : p, defalutVal : d = 'default value'} = rectangle;

console.log(p);

console.log(d);




//=> OBJECT PARAMETER WITHOUT DESTRUCTURING-

// Destructuring keys as functions parameters:

//EXP:  1.