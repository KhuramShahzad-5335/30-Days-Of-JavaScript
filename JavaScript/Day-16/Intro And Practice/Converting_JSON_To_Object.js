//=========         CONVERTING JSON TO J.S. OBJECT             ==============

/*
        Mostly we fetch JSON data from HTTP response or from a file, but we 
    store JSON as a string and can convert it to the javascript object.

        To convert JSON to object we use JSON.parse() method.
*/

//  JSON.PARSE() :-

// SYNTAX : -

// JSON.parse(JSON[, reviver])
// here json or rext, is data
// reviver is optioonal callback function 

//EXAMPLE : -
/*
  JSON.parse(json, (a, b) => {
    // code goes here.
  })
*/

//EXAMPLE : 2 -

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
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
    }`

const usersObj = JSON.parse(usersText);
console.log(usersObj);




// EXAMPLE : 3 - USING JSON.PARSE WITH THE REVIVER FUNCTION.

/*
        to use reviver as a formatter, we put the keys we want to format firstname
    and lastname value. let us say, we are interested to format the firstnaem
    and last name of the json data .
*/

// we already have an json text to work with.

const usersObjFormatted = JSON.parse(usersText, (key, value) => {
    // now format the data wrt first name and last name.
    let newValue = 
    typeof value == 'string' && key != 'email' 
        ?   value.toUpperCase
        :   value;
    return newValue;
});

console.log(usersObj);


/*
        JSON.parse() is quite handy to use. You do not have to pass the optional
    parameters, you can just use it the with the default parameters and you
    will achieve quite alot.
*/


