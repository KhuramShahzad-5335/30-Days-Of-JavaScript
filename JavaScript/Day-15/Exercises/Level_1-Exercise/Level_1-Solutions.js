//====================              1.

//  Create an Animal class. The class will have name, age, color, legs 
//  properties and create different methods

class Animal{

    constructor(
        name,
        age,
        color,
        legs,
    ){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getAnimalInfo(){
        return `${this.name} is an animal. He is ${this.age}. He is ${this.color} and has ${this.legs} legs.`
    }
}

const animalObj = new Animal('Spencer', 5, 'Green', 4);

console.log(animalObj);
console.log(animalObj.getAnimalInfo())




//===================               2.
//  Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal{
    intruduce(){
        return 'Hello, i am a dog.'
    }
}

class Cat extends Animal{
    intruduce(){
        return 'Hello i am a cat.'
    }
}

const meow = new Cat('Lucy', 3, 'Brownish white', 4);
const whow = new Dog('Moti', 4, 'Black', 4);

console.log(meow);
console.log(meow.intruduce());
console.log(meow.getAnimalInfo());

console.log(whow)
console.log(whow.intruduce());
console.log(whow.getAnimalInfo());