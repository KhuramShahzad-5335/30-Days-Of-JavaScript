//=======================       MUTATION        =================
//1. we can use array .freeze, which will prevent our array from mutation.
const freezeArr = [1,2,3]
Object.freeze(freezeArr);
console.log(freezeArr.length);
freezeArr[0] = 'Pakistan';
console.log(freezeArr.length);
// so by using this method we are able to prevent mutation
       












//===variables that will be reused
const newCountry = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

  Object.freeze(newCountry);
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']






//===============       1
//Copy countries array(Avoid mutation)

// freeze countrie array.
Object.freeze(countries);
const copiedCountrie = [];
//copy the countrie array using loop
for (const country of countries) {
    copiedCountrie.push(country);
}
console.log(copiedCountrie,copiedCountrie.length);
console.log(countries,countries.length)



//====================      2
//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

const sortedCountries = [];
for (const country of countries) {
    sortedCountries.push(country);
}
console.log(sortedCountries.sort());




//===================       3
//Sort the webTechs array and mernStack array

//firstly lets freeze the mutation of both array.
Object.freeze(webTechs,mernStack);

const sortedWebTechs = [];
const sortedMERNStack = [];

for (const tech of webTechs) {
    sortedWebTechs.push(tech);
}

for (const stack of mernStack) {
    sortedMERNStack.push(stack);
}

console.log(sortedMERNStack.sort());
console.log(sortedWebTechs.sort());





//========================      4,6.
//Extract all the countries contain the word 'land' from the countries array and print it as array.
const landCountries = [];
//to check all the countries we have to put the checker in the loop.
for (const country of countries) {
    if(country.includes('land')){
        landCountries.push(country);
    }
}
console.log(landCountries.sort());




//=======================       5.
//Find the country containing the hightest number of characters in the countries array
let longestCountryName = '';
let length = 0;
//we have to check all the characters so lets start the funky loop.
for (const country of countries) {
    if(length < country.length){
        length = country.length - 1;
        longestCountryName = country;
    }
}
console.log(longestCountryName);




//========================      7.
//Extract all the countries containing only four characters from the newCountries array and print it as array
const smallestNameCountry = [];
for (const country of newCountry) {
    if(country.length == 4){
        smallestNameCountry.push(country);
    }
}
console.log('Country whos names are 4 characters long are: ',smallestNameCountry.sort());





//======================        8.
//Extract all the countries containing two or more words from the countries array and print it as array.

const multipleWordCountries = [];

for (const country of newCountry) {
    //as multi word counties contain space after each word, so we will check for spaced counties andpush that to our array
    if(country.includes(' ')){
        multipleWordCountries.push(country);
    }
}

console.log(multipleWordCountries)




//=========================     9.
//Reverse the countries array and capitalize each country and stored it as an array

const reverseCapitalizedCountries = [];
for (const country of countries) {
    reverseCapitalizedCountries.push(country.toUpperCase())
}
reverseCapitalizedCountries.reverse();
console.log(reverseCapitalizedCountries);
















//=================================         THE END         ======================================

