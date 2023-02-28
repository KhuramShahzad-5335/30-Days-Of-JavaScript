//===== >            FETCH APPLICATION PROGRAMMING INTERFACE            < =====//

/*
        FETCH API : -  Fetch api provides an interface for fetching resources from
    (including the resources from the web.). The new fetch api provides a more
    powerful and flexible feature set. In this challenge we will use fetch api
    to fetch resources and urls, and will learn about use cases of the promises
    using netwrok resources using the fetch api.
*/

const url = 'https://restcountries.com/v2/all' // This is countries url

// In this example we will fetch data from the url, the handle the errors asynchronously.

// STEP : 1 =>  fetch the data from url

fetch(url)
.then(
    response => {
        response.json(); //
    }
) // getting the data in json format
.then (
    data => {
        // logging the data
        console.log(data)
    }
) // getting the data.
.catch(
    err => {
        if(err){
            console.log(err);
        }
    }
); // handling the error


