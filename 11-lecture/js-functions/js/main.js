
/**
 * 
 * Functions
 */

console.log('############# Different function declarations ################');

dummyFunc() // Invoking/Calling the function
dummyFunc() // Invoking/Calling the function
dummyFunc() // Invoking/Calling the function


// Declarting function standard way
// This way of declaration a function allows usage before declaration
// JavaScript moves this type of declaration to the top of the script
// This procedure is called hoisting
function dummyFunc() {
    console.log('Function declared standard way')
}


// Function expression
// Must be declared before usage
let dummyFunc2 = function() {
    console.log('Function declared with function expression')
}
dummyFunc2() // Invoking/Calling the function
    

// Arrow functions
// Must be declared before usage
let dummyFunc3 = () => {
    console.log('Function declared with arrow functions')
}
dummyFunc3(); // Invoking/Calling the function


// Self-invoking and anonymous functions 
// Usually used with events - will cover this later in the course
(function() {
    console.log('Self-invoking and anonymous functions')
})()



console.log('############# Functions with parameters and return-statement ################');

// Limited function without parameters and return - statement
function calculateArea() {
    let height = 5;
    let width = 4;
    let area = height * width;    
    console.log(`Rectangle area is: ${area}`)
}
calculateArea();


// Functions made more flexibile with parameters and return-statement

function calculateAreaWithParamsAndReturn(height, width) {
    return height * width // Note, the return statement jumps out of the function
    console.log('This will never be displayed because the return-statement has alread jumped out of the function')
}

// Re-write the above calculateAreaWithParamsAndReturn with arrow functions
// Removing the curle bracets, means returng a statement, in this case: return height * width
// Arrow functions are popular because it enables short-hands as the example below
// let calculateAreaWithArrowFunction = (height, width) => height * width 


// Note, when declaring 2 parameters, make sure to set values to the 2 params, when calling the function
let rectangleArea = calculateAreaWithParamsAndReturn(10, 5);
console.log(`Rectangle area is: ${rectangleArea}`)
let squareArea = calculateAreaWithParamsAndReturn(5, 5);
console.log(`Square area is: ${squareArea}`)
let triangleArea = calculateAreaWithParamsAndReturn(5, 5);
console.log(`Triangle area is: ${triangleArea/2}`)


function calculator(height, width, calcType = "+") { // the calcType parameter is declared with a defauölt value. If not assigned when invoked, has the value "+"
    if (calcType == '+') {
        return height + width;
    } else if (calcType == '-') {
        return height - width;
    } else if (calcType == '/') {
        return height / width;
    } else if (calcType == '*') {
        return height * width;
    }
}

// May exclude the third parameter because it's declared with a default value
console.log(`5 + 6 = ${calculator(5, 6)}`)               // 11
console.log(`10 - 6 = ${calculator(10, 6, "-")}`)       // 4
console.log(`10 / 5 = ${calculator(10, 5, "/")}`)       // 2
console.log(`10 * 5 = ${calculator(10, 5, "*")}`)       // 50






console.log('############# Scopes ################');

// global scope, can be used everywhere after its declared (in functions, if-blocks etc....)
let globalScope = 5         


// code here can NOT use functionScope
function exampleFunction() {
    // function scope lives only inside of the function its declared in
    let functionScope = 4;  
    console.log(functionScope);
}
// code here can NOT use functionScope


console.log('############# Block-scopes: let VS var ################');

var x = 5 // Does NOT have block Scope
for (var x = 1; x < 10; x++) { // Block scope
}
console.log(x);      // 10



 // Does have block Scope
let y = 5  
for (let y = 1; y < 10; y++) { // Block scope
}
// Global Scope cannot be changed by block Scope
console.log(y);      // 5




console.log('############# const ################');
// const variables are as the name implies, its a constant, meaning not allowed to change value or redeclare 
const PI = 3.14;
//PI = 2 // Not allowed





