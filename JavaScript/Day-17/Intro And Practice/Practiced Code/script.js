//============          1.  SETTING ITEM TO THE LOCAL STORAGE   ========

/*
        When we set data to be stored in a local storage, it will be stored as 
    a string. If we are storing an array or object, then we should strigfy it
    first unless we will loose the array or objects original structure of 
    the original data 

        To store data in the local storage we use, localStorage.setitem method.
 */

// SYNTAX : -

console.group("Set Items Group!")
    localStorage.setItem('Key', 'Value');

// STORING DATA INTO THE LOCAL STORAGE : -

// since the value of the key is string so we don't need to stringify this.
localStorage.setItem('FullName', 'Rao Khuram Shahzad');
console.log(localStorage);


//  NOW LETS STORE NUMBER IN THE LOCAL STORAGE : -

const number = 22;
localStorage.setItem('Age', number);
console.log(localStorage);

// NOW LETS STORE AN ARRAY IN THE LOCAL STORAGE : -

const subjects = ['FYP', 'Data WareHousing', 'Wireless Security'];
localStorage.setItem('Subjects', subjects);
console.log(subjects);

// ***It is recommended to stringify the array or object you are trying to save
// in the local storage . lets see the difference using above examples :

const subjectsJson = JSON.stringify(subjects); // no need to pass optioanl params
localStorage.setItem("String Subjects", subjectsJson);
console.log(localStorage);    // See the difference in the browsers console.





//  THIS ONE IS ALSO AN ARRAY, CONTAINIG AN OBJECTS -
let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ];

// stringify this object : 
let skillsJson = JSON.stringify(skills, undefined, 4);
localStorage.setItem("Skills", skillsJson);
console.log(localStorage);



// === > SORTING AN OBJECT IN LOCAL STORAGE.
//  so againg before storing we need to stringified : -

const user = {
    'firstName' : 'Khuram',
    'age' : 22,
    'skills' : ['HTML', 'CSS', 'JavaScript', 'ReactJS']
}

const userJson = JSON.stringify(user, undefined, 4);

// now put the item in the local storage :- 
localStorage.setItem("UserInfo", userJson);
console.log(localStorage);



console.groupEnd("Set Items Group!");



// ==============> GETTING ITEMS FROM THE LOCAL STORAGE
// To get items from localstorage we use localStorage.getItem method.


console.group('Get Items Group!');
// SYNTAX : -
let item = localStorage.getItem('Key');
console.log(item);

// = > EXAMPLE : 1-
 let firstName = localStorage.getItem('FullName');
 let age = localStorage.getItem('Age');
 let userSubjects = localStorage.getItem('String Subjects');

 console.log(firstName)
 console.log(age)
 console.log(userSubjects)


// now we will try to convert the skillsjson file in the array using parse method.

let userSkillsJson = localStorage.getItem("Skills");
let userSkillsArray = JSON.parse(userSkillsJson, undefined, 8);
console.log(userSkillsArray);   // new we got the desired output.

console.groupEnd('Get Items Group!');



//========== > CLEARING THE LOCALSTORAGE : -    < ==============

//localStorage.clear();  // UNCOMMENT THIS TO SEE THE DISASTER :()






//=========================         THE END           ========================
