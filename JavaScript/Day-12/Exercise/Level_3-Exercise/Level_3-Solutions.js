//=========================         3.
//Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.


const txt = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'

// Step1 create a function to clean the text and return 3 most frequent words array of obj.

const clean_and_frequent_words = (str) => {

    let clean_txt;
    const counts = {};

// STEP 2: CLEAN THE TEXT
    let pattern = /[!@#$%:&;]/g
    clean_txt = str.replace(pattern, '')

    // Step : 2 : Now get the 3 most frequent words obj.

    // 2.1. Get the array of words.
    let words_pattern = /[a-z]+/gi; // ignore the cases, get the full word 
    const words = clean_txt.match(words_pattern);

    // 2.2 traverse through the array and make an object of counts + words

    words.forEach(word => {
        counts[word] = (counts[word] | 0) + 1;
    });

    // sort the obj and slice to get only three results
    let sorted_counts = Object.entries(counts)
        .sort(
            (a,b) => {
                return b[1] - a[1]
            }
        )
        .slice(0, 3);

    // 2.3 : to return array of objects we will apply following logic

    let sorted_counts_obj = {};

    sorted_counts.forEach(
        ([word, count]) => {
            sorted_counts_obj[word] = count;
    });

    // return the required result, in whatever way asked.
    let result = Object.entries(sorted_counts_obj).map(
        ([word, counts]) => {
            return {word, counts}
        }
    )

    return result;
}

console.log(clean_and_frequent_words(txt))