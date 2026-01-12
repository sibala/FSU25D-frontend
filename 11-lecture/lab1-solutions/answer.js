(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 */


let card1 = 4;
let card2 = 2;
let card3 = 7;
let card4 = 1;
let card5 = 11;

let result = card1 + card2 + card3 + card4 + card5
ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, true);

/**
 * Exercise 1.2 (1 points)
 */

// Solution 1
let status = "";
if (card1 + card2 + card3 + card4 + card5  > 21) {
    status = "busted"
} else {
    status = "safe"
}

// Solution 2 - ternary operator
// let status = (ANSWER > 21)
//     ? 'busted'
//     : 'safe';
 

ANSWER = status

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 */


result = card1 + card2 + card3;

// Solution 1
if(result > 21){
    status = "busted";
}else if(result < 21){
    status = "safe";
}else if(result == 21){
    status = "black jack"
}


// Solution 2
// if(result > 21){
//     status = "busted";
// }else if(result == 21){
//     status = "black jack"
// } else {
//     status = "safe";
// }


ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 */

let dealer1 = 1;
let dealer2 = 6;
let dealer3 = 7;
let sum = dealer1 + dealer2 + dealer3;
let action = "";

if (sum < 17) {
    action = "pick";
} else if (sum >= 17 && sum < 21) {
    action = "stop";
} else if (sum === 21) {
    action = "black jack";
} else {
    action = "busted";
}


ANSWER = action

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 */

// Solution 1
// let myFruit = "plum"
// let message;
 
// switch (myFruit) {
//     case "banana":
//         message = "The banana is yellow.";
//         break;
//     case "apple":
//         message = "The apple is green.";
//         break;
//     case "kiwi":
//         message = "The kiwi is green.";
//         break;
//     case "plum":
//         message = "The plum is purple.";
//         break;
//     default:
//         message = "Unknown fruit.";
// }
 
// Solution 2
// let myFruit = "plum";
// let color = ""

 
// switch(myFruit){
//     case "banana":
//         color = "yellow";
//         break;
//     case "apple":
//         color = "green";
//         break;
//     case "kiwi":
//         color = "green";
//         break;
//     case "plum":
//         color = "purple";
//         break;
// }
 
// let sentence = `The ${myFruit} is ${color}.`;
 

// Solution 3
let myFruit = "plum";
let color = ""

 
switch(myFruit){
    case "banana":
        color = "yellow";
        break;
    case "apple":
    case "kiwi":
        color = "green";
        break;
    case "plum":
        color = "purple";
        break;
}
 
let sentence = `The ${myFruit} is ${color}.`;
 
ANSWER = sentence;
 
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (1 points).
 */

color =''
myFruit = 'pear'
 
switch (myFruit) {
    case 'banana':
        color = 'yellow'
        break
    case 'apple':
        color = 'green'
        break
    case 'kiwi':
        color = 'green'
        break
    case 'plum':
        color = 'purple'
        break
    default:
        color = 'unknown'
}
if (color === 'unknown') {
    result = "That is an unknown fruit."
} else {
    result = `The ${myFruit} is ${color}.`;
}
 


// Solution 2
// let message =''
// myFruit = 'pear'

// switch (myFruit) {
//     case 'banana':
//         message = `The ${myFruit} is yellow.`
//         break
//     case 'apple':
//         message = `The ${myFruit} is green.`
//         break
//     case 'kiwi':
//         message = `The ${myFruit} is green.`
//         break
//     case 'plum':
//         message = `The ${myFruit} is purple.`
//         break
//     default:
//         message = `That is an unknown fruit.`
// }
 
// ANSWER = message;
 



// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 */

let value = 481;
for (let i = 0; i < 10; i++) {
     value += 6;
}
 
ANSWER = value;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 */

let value1 = 551;
for (let i = 0; i < 10; i++) {
    value1 -=8;
} 
ANSWER = value1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (3 points)
 */


// Solution 1
let answer = "";
let inc = 0;
 
for(inc = 22; inc < 45; inc+=2){
 
    if(inc == 22){
        answer = inc;
    }else{
        answer += "," + inc;
    }
 
}


// Soluton 2
// let result1 ="";
 
// for (let i = 22; i <= 45; i++) {
//     if (i % 2 === 0) { // True when number is even
//         if (result1 === "") {
//             result1 += i;
//         } else {
//             result1 += "," + i;
//         }
//     }
// }


// Solution 3
// var y = "22"
// for (i = 24; i < 45; i+=2) {
//     y += "," + i
// }
// ANSWER = y;


// Solution 4 - Överkurs
// let arr = [];
// for (let i = 22; i <= 45; i += 2) arr.push(i); // [22,24,26,28,30...44]
 
// ANSWER = arr.join(','); // Converts the array to a string, seperated by ,
 
 
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 */

let runcounter = 0
let basevalue = 10
 
while (basevalue < 481) {
    basevalue += 6
    runcounter++
    console.log(runcounter)
    console.log(basevalue)
}
 
ANSWER = runcounter;


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2 (1 points)
 */

let value3 = 551;
let steps1 = 0;
 
while (value3 > 0){
    value3 -=8;
    steps1++
}
 
ANSWER = steps1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/**
 * Exercise 4.3 (3 points)
 */

// MODULO
let iterations = 28;
let stringValue = "";

while(iterations < 64){
    if(iterations % 5 === 0 || iterations % 7 === 0){// %= om resten efter dividering = 0

        if (stringValue !==""){
            stringValue += ",";
        }
        stringValue +=iterations;
    }

    iterations ++;
}
ANSWER = stringValue;
 


console.log(10 % 2) // 0
console.log(13 % 2) // 1
console.log(9 % 3) // 0
console.log(10 % 3) // 1
console.log(11 % 3) // 2

x % 2 === 0 // 0 = even number, 1 = odd number


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, true);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
