//Reusable variables

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }



//=============     1.
//Find the person who has many skills in the users object.

const copyForSkills = Object.assign(users);
function mostSkilledUser(){
    let max = 0;
    let maxSkills = {};
    
    //loop through all the skills 
    for (const key in copyForSkills) {
        // add these keys in user, so that we can loop down to each of them.
        const user = copyForSkills[key];
        // now user contains all the skills so, check whose skills length is greates.
        if(user.skills.length > max){
                max = user.skills.length;
                maxSkills = user;
            }
        }
        return maxSkills;
    }
console.log(mostSkilledUser());






//============         2.
//Count logged in users, count users having greater than equal to 50 points from the following object.
const copyForlogsAndPoints = Object.assign(users);
function loggedInUsers(){
    let countLogedIn = 0;
    let countPoints = 0;

    //loop through all the users
    for (const key in copyForlogsAndPoints) {
       user = copyForlogsAndPoints[key];
       if(user.isLoggedIn){
        countLogedIn = countLogedIn + 1
       }
       if(user.points > 49){
        countPoints = countPoints + 1;
        continue;
       }
    }
    return `${countLogedIn} users are loged In, and ${countPoints} users have more than 49 points!`;
}
console.log(loggedInUsers());






//==============        3   
//Find people who are MERN stack developer from the users object

const mernUserObj = Object.assign(users);

function mernDeveloper(){

    // declare function scope varibles here.
    const mernUsers = {};
    for (const key in mernUserObj) {
        user = mernUserObj[key];
        if(user.skills.includes('MongoDB')
            && user.skills.includes('Express')
            && user.skills.includes('React')
            && user.skills.includes('Node')
            && user.skills.includes('Node')
            ){
                mernUser = user;
        }
    }

    return mernUser;
}
console.log(mernDeveloper());




//==============       .4
//Set your name in the users object without modifying the original users object

const myUsers = Object.assign(users);

myUsers.Khuram = {};

console.log(myUsers);




//==========        5
//Get all keys or properties of users object.

const getMyKeys = Object.assign(users);

for (const key in getMyKeys) {
    const keys = {};
    console.log(Object.keys(getMyKeys))
    user = getMyKeys[key];
    console.log(Object.keys(user))
}

function usersObjKeys(){
    for (const key in getMyKeys) {
        userKeys1 = Object.keys(getMyKeys)
        user = getMyKeys[key];
        userKeys2 = Object.keys(user)
        return userKeys = (userKeys1 + ',' + userKeys2).split(',')
    }
}

console.log(usersObjKeys());






//==================        6.
//Get all the values of users object.

const getMyValues = Object.assign(users);

function getUserValues(){
    let val = [];
    let obj2 = [];
    let obj1;
    obj1 = Object.values(getMyKeys);
    console.log(obj1)
    for(const key in getMyValues){
        val = getMyKeys[key];
        obj2.push(Object.values(val));
        continue;
    }
    return  obj1,obj2;
}
console.table(getUserValues());




//=============         7.
//Use the countries object to print a country name, capital, populations and languages.

