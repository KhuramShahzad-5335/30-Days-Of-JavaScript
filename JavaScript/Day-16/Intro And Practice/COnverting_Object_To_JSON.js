// ==========       CONVERTING JS OBJECT TO THE JSON        ==============

/*
        When we want to convert object tp json we use JSON.stringify(). The
    stringify takes one required and 2 optional paramters, on 1 is object, 
    replacer and space are other two optional parametes. Replacer is used for
    filteration and space is used for indentation. If we donot want to filter
    out any values from the object we can just pass the undefined parameter, and
    are ready go.
*/

/**
 *      JSON.stringify(obj, replacer, space)
 *      // json or text, the data.
 *      // reviver is an optional callback function.
*/     

// EXAMPLE : - CONVERT THE OBJ TO JSON WITH 4-SPACE INDENTATION : -

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
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
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
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
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
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


const strJsonTxt = JSON.stringify(users, undefined, 4);

console.log(strJsonTxt);



// EXAMPLE : 2 - NOW LETS STRIGIFY USING REPLACER AS AN FILTER : 

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }

const jsonTxt = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 10)
console.log(jsonTxt);

// so to filter out just pass the key you want to filter is=n array as string





//================              THE END               =====================
