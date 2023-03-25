// ==== >           ASYNC AWAIT         <==== // 

//  Async await is elemgent way to handle promsies.
// It is easy to understand and it is easy to write.

// EXAMPLE : -

const square = async function(n){
    return n * n;
}

console.log((square(4)));


/*
        The word async means the square function will return an promise. The 
    above function returns the promise instead of the value.

        So, to acess the value of the promise we will use the await keyword.
*/

// EXAMPLE UPDATED :

const squareUpdated = async function(n){
    return n * n;
}

const val = await squareUpdated(5);
console.log(val);



/*
        Hence, it is clear that the asyc function returns a promise and to access
    the promise we will use the await key word. So async and await both of em always
    go together, One cannot exist without the other.
*/

// LET US FETCH THE API USING BOTH PROMISES METHOD AND ASYNC AWAIT.


// EXAMPLE : 1 -       - PROMISE -

const url = 'https://restcountries.com/v2/all';

//fetch the data
fetch(url) // now the data is fetched
.then(response => response.json())
.then( (data) => {
    // now get the data or for instance using log log the result.
    console.log(data);
})
.catch( error => console.log(error)); // handle the error if it occurs.


// EXAMPLE : 2 : - USING THE ASYNC AWAIT.

const fetchData = async () => {
    try {
        const res = await fetch(url);
        const countries = await res.json();
        console.log(countries);
    } catch (error) {
        console.error(error);
    }
}
console.log('======= ASYNC AND AWAIT =========');
fetchData();