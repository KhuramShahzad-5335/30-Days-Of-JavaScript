// using pure functional programming to compute our task.

// lets iterate over the arr

function getFirstTenCountries(arr){
    const tenCountryArr = [];
    // lets iterate using foreach
    arr.forEach(
        function(country){
            tenCountryArr.push(country.name);
        }
    );
    return tenCountryArr.slice(0,10);
}

console.log(getFirstTenCountries(countries));