//=============             CLASS METHODS              ==================
/*      In classes we can create class methods. Class methods are js function 
    Inside the classes.
*/


// EXAMPLE 1. :
//  Method to get fullname .

class Example1{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        const full_name = this.firstName + ' ' + this.lastName;
        return full_name;
    }

}

const example1Obj = new Example1('Khuram', 'Shahzad');

console.log(example1Obj.getFullName());








//=============         2. PROPERTIES WITH INTIAL VALUES             ==============

/*
         When we create a class we might have set the intial values. eg, if 
    you are playing a game, we might have set the intial score to zero.
    See blow example, To understand a bit better.
 */

// EXAMPLE :

class InitialValueExp{
    constructor(fullName, skills, scores){
        this.fullName = fullName;
        this.scores = 0;
        this.skills = [];
    }
}

const initialValueExpObj = new InitialValueExp('Khuram Shahzad');

console.log(initialValueExpObj.scores);
console.log(initialValueExpObj.skills);



//   A METHOD COULD BE A REGULAR METHOD OR A GETTER AND SETTER





//==============        3.  GETTER          =====================

/*

 */

// EXAMPLE : 
class GetExp{
    constructor(fullName, skills, scores){
        this.fullName = fullName;
        this.scores = 0;
        this.skills = [];
    }
    getFullName(){
        return this.fullName;
    }
    getScores(){
        return this.scores;
    }
    get getSkills(){     // this is an getter
        return this.skills;
    }
}

const getExpObj = new GetExp('Khuram Shahzad');

console.log(getExpObj.getSkills);       // no need of paranthesis for getter.
console.log(getExpObj.getFullName());   // Here we need it.







//===============           4.      SETTER              ===============

/*
        Setter allow us to modify the value of the certain properties. We write
    setter method using set method.
*/

// EXAMPLE :

class SetterExp{
    constructor(fullName, skills, scores){
        this.fullName = fullName;
        this.scores = 0;
        this.skills = [];
    }
    getFullName(){
        return this.fullName;
    }
    getScores(){
        return this.scores;
    }
    get getSkills(){
        return this.skills;
    }
    set setSkills(skill){
        return this.skills.push(skill);
    }
}

const setObj = new SetterExp('Khuram Shahzad');

setObj.setSkills = 'HTML';
setObj.setSkills = 'CSS';

console.log(setObj.getSkills);

// set and getting should be added equally.





// EXAMPLE CONTAINGING GETTER, SETTER, AND REGULAR METHODS.

class AllKindOfMethod{

    // constructor defination
    constructor(
        fName,
        lName,
        age,
        country,
        city,
        projects = 0,
        skills = []
    ){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.projects = projects;
        this.skills = skills;
    }

    // regular methods

    getFullName(){
        return this.fName + ' ' + this.lName;
    }
    
    // getters
    get getProjects(){
        return this.projects;
    }
    get getSkills(){
        return this.skills;
    }

    //setters
    set setProjects(numOfProjectsDone){
        return this.projects += numOfProjectsDone;
    }
    set setSkills(skillName){
        return this.skills.push(skillName);
    }

    // main info regular method
    getPersonInfo(){
        let fullName = this.getFullName();

        let tSkills = this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') + 
        ` and ${this.skills[this.skills.length - 1]}`;
        
        let formattedSkills = tSkills 
            ? `He knows ${tSkills}`
            : 'Nothing';
        
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}.`;
        return info;
    }
}

// create objects
const employee1 = new AllKindOfMethod('Khuram', 'Shahzad', 23, 'Pakistan', 'Multan');
const employee2 = new AllKindOfMethod('Nadir', 'Ali', 23, 'Pakistan', 'Multan');

// Set Some values.
employee1.setProjects = 5;
employee1.setProjects = 2;
employee1.setSkills = 'HTML';
employee1.setSkills = 'CSS';
employee1.setSkills = 'JavaScript';

employee2.setProjects = 500;
employee2.setSkills = 'CSS';
employee2.setSkills = 'DJango';


// Get the values
console.log(employee1.getProjects);
console.log(employee1.getSkills);

console.log(employee2.getProjects);
console.log(employee2.getSkills);

// get the regular methods
console.log(employee1.getPersonInfo());
console.log(employee2.getPersonInfo());





//================              5. STATIC METHODS           ===================

/*
        Static keyword is used to create the static methods of the class. The
    static methods are not created on the instances of the class instead they are 
    called with class names instead.

        Static method are used to be used as utility methods
    
        see following example:
*/

// EXMAPLE:- 
    class StaticMethods{
        // no need for the constructor.

        //static method.
        static getFavSkill(){
            let skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Express', 'Mongo'];
            let index = Math.floor(Math.random() * skills.length);
            return skills[index];
        }

        static showDateTime(){
            let now = new Date()
            let year = now.getFullYear()
            let month = now.getMonth() + 1
            let date = now.getDate()
            let hours = now.getHours()
            let minutes = now.getMinutes()
            if (hours < 10) {
              hours = '0' + hours
            }
            if (minutes < 10) {
              minutes = '0' + minutes
            }
        
            let dateMonthYear = date + '.' + month + '.' + year
            let time = hours + ':' + minutes
            let fullTime = dateMonthYear + ' ' + time
            return fullTime
          }
}
console.log(StaticMethods.getFavSkill());
console.log(StaticMethods.showDateTime())


// so static methods are methods which can be used as utility methods.
