// IN THIS FILE WE WILL DISCUSS CONSOLE OBJECT METHODS.

// 1. CONSOLE LOG METHODS:

//  we use this method to show our output on the browsers console and on the terminal.

// console log methods is used for the dubugging and testing purpose, in this case ok.

console.log('30 days of the JavaScript');


// we can alse c like substitution of logging eg:

console.log('%d %s of javascript.', 30, 'days');


// we can also style the values using css and %c substitution.

console.log(
    '%c30 days of javascript', 
    'color: green'
)

console.log(
    '%c30 days%c %cof%c %cJavaScript',
    'color: red',
    '',
    'color: green',
    '',
    'color: blue',
)


//===========================================



// 2.   CONSOLE.WARN() METHOD.

// We use .warn method to give warning on browser. For instance warning for bad practices or deprecation of version of a package being used.

console.warn('This is an warning');

console.warn(
    'If you are using react don\'t touch the DOM. react.dom will take care of DOM. Ok?'
);

console.warn('warn is different from error.');


//==========================================================================





//  3. CONSOLE.ERROR() METHOD:

// .error method is used to show errors on console.

console.error('This is an error');

console.error(
    'Don\'t worry bro, we all make mistakes :)'
);




//======================================================================





//  4.   CONSOLE.TABLE() METHOD:

//  .table method  is used to show output in tabular form.
// the input must be array or object form data, to take advantage most effectively

let names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)


let user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user);



  let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)




  let users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users);






  //========================================================================








//  5.  CONSOLE.TIME() METHOD:

// .time method starts a timer. this method can be used to calculate how long does an operation take.
// we can give each times a unique name and strt many times,
// when we call console.timeEnd(), with same name, the browser will return the time in millisecons that has been elapsed.


// example to measure the time of an loop.

console.time('for loop');
let limit = 1000000;
let i = 0;
while(i < limit){
    i++;
}
console.timeEnd('for loop');





//==========================================================================




// 7. CONSOLE.INFO() METHOD : 

// This method is used to display informational messages on the console

console.info('Hey the lanch codes are 001');






//====================================================================





//  8. CONSOLE.ASSERT() METHOD:

// .assert method takes two parameters, exprression and message.
// if the expression is true it displays nothing but if the expression is false it displays an error messsge which we have defined.

// EXAMPLE : 1

console.assert(4 > 3, '4 is greater than 3');
console.assert(3 > 4, '3 is not greater than 4');


// EXAMPLE : 2-

for(let i = 0; i <= 10; i++){
    let errorMsg = `${i} is not even number`;
    console.log(`The  number is `, + i);
    console.assert(i % 2 === 0, errorMsg);
}


//=========================================================================




// 9.   CONSOLE.GROUP():

// .GROUP() is used to group many different console methods.

names = ['Asabeneh', 'Brook', 'David', 'John']
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

// lets see the groups.
console.group('names')
console.table(names)
console.groupEnd('names')

console.group('Countries');
console.table(countries)
console.groupEnd('Countries')


console.group('Users');
console.log(user);
console.table(users);
console.groupEnd('Users');




//=====================================================




//  10.     CONSOLE.COUNT() METHOD:
// .count method return number of times this method is called.
// this method is useful to check how many times a function is called.

function countMe(){
    console.count('Fucntion has been called');
}

countMe();
countMe();






//======================================================================






//  11.     CONSOLE.CLEAR() METHOD:
// This method clears the console of browser.

// eg .          console.clear();
