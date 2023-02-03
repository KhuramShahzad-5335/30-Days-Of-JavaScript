// level 2: Q: 3

const requestedCountriesArray = countries.filter(function categoriesCountries(country, countryIndex, arr){
    if(
        (country.name.endsWith('land'))
        || (country.name.endsWith('ia'))
        || (country.name.endsWith('island'))
        || (country.name.endsWith('stan'))
    ){
        return country.name;
    }
});

console.log(requestedCountriesArray);