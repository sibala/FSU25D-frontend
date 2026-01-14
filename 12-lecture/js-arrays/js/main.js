/**
 * Arrays
 */
let myArray = [
    1,                      // Index 0
    2,                      // Index 1
    3,                      // Index 2
    'four',                 // Index 3        
    'five',                 // Index 4        
    false,                  // Index 5    
    true,                   // Index 6  
    [                       // Index 7
        'nested array',
        23
    ]
];

console.log(myArray)
// Display array element
console.log(myArray[0])     // 1
console.log(myArray[1])     // 2
console.log(myArray[2])     // 3
console.log(myArray[3])     // 'four'
console.log(myArray[4])     // 'five'
console.log(myArray[5])     // false
console.log(myArray[6])     // true
console.log(myArray[7])     // ['nested array', 23]


// Display nested array element
console.log(myArray[7][0])  // 'netsed array'
console.log(myArray[7][1])  // 23 



// Update specific elements
myArray[4] // 'five'
myArray[4] = 5;
console.log(myArray[4]) // 5


// Arrays have built in tools such as .length
console.log(myArray.length) // 8


// Array is very similar to how strings are treaded. With tools such as .length, .charAt()
let string = "Hello";
console.log(string.length);     // 5
console.log(string.charAt(0));  // H








/**
 * Array loops
 */
console.log("######### Arrays with different loops #############");


console.log("********** Standard for-loop **********");

for (let i = 0; i < myArray.length; i++) {
    // console.log(`Array index is ${i}`);  // iterate 0-7
    console.log(myArray[i])
    // console.log(myArray[i]) Does the following in this case....
    // console.log(myArray[0])     // 1
    // console.log(myArray[1])     // 2
    // console.log(myArray[2])     // 3
    // console.log(myArray[3])     // 'four'
    // console.log(myArray[4])     // 'five'
    // console.log(myArray[5])     // false
    // console.log(myArray[6])     // true
    // console.log(myArray[7])     // ['nested array', 23]
}

// Used for both displaying and manipulalting the array elements
console.log("**********  for/in-loop **********");
for (let i in myArray) {
    // console.log(`Array index is ${i}`);  // iterate 0-7
    console.log(myArray[i])
}

// Used for only displaying the array elements
console.log("**********  for/of-loop **********");
for (let value of myArray) {
    console.log(value)
}

console.log("**********  array loop with built-in function .forEach() **********");
myArray.forEach(function(value, index, array) {
   console.log(value)
//    console.log(index)
//    console.log(array)
//    array[index] += " - updated"
})







/**
 * Array functions
 */
console.log("######## Array functions ###########")


console.log(' ######## Lets multiply all elements by 10 ########')

let numbers = [1, 3, 5, 7, 9];

// Solution 1
// for (let i in numbers) {
//     numbers[i] *= 10;
// }
// console.log(numbers)


// Solution 2
// let newNumbersArray = numbers.map(multiplyByTen)
// console.log(newNumbersArray);

// function multiplyByTen(value) {
//     return value * 10
// }

// Solution 3 - refactoring of solution 2
let newNumbersArray = numbers.map((value) =>  value * 10)
console.log(newNumbersArray);



console.log(' ######## Concatenate all elements to a string, seperated by space ########')
let words = ['Hello', 'World', 'Wide', 'Web'];

// // Solution 1
// let greeting = ""
// for (let word of words) {
//     greeting += word + " ";
// }
// console.log(greeting.slice(0,-1))

// Solution 2
console.log(words.join(' '))





/**
 * Nested arrays
 */

console.log("############ Nested arrays ############");
let vehicles = [
    'Skoda',
    'Volvo',
    'Jeep',
    'Cupra',
    'Zeekr'
]


let vehicleStock = [
    13,
    55,
    5,
    33,
    3
]

let vehicleSold = [
    4,
    20,
    2,
    9,
    1
]


let vehicleData = [
    ['Skoda', 13, 4],
    ['Volvo', 55, 20],
    ['Jeep', 5, 2],
    ['Cupra', 33, 9],
    ['Zeekr', 3, 1],
]


console.log(vehicleData);
// Skoda has sold 4, and has 13 left in storage
console.log(`${vehicleData[0][0]} has sold ${vehicleData[0][2]}, and has ${vehicleData[0][1]} left in storage`);



let vehicleDataHTMLList = '';
for (let i1 in vehicleData) {
    vehicleDataHTMLList += '<h4>Vehicle data for ' + vehicleData[i1][0] + '</h4>';
    vehicleDataHTMLList += '<ul>';
    
    for (let i2 in vehicleData[i1]) {
        vehicleDataHTMLList += '<li>' + vehicleData[i1][i2] + '</li>';
    }

    vehicleDataHTMLList += '</ul>';
}
document.getElementById('vehicle-data').innerHTML = vehicleDataHTMLList;