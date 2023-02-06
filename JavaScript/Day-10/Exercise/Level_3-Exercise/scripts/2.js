// Show the most spoken languages, we will use Map() object for that,

// Step: 1 => Create a function mostSpokenLanguages(arr, noOfLanguages);

const mostSpokenLanguages = (arr, n) => {


    let count = 0;
    let i = 1;
    let langAndCount = {};
    let language = '';

    let mostSpokenLanguagesArr = [];
    let frequency = {};

    //  Step: 2 => Extract all the languages in a array, we will use map for that.
    const langsTemp = arr.map(
        (country) => {
            return country.languages;
        }
    );

    // Step: 3 =>  flaten the arrays to contain all the languages.
    const allLanguages = langsTemp.flat();

    // Step: 4 =>  Iterate through all the languages, and create an array which contains an object which has a language it count etc,
    allLanguages.forEach(lang => {
        frequency[lang] = frequency[lang] ? frequency[lang] + 1 : 1;
    });

    //Step: 5 =>  Now an create array push all the data of frequency in that array.
    // To Iterate object frequency we will use forin loop ok.

    for(const lang in frequency){
        mostSpokenLanguagesArr.push(
            {
            'Language' : lang,
            'count' : frequency[lang],
        }    
        );
    }

    //Step: 6 => Now sort this array wrt counts in ascending order.
    mostSpokenLanguagesArr.sort((a,b) => {
        return b.count - a.count;
    });

    // Step: 7 => Now push as many elemsts in map as many user asked it will automaticall return most spoken. :)
    const setOfMostSpokenLanguage = new Set();
    
    for (const obj of mostSpokenLanguagesArr) {
        setOfMostSpokenLanguage.add(obj);
        if(setOfMostSpokenLanguage.size === n){
            break;
        }
    }
    
    return setOfMostSpokenLanguage;
}


console.log(mostSpokenLanguages(countries, 3));