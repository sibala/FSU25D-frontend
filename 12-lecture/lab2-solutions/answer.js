(function (dbwebb) {
"use strict";

let ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 2 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 */

// Solution 1
function sumRangeNumbers(low, high) {
  let sum = 0;
  for (let i = low; i <= high; i++) {
    sum += i;
    // console.log(i)
    // console.log(sum)
  }
  return sum;
}


// Solution 2
// function sumRangeNumbers(val1, val2){
//     let sum = 0;
//     while(val1 <= val2){
//         sum += val1;
//         val1 ++;
//     }
   
//     return sum;
// }

// Solution 3 - solved with a math formula
// function sumRangeNumbers(low, high) {
//     let count = high -low + 1;
//     let sum = (count * (low+ high) / 2)
//     return sum;
// }
 
 
ANSWER = sumRangeNumbers(22, 91);
 

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 */

// Solution 1
// function fruitColor(fruit){
//     if (fruit === "banana"){
//         return "yellow"
//     } else if ((fruit === "apple") || (fruit === "kiwi")) {
//         return "green"
//     } else if (fruit === "plum") {
//         return "red"
//     }
// }


// Solution 2
function fruitColor(fruit) {
    let color = "";
    switch (fruit) {
        case "banana":
            color = 'yellow'
            break
        case "apple":
        case "kiwi":
            color = 'green'
            break
        case "plum":
            color = 'red'
            break
    }
    return color
}

// Solution 3
/* Förlåt på förhand... */
// function fruitColor(fruit) {
//     const colors = { // Skapa ett object och sortera frukterna efter färg.
//         yellow: "banana",
//         green: ["apple", "kiwi", "grape"], // Om flera frukter har samma färg, lägg dem i en array.
//         red: ["plum", "cherry"]
//     }
//     return Object.keys(colors).find( key => (colors[key] === fruit || colors[key].includes(fruit))); // Returnera den nyckel som variablen frukt hittas under (antingen som sträng eller som array-värde).
// }

// Solution 4
// function fruitColor(fruit) {
//     const fruits_colors = {
//         "banana": "yellow",
//         "apple": "green",
//         "kiwi": "green",
//         "plum": "red",
//     }
//     console.log(`${fruit} will give the color ${fruits_colors[fruit]}!`)
 
//     return fruits_colors[fruit];
// }
 

 
ANSWER = fruitColor ("plum");
 

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 */

// Solution 1
function printRange(rangeStart, rangeStop) {
    let result = "";
    for (let i = rangeStart; i <= rangeStop; i++) {
        result += i;
        if (i !== rangeStop) {
            result += ",";
        }
    }
    return result;
}


// Solution 2
// let printRange = (rangeStart, rangeStop) => {
//     let result = "";
//     for(let i = rangeStart; i <= rangeStop; i++)
//         result += (i === rangeStart) ? i : `,${i}`;
 
//     return result;
// }
 

// Solution 3
// function printRange(rangeStart, rangeStop) {
//   let result = [];
//   for (let i = rangeStart; i <= rangeStop; i++) {
//     result.push(i);
//   }
//   return result.join(",");
// }


ANSWER = printRange(25, 46)

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 */
function printRangeReversed(rangeStart, rangeStop){
    let result1 = "";
    for (let i = rangeStart; i >= rangeStop; i--){
        if (i === rangeStart){
            result1 += i;
        } else {
            result1 += "," + i;
        }
    }
    return result1;
}
 
 
ANSWER = printRangeReversed(46, 25);;


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);


 


/**
 * Exercise 1.5 (1 points)
 */


// Solution 1
// function printAnyRange(rangeStart, rangeStop) {
//     if (rangeStart < rangeStop) {
//         return printRange(rangeStart, rangeStop);
//     }
//     else  {
//         return printRangeReversed(rangeStart, rangeStop);
//     }
// }
 

// Solution 2
const printAnyRange = (rangeStart, rangeStop) => {
    if (rangeStart < rangeStop) {
      return printRange(rangeStart, rangeStop);
    }

    if (rangeStart > rangeStop) {
      return printRangeReversed(rangeStart, rangeStop);
    }
  };

ANSWER = printAnyRange(25, 46);


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 */
// Solution 1
function stringRepeat(text, times){
    let result = "";
    for (let i = 0; i < times; i++){
        result += text;
    }
    return result;
}


ANSWER =  stringRepeat("grey", 12);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 */

// Solution 1
// function inRange(rangeStart, rangeStop, value) {
//     if(value > rangeStart && value < rangeStop) {
//         return true
//     } else {
//         return false
//     }
// }


// Solution 2
const inRange = (rangeStart, rangeStop, value) => (value > rangeStart && value < rangeStop)

ANSWER = inRange(131, 547, 434);
 

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 */



ANSWER = inRange(131, 547, 636);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 */
// Solution 1
// function degreesToRadians(degrees) {
//     let radians = degrees * (Math.PI / 180);
//     console.log(radians); // 0.5585053606381855
//     return Math.round(radians * 10000) / 10000; //0.5585
// }
 
// Solution 2
// function degreesToRadians(degree){
//     return Number((degree*Math.PI/180).toFixed(4));
// }
// ANSWER =degreesToRadians(32);

// Solution 3
const degreesToRadians = d => +(d * Math.PI / 180).toFixed(4);
ANSWER = degreesToRadians(32);
 
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10 (1 points)
 */

// Solution 1
function fizzBuzz(start, stop) {
    if (stop <= start) {
        return "Error: stop must be greater than start";
    }
 
    let result = "";
    for (let i = start; i <= stop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "Fizz Buzz";
        } else if (i % 3 === 0) {
            result += "Fizz";
        } else if (i % 5 === 0) {
            result += "Buzz";
        } else {
            result += i;
        }
 
        if (i !== stop) {
            result += ",";
        }
    }
 
    return result;
}
  

