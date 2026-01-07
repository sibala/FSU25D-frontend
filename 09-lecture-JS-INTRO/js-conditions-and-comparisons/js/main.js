/*
== Equal to value
!= NOT equal to value
> Greater than
< Lesser than
>= Greater than OR equal to
<= Lesser than OR equal to
=== Equal to value AND datatype
!== NOT equal to value AND datatype

|| AND
&& OR
*/
console.log('############### Conditions and Comparisons ##############');
let x = 2;

console.log(x == 2)         // true
console.log(x == 1)         // false

console.log("########################")
console.log(x != 3)        // true
console.log(x != 2)        // false

console.log("########################")
console.log(x > 1)          // true
console.log(x > 2)          // false

console.log("########################")
console.log(x < 3)          // true
console.log(x < 2)          // false

console.log("########################")
console.log(x >= 3)          // false
console.log(x >= 2)          // true
console.log(x >= 1)          // true

console.log("########################")
console.log(x <= 3)          // true
console.log(x <= 2)          // true
console.log(x <= 1)          // false

console.log("########################")
console.log(2 == 2)          // true
console.log(2 == "2")        // true
console.log(2 === "2")       // false
console.log(2 === 2)         // true


console.log("########################")
let condition1 = x > 1 || x < 1     // true || false => true
console.log(condition1)      // true

let condition2 = x > 1 && x < 1     // true && false => false
console.log(condition2)      // false






/*
Is used for comparing different values, often together with if-statements

if (condition) {
    Execute this code-block, if the condition is true
}
*/
console.log('############### if-statement ##############');

let age = 20;
if (age == 20) {
    console.log('Du är 20 år gammal')
}

if (age != 77) {
    console.log('Du är INTE 77 år gammal')
}


if (age < 30) {
    console.log('Du är yngre än 30 år')
}

if (age > 18) {
    console.log('Du är äldre än 18 år')
}




/*
if (condition1 || condition2) {
    Execute this code-block, if condition1 OR condition2 is true
}

if (condition1 && condition2) {
    Execute this code-block, if condition1 AND condition2 is true
}
*/
console.log('############### if-statement with && and || ##############');

age = 13
let height = 140

if (age >= 12 || height >= 150) {
    console.log('Du får åka den här attraktionen (med OR)')
}

if (age >= 12 && height >= 150) {
    console.log('Du får INTE åka den här attraktionen (med AND)') // Kommer inte att skrivas ut
}


/*
if/else - statement

if (condition1) {
    Execute this code-block, if the condition is true
} else {
	Otherwise execute this code-block
}
*/
console.log('############### if/else-statement ##############');

age = 18
if (age >= 18) {
    console.log('Du får ta körkortet')
} else {
    console.log('Du är för ung för att ta körkortet')
} 



/*
if/elseif/else - statement

if (condition1) {
    Execute this code-block, if condition1 is true
} else if (condition2) {
	Execute this code-block, if condition2 is true
} else {
	Otherwise execute this code-block
}
*/
console.log('############### if/else if/else-satser ##############');

/**
 * Om klockan är innan 10
 *      "God morgon!"
 * Om klockan är mellan 10 och 18 (time >=10 && time <=18)
 *      "God dag!"
 * Om klockan är efter 18
 *      "God kväll!"
 */


let time = 20;
// Solution 1
// if (time < 10) {
//     console.log('God morgon!')
// } else if (time >=10 && time <=18) {
//     console.log('God dag!')
// } else {
//     console.log('God kväll!')
// }



/**
 * Om klockan är innan 10
 *      "God morgon!"
 * Om klockan är efter 18
 *      "God kväll!"
 * Annars
 *      "God dag!"
 * 
 */

// Solution 2
if (time < 10) {
    console.log('God morgon!')
} else if (time >18) {
    console.log('God kväll!')
} else {
    console.log('God dag!')
}

