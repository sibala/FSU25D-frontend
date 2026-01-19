(function (dbwebb) {
"use strict";

let ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 3 - arrays
 */


/**
 * Exercise 1.1 (1 points)
 */
let array2 = ["potato","carrot","onion","leek","cabbage"];



ANSWER = array2[1]

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 */


// Solution 1
let result = array2[0] + "-" + array2[array2.length - 1];

// Solution 2
// let result = `${array2.at(0)}-${array2.at(-1)}`;
 
// Solution 3
// let result = [
//     array2.find(x => x),
//     array2.findLast(x => x)
// ].join('-');


ANSWER = result

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 */

// Solution 1
const array1 = [47, 98, -13, 0, -412, 499, 3, 1200];
const array3 = [...array1, ...array2]; // Fyll array3 med hjälp av Spread operator!

// Solution 2
// let array1 = [47,98,-13,0,-412,499,3,1200];
// let array3 = array1.concat(array2);
 

ANSWER = array3;



// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 */

// Solution 1
// let array21 = array2.slice();
// array21.sort();

// Solution 2
// let array21 = array2.slice().sort();
 

// Solution 3
// Här behöver vi inte kopiera; toSorted() gör det för oss
let array21 = array2.toSorted();
 
 
ANSWER = array21;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 */

// Solution 1
// [47, 98, -13, 0, -412, 499, 3, 1200]
// const array11 = array1.slice().sort((a, b) => a - b);

// Solution 2
const array11 = array1.toSorted((a, b) => a - b);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 */

// Solution 1
// ["potato","carrot","onion","leek","cabbage"]
let array22 = array2.map(item => item.toUpperCase());

// For inspection use the following code
// let array22 = array2.map(item => {
//     console.log(item);
//     console.log(item.toUpperCase());
//     return item.toUpperCase()
// });
 
ANSWER = array22;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 */
// Solution 1
// [47, 98, -13, 0, -412, 499, 3, 1200]
let array12 = array1.filter(number => number > 0)
// [47, 98, 499, 3, 1200]

ANSWER = array12;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 */


// Solution 1

// function arrayAverage(array) {
//     let result = 0;
//     for(let i = 0; i < array.length; i++) {
//         result += array[i];
//     }        
//     return Math.round(result/array.length)
// }


// Solution 2
const arrayAverage = arr  => Math.round(
    arr.reduce((sum, val) => sum + val) / arr.length
);

// For inspection use the following code
// array1 = [47, 98, -13, 0, -412, 499, 3, 1200]
// const arrayAverage = arr  => {

//     // Total sum of the array elements
//     console.log( arr.reduce((sum, val) => sum + val));

//     // Inspect how sum and val actually works
//     arr.reduce((sum, val) => {
//         console.log('Sum:' + sum)
//         console.log('Val:' + val)
//         return sum + val
//     })

//     return Math.round(
//         arr.reduce((sum, val) => sum + val) / arr.length
//     );
// }
 
ANSWER = arrayAverage(array1)



// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Modify arrays
 *
 * Learn how to modify arrays.
 *
 */



/**
 * Exercise 2.1 (1 points)
 */

let myArray = array1.slice();
function reOrderArray(arr) {
    let lastItem = arr.pop(); // Ta bort sista elementet och spara det i en variabel
    console.log(lastItem);
    let firstItem = arr.shift(); // Ta bort första elementet och spara det i en variabel
    console.log(firstItem);
    arr.unshift(lastItem); // Lägg till det sista elementet i början av arrayen
    arr.push(firstItem); // Lägg till det första elementet i slutet av arrayen
    return arr;
}

ANSWER = reOrderArray(myArray);



// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points)
 */


// Solution 1
myArray.splice(2, 2, false, false);
 

// Solution 2
// console.log(`myArray innan splicing: ${myArray}`);
// const replacements = Array(2).fill(false); // Creates the following array [false, false]
// myArray.splice(2, 2, ...replacements);


// Solution 3 - 
// Om keys inte alltid kommer efter varandra 
// [2,3].forEach(i => myArray.splice(i, 1, false));
 
ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (1 points)
 */

myArray.splice(3, 2);
myArray.splice(3, 0, "MEGA");
 
ANSWER = myArray;


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 .  Arrays with loops
 *
 * Learn how to loop array elements
 *
 */


/**
 * Exercise 3.1 (1 points)
 */
// Solution 1
// let myString2 = "";
// let myArray2 = ["JavaScript", "JavaScript", "JavaScript", "JavaScript", "JavaScript"]
 
// for (let i = 0; i < myArray2.length; i++) {
//     myString2 += myArray2[i];
// }


// Solution 2
let myString2 = "";
const myArray2 = Array(5).fill("JavaScript"); // creates the array ["JavaScript", "JavaScript", "JavaScript", "JavaScript", "JavaScript"]
console.log(`myArray2: ${myArray2}`);
 
for (let word of myArray2) {
    myString2 += word;
    console.log(`myString2 hittills: ${myString2}`);
}
 
ANSWER = myString2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);


/**
 * Exercise 3.2 (3 points)
 */


// Solution 1
// let myList = [1, 3, 5, 7, 9]
// let search = 5
 
// let isFound = false
// let answerString = ''
 
// for (let i = 0; i < myList.length; i++){
//     if (search == myList[i]) {
//         isFound = true
//         break
//     }
// }

// if (isFound == true) {
//     answerString = 'The number is in the array'
// } else {
//     answerString = 'The number is not in the array'
// }
 
 
// ANSWER = answerString;


// Solution 2
// const myList = [1, 3, 5, 7, 9];
// const search = 5;
// let isFound = false;
 
// for (let [index, element] of myList.entries()) { // Fungerar samma som enumerate i Python! Använder Array destructuring
//     console.log(`index: ${index}, element: ${element}`);
//     if (element === search) {
//         isFound = true;
//         console.log(`${search} hittades i myList på index ${index}!`)
//         break;
//     }
// }
 
// Ternary opeartor för att bestämma vår slutgiltiga mening
// ANSWER = isFound
//     ? "The number is in the array"
//     : "The number is not in the array";


// Solution 3
/* Array.includes() */
// const searchFunction2 = (search, myList) => {
//     return (myList.includes(search)) // Includes loopar igenom myList och returnerar ett boolean-värde beroende på om search-värdet finns någonstans i arrayen.
//         ? "The number is in the array"
//         : "The number is not in the array";
// }
 
// console.log(searchFunction2(search, myList));
 

// Solution 4

let myList = [1, 3, 5, 7, 9]
let search = 5;

let result2 = "The number is not in the array";

for (let i = 0; i < myList.length; i++) {
    if (myList[i] === search) {
        result2 = "The number is in the array";
        break;
    }
}

ANSWER = result2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
