//==============            CLASSES - INTRODUCTION              ================

/*
        JavaScript is an object oriented programming language.. Everything in 
    js is an object, with its properties and methods. We create classes 
    to create an object. An class is like an constructor for the object, 
    or a blueprint for creating an object. We instantiate an class to create 
    an object. The class defines attributes or behaviour of the object, while
    object represents the class.

        Once we create an class we can create an object of that class. 
    Creating an object from a class is called as  instantiation of class.

        In object section we learnt how to create object literal. Object 
    literal is singleton. If we want to get similar object, we have to write
    it. On the other hand, class allows us to create multiple objects, this 
    allow us to reduce code repetition and amount of code.

*/






//=============         1. DEFINING A CLASS         =================

//SYNTAX : 
class ClassName{
    // Code goes here.
}

// EXAMPLE : 
class DemoClass{
   // Code goes here.
}
// Here we have created a person class, but it does not have any thing inside.






//============          2. CLASS INSTANTIATION        ====================
// Creating an object of the class is called instantiation.

//  SYNTAX : 
const object = new ClassName;

// EXAMPLE : 
const demoObject = new DemoClass();
console.log(demoObject);
// Here we we have created an object of the class. But as the class does not have
// any properties, so, object is alse empty.








//===============           3.  CLASS CONSTRUCTOR           =================

/*
        The constructor is an built in function which allows us to create blue
    print for our object. In constructor we pass the properties of the object 
    as parameter. This keyword binds the properties to the class.
*/

//  EXAMPLE : 

// define the class
class Human {
    // create the constructor
    constructor(firstName, lastName){ // pass the properties as parameters
        // check the output from here
        console.log(this);
        // bind the properties to the class.
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//instantiate the class.
const person = new Human('Khuram', 'Shahzad');

// use the object.
console.log(person);

// as we have discussed above, we can make many objects of the class. so
const person2 = new Human('Hussnain', 'Zaffar');
const person3 = new Human('Talha', 'Siddiqui');

console.log(person2);
console.log(person3);






//==============        4. DEFAULT VALUES WITH CONSTRUCTOR          ============

//  Example of constructor returning defult values.
// We pass the value to properties of the constructor, while defining it.

class ConstructorExample{
    constructor(
        firstName = 'Khuram',
        lastName = 'Shahzad',
        age = 22,
        country = 'Pakistan',
        city = 'Multan'
    )
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    }
}

const defConsExp = new ConstructorExample();  // instantiated with defualt values.
const defConsExp2 = new ConstructorExample('Rao', 'Haseeb', 26, 'Dubai', 'Dubai City');

console.log(defConsExp);
console.log(defConsExp2);

