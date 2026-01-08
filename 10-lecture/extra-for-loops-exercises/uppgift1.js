/*
När vi använder while-loopar kan vi få den att gå ett exakt antal gånger. Detta är dock inte optimalt då en while körs så länge ett påstående är sant och för detta har vi istället for-loopen.

For-loopar är bäst när vi i förväg vet hur många gånger vi vill göra något

Kör och observera koden nedan och besvara sedan följande frågor:
1. Vad gör i = i + 1? Vad händer dom du tar bort den?
2. Vad gör i = 1? Vad händer om du tar bort den.
3. Gör så att loopen körs 10 gånger istället för 5
4. Gör så att loopen börjar på 2 och ökar med 2 för varje iteration
*/

var message = prompt("Skriv in ett meddelande så kommer jag att upprepa det 5 gånger i konsollen");


for(var i = 1; i <= 5; i = i + 1)
{
 console.log((i) + ". " + message);
}