//=================>        REUSABLE VARIBALES       <=================

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

// ==> Stringify the students object with only firstName, lastName and skills properties


const txt = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4);

console.log(txt);

// txt is used as var name, bcz json is an string type text/data so thats why it is used.
