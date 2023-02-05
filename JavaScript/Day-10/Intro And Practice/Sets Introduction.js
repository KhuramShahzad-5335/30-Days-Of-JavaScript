//--------------------------     SETS INTRODUCTION       ---------------------
// Sets is a collection of elements. *** Sets can only contain unique elements.



//========  CREATING AN EMPTY SET.

const companies = new Set();

console.log(companies);






// =======  CREATING A SET FROM AN ARRAY.

const countries = [
    'Pakistan',
    'India',
    'China',
    'Iran',
];

const setOfCountries = new Set(countries);

console.log(setOfCountries);





//=========     ITERATING THROUGH AN SET.
// like any other object set sare iterateable able we can iterate through them as follows;

const languages = [
    'Urdu',
    'Punjabi',
    'Sindhi',
    'Balochi',
    'Pashtoon',
];

const setOfLanguages = new Set(languages);

// as sets are objects so we will use forOf loop to iterate through them.

for (const lang of setOfLanguages) {
    console.log(lang.toUpperCase());
}





//========= ADDING ELEMENTS TO THE SETS

const setOfSubjects = new Set();

// to check the size of the set we use .size method
console.log(setOfSubjects.size);

// now  let add few subject here

setOfSubjects.add('FYP');
setOfSubjects.add('Data WareHousing');
setOfSubjects.add('Networking');

// now lets check if the size of the is changed or not.
console.log(setOfSubjects.size);   //   *** NOTE THAT THE SIZE ALSO STARTS FROM 1 NOT 0,

for (const subject of setOfSubjects) {
    console.log(subject);
}

// We can also loop the set and add in last element i thing.

for (const subject of setOfSubjects) {
    setOfSubjects.add('Digital Image Processing');
}

console.log(setOfSubjects.size, '\n',setOfSubjects);






// ======== DELETING THE ELEMENT OF THE SET.

// We can delete the elmement of the set using .delete method.
setOfSubjects.delete('Digital Image Processing');

console.log(setOfSubjects);





//======== CHECKING AN ELEMENT IN THE SET.

// there is an method .has which checks if an element exists in the set if not.

console.log(setOfLanguages.has('Balochi'));
console.log(setOfSubjects.has('web Development'));




// ======= CLEARING THE SET.

// .CLEAR method clears all the elements of the set.

setOfSubjects.clear();

console.log(setOfSubjects);   // set is empty.







//================      HOW TO USE THE SETS.............

// see the example below to learn how to use sets.

const euroLangs = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

  // now create an set of euroLangs

  const setOfEuroLangs = new Set(euroLangs);

  // so we want to filter the array and create arra of objects which contain language and counts of how many times the appeared in the array.

  const countsAndCountries = [];
  const count = {};

  // to check all the elemtnts pf the set we need to loop through them.
  for (const lang of setOfEuroLangs) {
        
        // now filter out the repetetive elements and push them to counts
        const duplicateCountries = euroLangs.filter((language) => language === lang);
        
        // we can see that duplicate countries contain all the same languages, so we can take its length as counts. and push the lang + count as object in th ecountsof countries and length as count.
        countsAndCountries.push({Language : lang , count : duplicateCountries.length});
    }

    console.log(countsAndCountries);

    // hence we can use the sets to obtain different results and dealt with arrays to fetch some important stats.
    // or is to count the same items of the array.





//=====     We can also use sets to count unique items of the array as follows;

    // Sets by ddefault miss dupliate numbers of exist in the parent array.

    const numbers = [5, 3, 2, 5, 5, 9, 4, 5];

    const setOfUniqueNumbers = new Set(numbers);

    console.log(setOfUniqueNumbers);       

    // *** Sets has an property, as it is a collection of unique elements.





//========== UNION OF TWO SETS........

//.. union of two sets can be found by using spread operaor.(...arr);
//  (A U B).

//EXP:

const a = [1,2,3];
const b = [4,5,6];

const c = [...a, ...b];

// now create a set to get a set.
const A = new Set(a);
const B = new Set(b);
const C = new Set(c);

console.log(C, C.size);





//=========     INTERSECTION OF SETS..........
// Intersection of sets can be got using filter, lets see.

let x = [1,2,3,4,5];
let y = [3,4,5,6];

let X = new Set(x);
let Y = new Set(y);

// lets take intersection.
let z = x.filter((num) => Y.has(num));          // will return a array(z), where elements of Y set and a array are same.

let Z = new Set(z);

console.log(Z);






//============      DIFFERENCE OF SETS.

// Difference of sets can also be achieved by using filter as follows:

let i = [1,2,3,4,5];
let j = [4,5,6,7,8];

let I = new Set(i); 
let J = new Set(j); 

// Lets find the difference.
let k = i.filter((num) => !J.has(num));

let K = new Set(k);

console.log(K);



//                                      END OF SETS

