// this is constant val
const CONSTANT_VAL = 1/2;

//input the base from user, convert it into number type and store in, variable,
const baseOfTri = parseFloat(prompt("Enter the base of Triange: ",""))

// similarly get height, store and convert that to float
const heightOfTri = parseFloat(prompt("Enter height of Triangle: ", ''));

//calculate the area of the triangle now.
const areaOfTriangle = CONSTANT_VAL * baseOfTri * heightOfTri

// now lets alert the user, with output, and we can also show thin in browsers console.

alert(`Area of Triangle with ${baseOfTri}cm Base And ${heightOfTri}cm Height is ${areaOfTriangle}cm25.`);
console.log(`Area of Triangle with ${baseOfTri}cm Base And ${heightOfTri}cm Height is ${areaOfTriangle}cm25.`);