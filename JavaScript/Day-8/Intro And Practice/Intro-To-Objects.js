//Global Scope
//   1.Window Global Object--------------  2.global scope

// 2. Global scope.
//a globally declared varaiable acan be accessesed anywhere in the file.

//example: 

let a = 'JavaScript';
let b = 30;

function globallScope(){
    console.log(a,b); // gloabal var values are accessible in the funvtions scope.
    if (true) {
        let a = 'React';
        let b = 30;

        console.log(a,b); 
    }
    console.log(a,b)// out of the scope of the if only globals are accessible.
}

globallScope();










//===           2. Local Scope
//  1. Block scope.

// these values are global and can be accessed anywhere.
// every var in {} braces is block scoped var, or sometimes in functio's block.


//example:
a = 'JavaScript';
b= 30;

function blockScope(){
    
    // accessing global values in functions scope.
    console.log(a,b) // accessible.

    //function scope variables, can be accessed anywhere in the function.
    let value = false;  
    if(true){
        // values declared in if's scope cannot be outside.
        //declaring some block scope vars
        let a = 'react';
        let  b = 30;
        let c = 'DJango';
        value = !value; //can access function scoped var in the functio,block scopes
        console.log(a,b,c,value);
    }
    //console.log(a,b,c,value) // we cannot access c here bcz we are outside the block scope and cannot access the block scope var out of its block.
    console.log(a,b,value) 
}

blockScope();
//console.log(a,b,value) also bcz value is function scoped socannot be accessed
console.log(a,b) //global : accessiblity = true :)



//Now, you have an understanding of scope. A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).

// NOTE, new developers don't use var :), and let + const are block scoped variables, so using thes will now affect the code outside of their scope.

//Example:
function letConstBlocks(){
    if(true){
        let age = 50;
        const pi = 3.14;
        console.log(age,pi);
    }
    //console.log(age,pi); //cannot access
}

letConstBlocks();

/**
 * Let and const are almost same, the only difference is let is used when the values can be re assigned, while const is used when the values cannot be assigned, and const is used for arrays,objects,expressions and arrow function, and these help write the cleancode 
 */










//====================================================================



//                      TOPIC----OBJECTS==========================


/**
 * Everything is object, and objects have properties,in key value pair. irder of key is not reserved
 */


//      1.   Creating an empty object. which can be done by {} braces
//example:

const emptyObj = {};



//      2. Object With Values:
//Example   1:

// there is an object which has properties of length and width which are presented in key value pair.

const rectAngle = {
    length : 10,
    width : 20
}
console.log(rectAngle);


// there is a person who has some properties with values of any type eg.

const person = {
    fName : 'Khuram',
    lName : 'Shahzad',
    age : 21,
    isMarried : false,
    country : 'Islamic Republic of Pakistan',
    skills : [
        'Html',
        'Css',
        'JavaScript',
        'Sacc',
        'BootStrap',
    ],
}
console.log(person);






//              Accessing Object====================
const person2 = {
    fName : 'Khuram',
    lName : 'Shahzad',
    age : 21,
    isMarried : false,
    country : 'Islamic Republic of Pakistan',
    skills : [
        'Html',
        'Css',
        'JavaScript',
        'Sacc',
        'BootStrap',
    ],
    getFullName : function(){
        return `${this.fName} ${this.lName}`
    },
    contact_No : '+923471713760', 
}

// accessing though (. key ) method.
console.log(person2.getFullName(),person2.isMarried);


//accessing thorough square bracket method.
console.log(person2['fName'],person2['isMarried']);


// to access single value try to use bracket version
console.log(person2['contact_No']);



/**
 * The person is an object. getfullName is an key of the property f the object(person). the getfullname is an anonymous fuction which can be called the method of object, as person is an object, we can use this method in the getfullname fuction to access all the properties of object (person). we cannot use arro founction over here as an object method, bcz the word this , refers to objects inside the arrow function instead objeet(person) itself.
 */

//examples:
console.log(person2.getFullName()) // object methods should be accessed using ( .key ) method.

// so, the this keyword, is refering to fName, lName which are the properties of the person / object.






//=========================================================







//====          Setthing new values to the object.

const person3 = {
    fName : 'Khuram',
    lName : 'Shahzad',
    age : 21,
    isMarried : false,
    country : 'Islamic Republic of Pakistan',
    skills : [
        'Html',
        'Css',
        'JavaScript',
        'Sacc',
        'BootStrap',
    ],
    getFullName : function(){
        return `${this.fName} ${this.lName}`
    },
    contact_No : '+923471713760', 
}

// as objects are non primitive and can be mutated so, this mutation is carried out by following methods

//Example:

person3.age = 22;
console.log(person3.age);

person3.city = 'Multan'
console.log(person3.city);

person3.skills.push('React');
console.log(person3.skills);

person3.getPersonInfo = function(){
 
    let skillsWithoutTheLastSkill = this.skills.slice(0,this.skills.length - 1).join(',');
    
    let lastSkill = this.skills.slice(this.skills.length-1);


    let skills = `${skillsWithoutTheLastSkill} and ${lastSkill}`;
    
    let fullName = this.getFullName();

    let statement = `Hello, my name is ${fullName} from ${this.country}. I am a Software developer with skills ${skillsWithoutTheLastSkill} and ${lastSkill}`;
    
    return statement;
}

console.log(person3.getPersonInfo());

// after mutation the resulting person3 object is as follows
console.log(person3);






//===================================================================




//================          OBJECT_MEthods          =============

const person4 = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }


//========          Object- Methods==============
//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty


//=====================EX: 1 object.Assign, to copy the object without mutating the original object.

const copyPerson4 = Object.assign(person4);
console.log(copyPerson4);


//=================EX: 2 .Object.keys : it is used to get the key of the object.

const keys = Object.keys(copyPerson4);
console.log(keys)

const address = Object.keys(copyPerson4.address);
console.log(address)

//=================EX: 3 .Object.Valuse() : it is used to get the values of the object.
const values = Object.values(copyPerson4);
console.log(values);



////=================EX: 4 .Object.entried() : it is used to get the key and values of the object.
const entries = Object.entries(copyPerson4);
console.log(entries);



//=================EX: 3 .hasOwnProperty() : it is used to check if a sepcific key or value of the object.

console.log(copyPerson4.hasOwnProperty('name'))
console.log(copyPerson4.hasOwnProperty('address'))
console.log(copyPerson4.hasOwnProperty('score'));





//============          THE END         =====================

