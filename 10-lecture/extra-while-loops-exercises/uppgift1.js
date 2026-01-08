/* 
Titta på koden nedanför och svara på följande frågor:
1. Vad finns det för likheter mellan en while-loop och en if-sats?
2. Hur skiljer sig en while-loop från en if-sats?
3. Ta bort prompten inne i whileloopen, vad händer? Varför?
*/


var pin = "1234";

var input = prompt("Welcome to the bank, please enter your pin:");

while (input != pin)
{
  alert("WRONG PIN, TRY AGAIN");
  input = prompt("Enter your pin");
}

alert("Pin accepted");