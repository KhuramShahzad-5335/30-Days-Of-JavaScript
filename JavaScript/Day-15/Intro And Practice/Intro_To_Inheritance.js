//===============           INHERITANCE         ===================

// Through inheritance we can access all properties of parent class, this reduces repetition in code.

//  SYNTAX :
// class ChildClassName extends parent{
//     // code goes here.
//  }

// EXAMPLE : 

// PARENT CLASS
class Person{

    // constructor defination
    constructor(
        fName,
        lName,
        age,
        country,
        city,
    ){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.country = country;
        this.city = city;
    }

    // regular methods

    getFullName(){
        return this.fName + ' ' + this.lName;
    }
    // main info regular method
    getPersonInfo(){
        let fullName = this.getFullName();
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}.`
        return info;
    }
}

// CHILD CLASS STUDENT
class Student extends Person{
    saySomething(){
        return 'I am child Of Person Class.'
    }
}

const student1 = new Student('Khuram', 'Shahzad', 22, 'Pakistan', 'Multan');

//  here we can see that it can access all the properties.
console.log(student1)

console.log(student1.saySomething());
console.log(student1.getFullName());
console.log(student1.getPersonInfo());






//==============            2.  METHOD OVERRIDING           ================

/*
        We can use modify the parent classes method in child class and add new
    properties to the child class. To add new properties to the child class we
    need to create a constructor, by using super we can access the properties of
    the parent class.

        If the method with same name as that of the parent method is used then
    the method will override when called with the child class.

    SEE BELOW EXAMPLE FOR EXPLANATION.
*/

class NewStudent extends Person{
    constructor(fName, lName, age, city, country, gender){
        super(fName, lName, age, city, country);
        this.gender = gender;
    }
    saySomething(){
        return 'I am new student bro :)';
    }

    getPersonInfo(){
        let fullName = this.getFullName()
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}.`
        return info
    }
}

const newStudent1 = new NewStudent('Javeria','Abhi ni pta',21,'Multan','Pakistan','Female');

console.log(newStudent1);
console.log(newStudent1.saySomething());
console.log(newStudent1.getPersonInfo());

// now get person info method is overridden and identifies if the studen is male or female.







//===============           THE END            ====================