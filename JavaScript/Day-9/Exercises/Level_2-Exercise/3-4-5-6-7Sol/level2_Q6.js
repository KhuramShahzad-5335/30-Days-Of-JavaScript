
const getLastTenCountries = (arr) => {
    // using map to get last ten countries
    const arrayOfAllCOntries =     arr.map((country) => {
        return country.name
    });
    return arrayOfAllCOntries.slice(arrayOfAllCOntries.length - 10, arrayOfAllCOntries.length);
}

console.log(getLastTenCountries(countries));

