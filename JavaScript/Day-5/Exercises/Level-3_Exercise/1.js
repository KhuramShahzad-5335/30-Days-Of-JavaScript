/*
    The following is an array of 10 students ages:
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]





//Sort the array and find the min and max age.
//...Firstly we will sort the array, then it will automaticall give us min max val.

const sortedArr = ages.sort();
console.log(sortedArr);
lastIndex = ages.length - 1;
valueAtLastIndex = ages[lastIndex]
console.log('Minimum age is: ',ages[0],"\nMax Age is: ",valueAtLastIndex);






//Find the median age(one middle item or two middle items divided by two)

console.log(ages)
indexOfMiddleItem = Math.round((ages.length - 1) / 2);
// we are only taking only one middle idem
let median = (parseInt(ages.splice(indexOfMiddleItem,1)) + parseInt(ages.splice(indexOfMiddleItem,1)))/ 2;
console.log(median)





//Find the average age(all items divided by number of items)
console.log(ages.length)
el1 = parseInt(ages[1]);
el2 = parseInt(ages[1]);
el3 = parseInt(ages[2]);
el4 = parseInt(ages[3]);
el5 = parseInt(ages[4]);
el6 = parseInt(ages[5]);
el7 = parseInt(ages[6]);
el8 = parseInt(ages[7]);
let average = (el1 + el2 + el3 + el4 + el5 + el6 + el7 + el8) / 2;

console.log("Average = ",average)



//Find the range of the ages(max minus min).
let maxValIndex = ages.length - 1;
maxVal = parseInt(ages[maxValIndex])

minVal = parseInt(ages[0])

range = maxVal - minVal;

console.log("Range = ",range);






//Compare the value of (min - average) and (max - average), use abs() method 
console.log(Math.abs(minVal - average) == Math.abs(maxValIndex - average))
