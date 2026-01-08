console.log("########## if-statement ############");

if (true) {
    console.log("Exekverar koden")
}

if (false) {
    console.log("Kommer aldrig att exekverar koden")
}




console.log('Hej klassen')
console.log('Hej klassen')
console.log('Hej klassen')
console.log('Hej klassen')
console.log('Hej klassen')



/*
Similar to an if-statement, 
while-lops use conditions and will execute the code as long as the condition is true

Important to keep changing the value of the condition, so that eventueally tha condition will be false,  and the loop breaks.
OR else we will be stuck in an infinity-loop

while (condition) {
  // code block to be executed
}
*/
console.log("########## while-loop with decrement ############");

let counter = 5;

while (counter > 0) {
    console.log('Hej klassen');
    console.log(counter);

    // 3 different ways to implement decrement by -1
    // counter = counter - 1;
    // counter -= 1;
    counter--;
}

console.log("########## while-loop with increment ############");

counter = 0;
while (counter < 5) {
    console.log('Hej klassen');
    console.log(counter);

    // 3 different ways to implement increment by +1
    // counter = counter + 1;
    // counter += 1;
    counter++;
}





/*
 for (statement 1; statement 2; statement 3) {
      code block to be executed
 }
 
 Statement 1: 
 is executed (one time) before the execution of the code block.
 sets a variable before the loop starts (let i = 0).
 
 Statement 2: 
 defines the condition for executing the code block.
 
 Statement 3: 
 is executed (every time) after the code block has been executed.
 increases a value each time the code block in the loop has been executed.
 */

/*
    If you know the loop count
    Then the for loop is more suiteable

    if you don't know the loop count
    Then the while loop is more suiteable
    Example:
        - Loop untill the user has guessed right, in a guesssing game
        - Loop as long as the password is wrong, in a login app
*/


// Guessing game while-loop
// computerNumber = 9
// let userGuess = prompt("Guess the right number between 0-10.")

// while(userGuess != computerNumber) {
//     userGuess = prompt("Your guess is wrong. Keep on guessing")
// }

// rewrite guessing game in do-while-loop
// do {
//     userGuess = prompt("Guess the right number between 0-10.")
// } while(userGuess != computerNumber)




console.log("########## for-loop with increment ############");
for (let counter = 0; counter < 5; counter++) {
    console.log('Hej klassen')
    console.log(counter)
}

console.log("########## for-loop with decrement ############");
for (let counter = 5; counter > 0; counter--) {
    console.log('Hej klassen')
    console.log(counter)
}



console.log("########## for-loop with break ############");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i)
}


console.log("########## for-loop with continue ############");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i)
}


/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

Similar to an if-statement
- Use switch if you are checking only one variable, and need to alter the outcome depending on different states of that variable
- Use if-statements if need to only check one outcome, OR when you need to check multiple conditions
*/

console.log('########### switch ###########');


let day = ''
let dayIndex = new Date().getDay()  // 0-6
console.log(dayIndex);

switch (dayIndex) {
    case 0:
        day = 'Sunday'
        break
    case 1:
        day = 'Monday'
        break
    case 2:
        day = 'Tuesday'
        break
    case 3:
        day = 'Wednesday'
        break
    case 4:
        day = 'Thursday'
        break
    case 5:
        day = 'Friday'
        break
    case 6:
        day = 'Saturday'
        break
}
console.log('The day of the week is: ' + day)