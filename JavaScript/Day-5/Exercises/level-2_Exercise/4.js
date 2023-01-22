/*
    In countries array check if 'Ethiopia' exists in the array 
    if it exists print 'ETHIOPIA'. 
    If it does not exist add to the countries list.
*/

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  // we will use ternary condition with includes.

  countries.includes('Ethiopia')
    ?   console.log('ETHIOPIA')
    :   countries.push('Ethiopia');

console.log(countries);