//========================      1
//Develop a small script which generate any number of characters random id:
//  EG:   fe3jo1gl124g      or        xkqci4utda1lmbelpkm03rba

// firstly lets take a string of characters.
let char = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let maxIndex = char.length - 1;
// //now generate a random number, less than the length of the char string
let i = 0;
randID = '';
while(i <=  Math.floor(Math.random() * ((char.length - 1)))){
    randID = randID + char.charAt(Math.floor(Math.random() * maxIndex));
    i++;
}
console.log(randID);



//====================================================





//==================        2
//Write a script which generates a random hexadecimal number.
//'#ee33df'

let hexStr = '0123456789abcdef';
let max = 6;
i = 1;
let hexVal = '#';
while(i <= max){
    //generate random hexcharacter from hexstr.
    let hexChar = Math.floor(Math.random() * (hexStr.length - 1))
    hexVal = hexVal + hexStr.charAt(hexChar);
    i++;
}
console.log(hexVal);



//===============================================================


//=====================     3

//Write a script which generates a random rgb color number.
//rgb(240,180,80)

max = 256;
let r,g,b;
//generate random values for r,g,b between 0-255.


i = 0;
while(i < 2){
    r = Math.floor(Math.random() * max);
    g = Math.floor(Math.random() * max);
    b = Math.floor(Math.random() * max);
    i ++;
}
console.log(`rgb(${r},${g},${b})`);



//================      4.


countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
  ]

//  Using the above countries array, create the following new array.
const countriesToUpperCase = [];
for(const country of countries){
    countriesToUpperCase.push(country.toUpperCase())
}
console.log(countriesToUpperCase);


//===============================================================




//======================        5
//Using the above countries array, create an array for countries length'.
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5].

let lengthOfCountry = [];

for (const country of countries) {
    lengthOfCountry.push(country.length)
}
console.log(lengthOfCountry);



//==================================================




//=====================     6.
// /Use the countries array to create the following array of arrays:
/**
 *   [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
 */

let countryDetails = [];
let eachCountryDetails = [];

for (const country of countries) {
    let shortNamedCountries =  country.toUpperCase();
    //TODO: add countrie in capital letters
    eachCountryDetails.push([country,shortNamedCountries.slice(0,3),country.length]);
    countryDetails.push(eachCountryDetails);
}
console.log(countryDetails)




//=============================         7.
//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let selectedCountries = [];
for (const country of countries) {
    if(country.includes('land')){
        selectedCountries.push(country);
    }
}
if(selectedCountries.length == 0){
    console.log("Countries are without land")
}
else{
    console.log(selectedCountries);
}





//================================================================




//=======================       8.
//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

selectedCountries = [];
for (const country of countries) {
    if(country.endsWith('ia') || country.endsWith('ai')){
        selectedCountries.push(country);
    }
}
if(selectedCountries.length == 0){
    console.log("Countries are without land")
}
else{
    console.log("The countries end with \'ia\': ",selectedCountries);
}



//===============================================




//=================================     9.
//Using the above countries array, find the country containing the biggest number of characters.
let temp = 0;
let largestCountry = '';
for (const country of countries) {
    if(country.length > temp){
        temp = country.length;
        largestCountry = country;
    }
}

console.log("Country with most characters is ",largestCountry)




//===============================================================



//===============================       10.
//Using the above countries array, find the country containing only 5 characters.

let countriesWithSpecificCharLength = [];
for (const country of countries) {
    if(country.length == 5){
        countriesWithSpecificCharLength.push(country);
    }
}
if(countriesWithSpecificCharLength == 0){
    console.log("No countries with character length of 5");
}
else{
    console.log("The countries have five characters:",countriesWithSpecificCharLength)
}



//==================================================




//================      11
//Find the longest word in the webTechs array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  maxLength = 0;
  let longestWord = '';
  for (const tech of webTechs) {
    if(maxLength < tech.length){
        maxLength = tech.length;
        longestWord = tech;
    }
  }
  
  
  console.log("Longest word in WEBTECHS is: ",longestWord);




  //======================================



  //==============      12
  //Use the webTechs array to create the following array of arrays:
  //[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let techDetail = [];
let eachTechDetail = [];
let lengthOfEachTech = 0;
for (const tech of webTechs) {
    lengthOfEachTech = tech.length;
    eachTechDetail.push([tech,lengthOfEachTech]);
    techDetail.push(eachTechDetail);

}
console.log(eachTechDetail);





//=======================================================




//==========================        13
// /An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = '';
for (const stack of mernStack) {
    let firstLetter = stack[0];
    acronym += firstLetter;
}
console.log(acronym);




//==================================================




//========================       14
// /Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const fullStackTechs =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(let i = 0; i < fullStackTechs.length; i++){
    console.log(fullStackTechs[i])
}




//==========================================================




//===================       15.
//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruits =  ['banana', 'orange', 'mango', 'lemon'];
const reverseOrder = [];
for (const fruit of fruits) {
    reverseOrder.unshift(fruit);
}
console.log(reverseOrder);


//==============================================



//=======================       16.
// /Print all the elements of array as shown below.
// //  const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

const fullStack2 = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Node',
    'Express',
    'MongoDB'
    ]
let updatedFullStackWebTech = [];
temp = 0;
temp = Math.ceil(fullStack2.length/2)
console.log(temp)
for (const stack of fullStack2) {
    updatedFullStackWebTech.push(fullStack2.slice(0,temp))
    updatedFullStackWebTech.push(fullStack2.slice(temp,fullStack2.length))
    break;
}
console.log(updatedFullStackWebTech);