//=====================     1.
// Display the countries array as a table

const countries = ['Pakistan','India', 'Australia', 'China'];
console.table(countries);




//=======================       2.
//  Display the countries object as a table

countries_obj = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ];

console.table(countries_obj);




// ===================   3.
// Use console.group() to group logs

// we will use the both countries types as the groups.

console.group('Countries Group');

console.table(countries);
console.table(countries_obj);

console.groupEnd('Countries Group');