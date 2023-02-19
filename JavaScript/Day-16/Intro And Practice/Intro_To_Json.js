//==============            JSON INTRODUCTION             ===============

/*
        JSON  stands for javascript object notation. The JSON syntax is derived from,
    javascript object notation syntax, but json is text or string only. JSON
    is lightweight data format for storing and transporting data. JSON is mostly
    used when data is transported from server to client. JSON is easy to use
    alternative to xml.
*/

// Example ; 
{
    "Users" ; [
        {
            "firstName" : "Khuram",
            "lastName" : "SHahzad",
            "age" : 22,
            "email" : "khur@khu.com" 
        },
        {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
    ]
}

/*
        The difference b/w JSON and JavaScript object is that the key of the 
    JSON should be in double quotes and it should always be a string.

        JavaScript object and JSON are so similar that we can change the JSON
    to object and vice versa...

*/

// Hence JSON key can have array as value, Key should be in double quotes STRING.

// EXAMPLE : 2.

{
    "Khuram" ; {
        "email" ; "Khur@khu.com",
        "skills" ; [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age" ; 22,
        "isLoggedIn" ; false,
        "points" ; 30
    }
    "Asab"; {
        "email"; "asab@asab.com",
        "skills"; [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age"; 25,
        "isLoggedIn"; false,
        "points"; 50
    }
    "Brook"; {
        "email"; "daniel@daniel.com",
        "skills"; [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age"; 30,
        "isLoggedIn"; true,
        "points"; 50
    }
    "Daniel"; {
        "email"; "daniel@alex.com",
        "skills"; [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age"; 20,
        "isLoggedIn"; false,
        "points"; 40
    }
    "John"; {
        "email"; "john@john.com",
        "skills"; [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age"; 20,
        "isLoggedIn"; true,
        "points"; 50
    }
    "Thomas"; {
        "email"; "thomas@thomas.com",
        "skills"; [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age"; 20,
        "isLoggedIn"; false,
        "points"; 40
    }
    "Paul"; {
        "email"; "paul@paul.com",
        "skills"; [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age"; 20,
        "isLoggedIn"; false,
        "points"; 40
    }
}
