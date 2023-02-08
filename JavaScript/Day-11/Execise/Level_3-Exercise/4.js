//==================        4.
//Copy the student object to newStudent without mutating the original object. In the new object add the following ?

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}




// STEP => 1 Copy the original student object with new student set

const newStudent = { ...student };     // now do what the tasks require.

// Step : 1 => Destructure the student object, and everything.

let {name, age, skills} = newStudent;


let {frontEnd, backEnd, dataBase, dataScience} = skills;


//=====>>> 1.Add Bootstrap with level 8 to the front end skill sets

let b_s_obj = {
  "Skill" : 'BootStrap',
  'Level' : 10,
}

frontEnd.push(b_s_obj);

console.log(frontEnd);




//===========>>> 2. Add Express with level 9 to the back end skill sets

let express_obj = {
  "Skill" : 'ExpressJS',
  'Level' : 8,
}

backEnd.push(express_obj);




//=========>>> 3.     Add SQL with level 8 to the data base skill sets

let SQL_obj = {
  "Skill" : 'SQL',
  'Level' : 8,
}

dataBase.push(SQL_obj);



//========>>> 4.  Add SQL without level to the data science skill sets.

dataScience.push('SQL');

console.log(skills);