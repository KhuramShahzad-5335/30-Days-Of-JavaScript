// // i was unable to code this so this one is copied.

// // const names= countries.reduce(
// //     (v1,v2) => {
// //     const startLetter = v2.name[0];
// //     v1[startLetter] = (v1[startLetter] || 0) + 1;
// //     return v1;  
// //     }
// //     ,{})
    
// // console.log(names)


// // this is the one i wrote while trying to understand the above.
// function mostUsedLetter(arr) {
//     const names = arr.reduce(
//         //we will reduce to produce array 
//         (obj, country) => {
            
//             // get the start letter.
//             const startLetter = country.name[0];
        
//             // now make this start letter a key, and assign its value as counter.
//             obj[startLetter] = (obj[startLetter] || 0) + 1;  // here key is obj[startLetter] and counter checks letter if letter is same the counter increase otherwise turns to one
            
//             // now return the obj, as it will check em all.

//             return obj;
//         }
//     ,{}); // now chech which character has biggest counter.
    
// //    console.log(names.entries())
// }// optimal inittial value is object, as the array contains objects of info.

// console.log(mostUsedLetter(countries));

