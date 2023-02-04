
// function mostOccuredIntialLetter(arr){
    
//     let initials = {};
//     let maxCountTemp = 0;
//     let letter = '';

//     // step-1: get the countries in an array using map
//     const countriesArr = arr.map((country) => {
//         return country.name;
//     }); 

//     //step: 2   map the initials of the arr.
//     const initialsArr = countriesArr.map((country) => {
//         // lets return the intials in upperCase,
//         return country[0].toUpperCase();
//     });

//     // step: 3 keep count of the intial letters, by using general logic.
//     // this loop will iterate over all the elements, and populate the initials object.
//     initialsArr.forEach(element => {
        
//         // now check if character exists in the obj, and keep track of counts, else reassign the inital and counter.

//         //so if initial does not exist populate with initial letter and keep counter
//         if(!initials[element]){
//             // add letter and count that
//             initials[element] = 0;
//         }
//         // this stmt will keep count of all the intials
//         initials[element]++   
//     });


//     // now we will compare all the values of the letters and returns the most occuring character
    
//     // 1. Loop the whole object to compare
//     for (const inital in initials) {
//         // now check if value of initial is greater then the max-count if not update the max count and intial value
//         if(initials[inital] > maxCountTemp){
//             // stroring the value,
//             maxCountTemp = initials[inital]
//             letter = inital;
//         }

//     }
//     return `The letter ${letter} appeared ${maxCountTemp} as the intial for the country names...`
// }

// console.log(mostOccuredIntialLetter(countries));















//===================================================================================


// Another approach for the same problem is as follows which took me two days.

function getMostOccuredLetter(arr){

    let maxCountTemp = 0;
    let letter = '';


    // we will use reduce to get the object for intials and counts.
    const getObjOfLetterAndCount = arr.reduce(
        function(acc, country){

            // now we will getKey as the intial, from country, and keep track of counter for this key
            const inital = country.name[0];
            // make this initial an key and make a counter if key is same else, start it with one by creating new key and property
            acc[inital] = (acc[inital] || 0) + 1    //understand this line properly.
        
            return acc;
        }
    , {}); // as we are dealing with the array of objects so the intial value is obj-type, maybe :(

    // now as we got the letter and counter we will iterate through obj and get things done

    for(const intial in getObjOfLetterAndCount) {

        // now check if counts are more than max count, if not then return max, count or else update ltter adn max count using th eobj
        if(getObjOfLetterAndCount[intial] > maxCountTemp){
            letter = intial;                                // assigning the key.
            maxCountTemp = getObjOfLetterAndCount[intial];  // assingnig the counts of intial
        }
    }

    return `The letter ${letter} appeared ${maxCountTemp} time as the intials for the country name...!`

}

console.log(getMostOccuredLetter(countries));





// wohoo, i did  this by myself.......... :)