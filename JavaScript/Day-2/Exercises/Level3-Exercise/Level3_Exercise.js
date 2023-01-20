/**'Love is the best thing in this world. 
 * Some found their love and some are still looking for their love.'
 * Count the number of word love in this sentence. */

const countKey = "Love is the best thing in this world.\
 Some found their love and\
 some are still looking for their love."

const keyPattern = /love/gi

let arr = [];
arrarOfKeys = countKey.match(keyPattern)
numberOfkey = countKey.match(keyPattern).length

console.log(arrarOfKeys,numberOfkey)



/*
Use match() to count the number of 
all because in the following sentence:
'You cannot end a sentence 
with because because because is a conjunction'
 */


stringToCheckKeys = 'You cannot end a sentence with\
 because because because is a conjunction'

keyToMatch = /because/gi

extractingResult = stringToCheckKeys.match(keyToMatch)
countOfKey = stringToCheckKeys.match(keyToMatch).length;

console.log(extractingResult,countOfKey)



/*

Clean the following text and find the most frequent word 
(hint, use replace and regular expressions).

*/

const sentence = '%I $am@% a %tea@cher%, &and& I \
lo%#ve %te@a@ching%;. The@re $is no@th@ing;\
&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple.\
;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript\
&is al@so $the $resu@lt of &love& of tea&ching'

let regEx = /!@#\$%\&\)/g

fixedSenetences = sentence.replace(/\W/g,' ')

console.log(fixedSenetences)





/*
    Calculate the total annual income of the person by 
    extracting the numbers from the following text. 
    'He earns 5000 euro from salary per month, 
    10000 euro annual bonus, 15000 euro online 
    courses per month.'
*/

const strToExtract =  'He earns 5000 euro from salary per month,\
 10000 euro annual bonus, 15000 euro online\
 courses per month.'

 let keyRegEx = /\d+/g;

 let extractedNumArray = strToExtract.match(keyRegEx)
 console.log(extractedNumArray) 
 
 let salary = parseInt(extractedNumArray[0]);
 let annualBonuses = parseInt(extractedNumArray[1]);
 let onlineCourseSale = parseInt(extractedNumArray[2]);

 AnnualIncome = (salary * 12) + annualBonuses + (onlineCourseSale * 12);
 console.log("Annual Income = ",AnnualIncome) 
