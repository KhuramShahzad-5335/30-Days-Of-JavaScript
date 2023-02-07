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

  let objToBeAdded = {
    "Skill" : 'BootStrap',
    'Level' : 10,
  }

  let {skillOne, skillOne1, ...rest} = frontEnd;

console.log(frontEnd)
