// How many languages are there in countries object.

// Step: 1 => Extract all the languages in language array.

const languages = countries.map(
    function(country){
        return country.languages;
    }
);

// Step: 2 =>  Now flat the array to make it simple.
const allLanguages = languages.flat();


// now create an set of all languages which will automaticall filter out same languages.

//
const setOfAllLanguages = new Set(allLanguages);

// Step: 4 => As set contains unique collection of items, so total languages of the world are in it which is the answer.

console.log(`There are ${setOfAllLanguages.size} unique languages in the countries object file.`)