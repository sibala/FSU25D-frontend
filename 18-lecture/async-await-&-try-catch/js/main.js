// Make an AJAX request with the built in JS object 'fetch'
// fetch() works/retuns a Promise. 
// If the request was successfull, it returns a resolved Promise, otherwise it returns a rejected Promise
// https://codexplained.se/api/lorem_text.php
console.log('############## Fetch makes an AJAX request, that returns a Promise ##########');













fetch('https://codexplained.se/api/lorem_text.php')  // Sending a request to the server. Returns a promise
.then((response) => {                               // Handling the response from the server. Ensuring we have established communication.
    console.log(response);

    // Forces the catch-block for every error, and not just 
    if (response.ok === false) {
        throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
    }    

    // console.log(response.text());
    return response.text();    // Use this when working with Text
    // return response.json(); // Use this when working with JSON. Equivelant to JSON.parse()
})
.then((data) => {                              // Handling the response data
    console.log(data);
    document.getElementById('text').innerHTML = data;
})
.catch((error) => {
    // If one of the then-blocks fails, then then the catch-block handels the error
    console.log(error)
    document.getElementById('text').innerHTML = "Opps got some internal problems. We have just dispatched a group of monkeys to fix the problem for you :)"
})
.finally(() => {
    console.log('Will alwase run at the end, no matter the outcome of the request')
})












/**
 * Demonstrates what throw new Error() is
 */
// throw new Error(`Throwing an Error`);






/**
 * Rewrite the above code with less code and comments
 */





/**
 * Rewrite the above code with async/await AND try/catch
 */










// console.log("fetch is asynchronous, thats why we see this message before the console logs inside of then-blocks")



