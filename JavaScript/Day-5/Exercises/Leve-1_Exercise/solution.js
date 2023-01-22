// i have done solved all the questons but somehow i deleted them, so i am starting from the question no.19-20.

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

console.log(itCompanies)



//-----------------------19 -----------------
//slice out th emiddle comany or companies form th earray.

// getting index of middle element
IndexOfMiddleEl = Math.round(itCompanies.length / 2);
console.log(IndexOfMiddleEl)

// slicing the middle element.
console.log(itCompanies.slice(IndexOfMiddleEl,IndexOfMiddleEl + 1));


// ---------------------20------------------
// remove forst itcompany form the array,

// to remove the first element from array we use shift method.
// and this method returns the comany that we removed as a string.
console.log("The 1st company that we removed is: ",itCompanies.shift(),"\nRemaining Companies are : ",itCompanies)



//-------------------  20 --------------------
 // as we have the index of middle element is indexOfMddleel var so,
// we will use splice to remove the required element, which will return the element that we removed in the new arr

console.log(itCompanies,itCompanies.splice(IndexOfMiddleEl,1));




//-------------------------- 22 ==========================

// to remove the last element we use pop,which returns the string that we removed.

console.log(itCompanies,itCompanies.pop());





//------------------    23    --------------------
// to remove the all the elements will will use splice, with first armoment as 0 indexx to length of arr

console.log(itCompanies.splice(0,itCompanies.length));
console.log("Now the itCompanies arr is empty: ",itCompanies).IndexOfMiddleEl




//------------- The End -------------------- 