// Variable
let firstName = "John";

// Function
function printName(name) {
    console.log(`My name is ${name}`);
}

printName(firstName);



console.log('############# Object intro ############');
// If working with ONE object of the same sort, objects right away. No need for classes (blueprints)
let house = {
    // Properties
    color: "red",
    rooms: 4,
    area: 120,

    // Method
    description: function() {
        // "this"  refers to the object itself
        return `This house is ${this.color} with ${this.rooms} rooms and an area of ${this.area} sqm.`;
    }
}

// "this" in the global context, which is the window object in browsers
console.log(this)
// window-object is the mothership, from which all inbuilt functions/objects/whatever comes from
// As shown in the 2 examples below. Note that its not needed to add window. in syntaxt because JS handles this for us :)
// window.alert('Hej')
// console.log(window.document.getElementById('title'))



console.log(house);

console.log("############ Accessing properties ############# ")
console.log(house.color)    // red
console.log(house.rooms)    // 4
console.log(house.area)     // 120


// 
// When looping though the properties/methods, then its suitable to use this kind of syntax
console.log("############ May also call the properties in a way, similar to an array ############# ")
console.log(house["color"])
console.log(house["rooms"])
console.log(house["area"])
console.log("############ Example on looping properties ############# ")
for (let key in house) {
  console.log(house[key])
};


console.log("############ Accessing methods ############# ")
console.log(house.description());



console.log("############ Object.create() to copy objects ############# ")
let houseB = Object.create(house);
houseB.color = "Yellow";
houseB.rooms = 10;
houseB.area = 400;
console.log(houseB.description())



console.log('############# Object with init(), a function similar to a construct ############');
let person = {
    // Properties
    firstName: "John",
    lastName: "Doe",
    age: 35,

    // Methods
    init: function(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    },
    fullName: function() {
        return this.firstName + " " + this.lastName
    },
    greeting: function() {
        return `Hello!, My name is ${this.fullName()}`
    }
}


let christoffer = Object.create(person);
christoffer.firstName = "Christoffer";
christoffer.lastName = "Hilleberg";
christoffer.age = 37;
console.log(christoffer.greeting())

let lynn = Object.create(person);
lynn.init('Lynn', 'Wigart', 36)
console.log(lynn.greeting())



// console.log('############# Object constructors ############');
// Should work with classes insead, 
// This is good to know so you can distinguish between functions and Object constructors

// function PersonBlueprint(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;

//     this.fullName = function() {
//         return this.firstName + " " + this.lastName;
//     }

//     this.greeting = function() {
//         return "Hello! My name is " + this.fullName();
//     }
// }

// let erice = new PersonBlueprint('Erica', 'Friberg', 35)
// console.log(erice.greeting())



console.log('############# Classes  ############');
// If working with multiple objects of the same sort, use a class (blueprint of an object)
class Animal {
    constructor(name, sound, favoriteFood) {
        this.name           = name
        this.sound          = sound
        this.favoriteFood   = favoriteFood
    }

    getFrase() {
        return `My name is ${this.name} and I like to eat ${this.favoriteFood}, ${this.sound}`
    }
}


let mouse = new Animal('Mickey', 'piip piip', 'cheese');
console.log(mouse.getFrase())

let lion = new Animal('Simba', 'AAAAAAAAARRHHHHH', 'YOU');
console.log(lion.getFrase())



console.log('############# About built-in objects and functions ############');


let array = [1, 2, 3]
console.log(array.length)       // property
console.log(array.push(4))      // method

let string = "string";
console.log(string.length)      // property
console.log(string.slice(0, -1))// method

let number = 5.123123123
console.log(number.toFixed(3))  // method



// In JavaScript, objects are king. If you understand objects, you understand JavaScript.

// When to use a Class/blueprint and when to use an object right away
// When the need to work with multiple examples av the same object, then a blueprint/class is more appropiate
console.log(new Date().getFullYear());

// When working with only ONE object, then no need to create a blueprint/class. May create the object straight away.
console.log(Math.PI)               // Property
