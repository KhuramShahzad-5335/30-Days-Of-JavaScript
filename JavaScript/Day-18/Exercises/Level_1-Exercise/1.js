// STEP => 1

// read the countries url

url = 'https://restcountries.com/v2/all';

const fetchData = async () => {
    try {
        const response = await fetch(url);    // fetch the url
        const countries = await response.json(); // get the result as json.
        countries.map(country => {
            return country;
        })
    } catch (error) {
        console.error(error);
    }
}

fetchData();