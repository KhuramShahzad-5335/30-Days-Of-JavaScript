/*

In the webTechs array check 
if Sass exists in the array and if 
it exists print 'Sass is a CSS preprocess'.
If it does not exist 
add Sass to the array and print the array.

*/

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  // now we will use if conditio to check.using includes.

  if(webTechs.includes('Sass')){
    console.log("Sass is a CSS Preprocessor!");
  }
  else{
        let temp = webTechs.unshift('Sass');
        console.log(webTechs)
  }