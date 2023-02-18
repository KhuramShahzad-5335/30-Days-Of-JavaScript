//====================              1.
//  Override the method you create in Animal class

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
class Dog extends Animal{
    constructor(
        name,
        age,
        color,
        legs,
        kind,
    ){
        super(name, age, color, legs);
        this.kind = kind;
    }
    intruduce(){
        return 'Hello, I am a dog.'
    }
    getAnimalInfo(){
        return this.name + 'is a' + this.kind + '. HE is ' + this.age + ' and his color is ' + this.color + ' and has ' + this.legs  + ".";
    }
}

class Cat extends Animal{
    constructor(
        name,
        age,
        color,
        legs,
        kind,
    ){
        super(name, age, color, legs);
        this.kind = kind;
    }
    intruduce(){
        return 'Hello, I am a dog.'
    }
    getAnimalInfo(){
        return this.name + 'is a' + this.kind + '. HE is ' + this.age + ' and his color is ' + this.color + ' and has ' + this.legs  + ".";
    }
}

const cat1 = new Cat('Billi', 3, 'Brown', 4, 'Cat');
const dog1 = new Dog('Kutta', 5, 'Kaala', 4, 'Dog');

console.log(cat1.getAnimalInfo());
console.log(dog1.getAnimalInfo());