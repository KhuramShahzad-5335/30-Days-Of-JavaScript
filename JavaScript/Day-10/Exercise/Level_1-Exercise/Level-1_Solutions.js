//==================            1.                          
//create an empty set.

const emptySet = new Set();





//=================             2.
//Create a set containing 0 to 10 using loop.
const setUsingLoop = new Set();

// now lets populate the set using loop
let i = 1;
while(i <= 10){
    setUsingLoop.add(i);
    i++;
}

// lets see what we got.
console.log(setUsingLoop.size);
console.log(setUsingLoop);




//===================           3.
//Remove an element from a set.

// i will remove from  setUsing loop.

setUsingLoop.delete(1);

console.log(setUsingLoop, setUsingLoop.size);



//==================            4.
//  Clear a set

setUsingLoop.clear();

console.log(setUsingLoop, setUsingLoop.size);







//===================           5.
//  Create a set of 5 string elements from array.

// firstly lets have an array.
const Departments = [
    'Computer Sciences',
    'Electrical',
    'Mechanical',
    'Civil'
];

// now create a map on top of this array.
const DepartmentsMap = new Set(Departments);

console.log(DepartmentsMap.size, DepartmentsMap);






//==============        6.
//Create a map of countries and number of characters of a country.

// firstly we need an array containing above info.
const countries = [
    ['Pakistan', 8],
    ['India', 5]
];

//now create the map ob top this array,
const mapOfCountries = new Map(countries);

console.log(mapOfCountries.size, mapOfCountries);