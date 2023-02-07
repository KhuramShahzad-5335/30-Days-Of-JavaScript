//===============           3.
//Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];


// Step => 1 create function:
function convertArrayToObject(arr){
    
    // Step => 2 we will use map, which returns an array, after modification so,
    return arr.map(([name, skills, scores]) => {
        return { name, skills, scores };
        // also we can also write it as : return { name : name, skills : skills, sores : scores}, 
    })
}
console.log(convertArrayToObject(students));
