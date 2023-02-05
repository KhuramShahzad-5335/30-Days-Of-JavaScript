//=================         MAPS.......................

//=========     CREATING A MAP.
//EXAMPLE:
// it is also same as that of sets.

const map  = new Map();

console.log(map);




//=========     CREATING A MAP FROM AN ARRAY

//EXAMPLE:

const countries = [
    ['Pakistan', 'Islamabad'],
    ['Bangladesh', 'Dhaka'],
    ['India', 'Dehli'],
];

const mapOfCountries = new Map(countries);

console.log(mapOfCountries);
console.log(mapOfCountries.size);






//==============        ADDING VALUES TO THE MAP.........
//EXAPLE:

const language = new Map();

console.log(language);       //Empty.

// lets add some data
language.set('Pakistan', 'Urdu');
language.set('India', 'Hindi');
language.set('Bangladesh', 'Begali');
language.set('China', 'Chinese');

console.log(language);
console.log(language.size);




//============      GETTING A VALUE FROM THE MAP.
// .GET method is used to get a value from the map.

console.log(language.get('Pakistan'));

console.log(mapOfCountries.get('Pakistan'));





// ========== CHECKING KEY IN THE MAP............
// .HAS  method returns a boolean if a key is found in the map.

//EXAMPLE:
console.log(language.has('Japan'));
console.log(mapOfCountries.has('Pakistan'));





// ===========  GETTING ALL VALUES OF MAP..........
// as map is a object so we can use for of loop to iterate over it, to get alll the values

for(const country of mapOfCountries){
    console.log(country);
}

for (const lang of language) {
    console.log(lang);
}



// TO get both key value pe or both values we can use:
for (const [country, lang] of language) {
    console.log(country, lang)
}


for (const [country, capital] of mapOfCountries) {
    console.log(country, capital);
}






// THATS ALL FOR TODAY >>>>>>>>>>>>>>>