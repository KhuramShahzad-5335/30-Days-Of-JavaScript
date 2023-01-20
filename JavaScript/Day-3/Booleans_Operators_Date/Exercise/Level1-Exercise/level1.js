//===================1======================
/*

Declare firstName, lastName, country, city, age, 
isMarried, year variable and assign value to it and 
use the typeof 
operator to check different data types.

*/

const firstName = 'Khuram',
      lastName = 'Shahzad',
      country = 'Pakistan',
      city = 'Multan',
      age = 21,
      isMarried = false,
      year = 2023;

console.log(typeof(firstName))
console.log(typeof(age))
console.log(typeof(isMarried))






//==========================2=========================
//Check if type of '10' is equal to 10

console.log(typeof('10') == 10)
    






//=========================3==========================
//Check if parseInt('9.8') is equal to 10.

console.log(parseInt('9.8') == 10)








//==========================4===========================
/*

    Boolean value is either true or false.

        Write three JavaScript statement which provide truthy value.
        Write three JavaScript statement which provide falsy value.

*/

//................Truthy
console.log(Boolean("no"))
console.log(Boolean(-5))
console.log(Boolean(true))

//...............Falsy
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(false))
console.log(Boolean(!true))
console.log(Boolean(undefined))









//============================5,6======================
/*

Figure out the result of the following 
comparison expression first without using 
console.log(). After you decide the result 
confirm it using console.log()

*/
4 > 3 && 10 < 12 // true && true = true
console.log(4 > 3 && 10 < 12)

4 > 3 && 10 > 12 //true && false = false
console.log(4 > 3 && 10 > 12)

4 > 3 || 10 < 12 //true || true = true
console.log(4 > 3 || 10 < 12)

4 > 3 || 10 > 12 // true || false = true
console.log(4 > 3 || 10 > 12)

!(4 > 3) // !true = false
console.log(!(4 > 3))

!(4 < 3) // !false = true
console.log(!(4 < 3))

!(false) // true
console.log(!(false))

!(4 > 3 && 10 < 12) //false
console.log(!(4 > 3 && 10 < 12))

!(4 > 3 && 10 > 12) //true
console.log(!(4 > 3 && 10 > 12))

!(4 === '4') //true
console.log(!(4 === '4'))

//There is no 'on' in both dragon and python
console.log("python".includes('on') === "jargon".includes('on'))

//Find the length of python and jargon and
// make a falsy comparison statement.

console.log("Python".length !== "Jargon".length)



//==========================7=================