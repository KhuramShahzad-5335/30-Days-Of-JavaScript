//=========================         1
//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

// Create a function
const tenMostFrequentWords = (str) => {

    let frequency = 0;
    let frequency_obj = {};

    // Step 2: get all the words in the array.
    let pattern = /[a-z]+/gi
    let words_array = str.match(pattern);
    console.log(words_array);

    // step 3: traverse through the array, using for each loop.

    words_array.forEach(word => {
        frequency_obj[word] = (frequency_obj[word] | 0) + 1;
    });

    // now sort the obj and slice only 1st ten values: )
    let sorted_values = Object.entries(frequency_obj).sort(
        (a, b) => {
            return b[1] - a[1]; 
        }
    ).slice(0, 10)

    let sorted_values_obj = {};

    sorted_values.forEach(
        ([word, count]) => {
            sorted_values_obj[word] = count;
        }
    )

    // now return 1st ten values of this object
    return sorted_values_obj;
} 



// get The output to console.

console.log(tenMostFrequentWords(paragraph));