// Solution 2 - Överkurs
/* Ber om ursäkt på förhand för arrays igen... */
// function fizzBuzz2(start, stop) {
//     let arr = [];
//     for (let i = start, fb = []; i <= stop; i++, fb = []) {
 
//         if (i % 3 === 0) fb.push("Fizz"); // Om iterationen är jämnt delbar med 3, lägg till Fizz i arrayen fb.
//         if (i % 5 === 0) fb.push("Buzz"); // Om iterationen är jämnt delbar med 5, lägg till Buzz i arrayen fb.

//         arr.push( (fb.length) ? fb.join(' ') : i); // Om det finns något i arrayen fb, slå samman innehållet i den till en sträng och lägg till strängen i arrayen arr. Annars, lägg till iterationen i arrayen arr.
 
//     }
//     return arr.join(','); // Slå samman innehållet i arrayen arr och lägg till kommatecken mellan värdena.
// }


// Solution 3 - Överkurs
// const fizzBuzz = (s, e) =>
//   e <= s
//     ? "Error"
//     : Array.from({ length: e - s + 1 }, (_, i) => {
//         const n = s + i;
//         return n % 15 === 0 ? "Fizz Buzz" : n % 3 === 0 ? "Fizz" : n % 5 === 0 ? "Buzz" : n;
//       }).join(",");
 

ANSWER = fizzBuzz(1, 30);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 */

// Solution 1
let playerSum = 4 + 10 + 3;
let dealerSum = 3 + 6 + 11;

function printSum(playerSum, dealerSum) {
    return `Player: ${playerSum}, Dealer: ${dealerSum}`;
}

ANSWER = printSum(playerSum, dealerSum);


// Solution 2 - Överkurs
// const printSum = (p, d) =>
//   `Player: ${p.reduce((a, b) => a + b)}, Dealer: ${d.reduce((a, b) => a + b)}`;
 
// ANSWER = printSum([4, 10, 3], [3, 6, 11]);

// Solution 3 - Öerkurs
// function printSum(playerHand, dealerHand) {
//     if (typeof playerHand != 'object' || typeof dealerHand != 'object') {
//       return 'You must input playerHand and dealerHand as arrays.';
//     }
 
//     let playerSum = 0;
//     let dealerSum = 0;
 
//     playerHand.forEach(card => (playerSum += card));
//     dealerHand.forEach(card => (dealerSum += card));
 
//     return `Player: ${playerSum}, Dealer: ${dealerSum}`;
//   }
 
//   ANSWER = printSum([4, 10, 3], [3, 6, 11]);
 

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (3 points)
 */


// Solution 1
function printResult(playerSum, dealerSum) {
	let playerResult = '';
	if (playerSum === 21) {
		playerResult = 'black jack';
	} else if (playerSum < 21) {
		playerResult = 'safe';
	} else if (playerSum > 21) {
		playerResult = 'busted';
	}

	let dealerResult = '';
	if (dealerSum === 21) {
		dealerResult = 'black jack';
	} else if (dealerSum < 21 && dealerSum >= 17) {
		dealerResult = 'stop';
	} else if (dealerSum < 17) {
		dealerResult = 'safe';
	} else if (dealerSum > 21) {
		dealerResult = 'busted';
	}

	return 'Player: ' + playerResult + ', Dealer: ' + dealerResult;
}
ANSWER = printResult(playerSum, dealerSum);


 

// Solution 2 
// function printResult(playerSum, dealerSum) {
 
//     const playerStatus = (sum) => {
//         if (sum === 21)   return "black jack";
//         if (sum < 21)     return "safe";
//         if (sum > 21)     return "busted";
//     }
 
//     const dealerStatus = (sum) => {
//         if (sum === 21)   return "black jack";
//         if (sum < 17)     return "safe";
//         if (sum >= 17 && sum < 21) return "stop";
//         if (sum > 21)     return "busted";
//     }
 
    // return `Player: ${playerStatus(playerSum)}, Dealer: ${dealerStatus(dealerSum)}`;
// }
 

// ANSWER = printResult(playerSum, dealerSum);


// Solution 3
// function printResult(player, dealer){
 
//     var verdict = "";
 
//     function checkCards(cardSum,role){
 
//         if(cardSum == 21){
//             verdict = "black jack";
//         }else if(cardSum < 17 || (role == "player" && (cardSum >= 17 && cardSum < 21))){
//             verdict = "safe";
//         }
//         else if(role == "dealer" && (cardSum >= 17 && cardSum < 21)){
//             verdict = "stop";
//         }else{
//             verdict = "busted";
//         }
 
//         return verdict;
 
//     }
 
//     let playerVerdict = checkCards(player,"player");
//     let dealerVerdict = checkCards(dealer,"dealer");
 
//     return `Player: ${playerVerdict}, Dealer: ${dealerVerdict}`;
 
// }
 
// ANSWER = printResult(playerSum,dealerSum);


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (3 points)
 */
function calculateInterestRate(startMoney, years, interestRate) {
    let endMoney = startMoney * Math.pow(interestRate/100 + 1, years);
    return parseFloat(endMoney.toFixed(4));
}
 
ANSWER = calculateInterestRate(745, 31, 5);



// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
