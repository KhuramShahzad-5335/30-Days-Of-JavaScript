//==========        1
//Create an empty object called dog.

const dog = {};


//==========        2.
// /Print the the dog object on the console

console.log(dog);


//===========       3.
//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = 'Babloo';
dog.color = 'White';
dog.legs = 4;
dog.age = '6 years';
dog.bark = function(){
    return 'woof' + ' ' + 'woof';
}




//==========        4.
//Get name, legs, color, age and bark value from the dog object

console.log(dog.name);
console.log(dog.bark());
console.log(dog['age']);
console.log(dog['legs']);
console.log(dog.color);




//=========         5
//Set new properties the dog object: breed, getDogInfo

dog.breed = 'German Shephard';
dog.getDogInfo = function(){

    let dogInfo = `${this.name} is ${this.breed}. ${this.name} is of ${this.color} color.`;
    return dogInfo;
}
console.log(dog.getDogInfo());
