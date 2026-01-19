/*
 * Element selectors
 */

console.log('******************** getElementById ****************************');

let myTitle = document.getElementById('title')
console.log(myTitle);

console.log(myTitle.innerHTML);
myTitle.innerHTML = "Some dummy title";
console.log(myTitle.innerHTML);






console.log('******************** getElementsByClassName ****************************');
// getElementsByClassName
// returns HTMLCollection
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let boxes = document.getElementsByClassName('box')
console.log(boxes);
console.log(boxes.length);

for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
    boxes[i].style.margin = "5px"
    // use camelCase in JS, instead of kebab-case
    boxes[i].style.backgroundColor = "skyblue"
}






console.log('******************** getElementsByTagName ****************************');
// getElementsByTagName
// returns HTMLCollection
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection


let dives = document.getElementsByTagName('div')
console.log(dives);
console.log(dives.length);

for (let i = 0; i < dives.length; i++) {
    console.log(dives[i]);
    // dives[i].innerHTML = "Hej"
    dives[i].style.borderRadius = "50%"
}


console.log('******************** querySelector ****************************');
let box = document.querySelector('main#content > section.box')
console.log(box);
box.style.border = "4px solid orange" 


console.log('******************** querySelectorAll ****************************');
// querySelectorAll
// returns NodeList
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

boxes = document.querySelectorAll('main#content > section.box')
console.log(boxes);


// Either work with seperate elements using index
boxes[0].style.border = "4px solid orange" 
boxes[0].style.backgroundColor = "beige";

// OR loop through every element like such
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.border = "4px solid orange";
    boxes[i].style.backgroundColor = "beige";
}






/*
 * Handle element attributes
 */
console.log('******************** HTML attributes ****************************');

let myLink = document.getElementById('link')
console.log(myLink);

console.log(myLink.href);
myLink.href = "###"
console.log(myLink.href);

// May change/add attributes by setAttribute(atrribute, vale)
myLink.setAttribute('target', '_blank')
// Same as
// myLink.target = '_blank'







/*
 * Handle events
 * Some events: click | mouseover | keypress
 */
console.log('******************** Handle events ****************************');

// Callback function, is when a function is sent into another function throguh parameters
// May declare events here or in HTML
// Example 1
myLink.addEventListener('click', handleClickLink)

function handleClickLink(event) {
    console.log(event); // A toolbox filled with built in functions related to the event/element

    // The default behavior of the chosen element,
	// in this case the chosen element is a link,
	// is reload/redirect the page
	// preventDefault() prevents the link from reloading/redirecting the page
    event.preventDefault()

    alert('You clicked the link')
}


// Example 2
boxes = document.getElementsByClassName('box');
console.log(boxes);
boxes[2].addEventListener('mouseover', function(e) {
    // Both "e.target" and "this" is the element associated with the event, meaning boxes[2]
    // Note "this" does NOT work with arrow functions

    // These 2 solution is better because its more selfcontained, not depending on external variables
    this.innerHTML = "Third circle"
    e.target.innerHTML = "Third circle"

    // May create a bug, much better to make the function NOT depended on externa variables
    // boxes[2].innerHTML = "Third circle"; 
})


/*
 * Navigation
 */
console.log('******************** Navigation ****************************');
let main = document.getElementById('content')
console.log(main)
console.log(main.children)
console.log(main.children[5])
console.log(main.firstElementChild)
console.log(main.lastElementChild)
console.log(main.parentNode)
console.log(main.previousElementSibling)
console.log(main.nextElementSibling)

// target the first blue circle
main.firstElementChild.innerHTML = "First element child"
// target the link text, add :)
main.lastElementChild.firstElementChild.innerHTML += ' :)'
// target fifth blue circle, add some text
main.children[4].innerHTML = "Fifth circle";
// target the H1, add a :)
main.previousElementSibling.innerHTML += ' :)'


/*
 * Add/Create/Delete element
 */
console.log('******************** Add/Create/Delete element ****************************');

main = document.getElementById('content')

// Example 1
// for (let i = 1; i <= 5; i++) {
//     let newBox = document.createElement('section')
//     newBox.innerHTML = `Box ${i}`
//     newBox.className = "box";
//     newBox.style.margin = "5px";
//     console.log(newBox);

//     newBox.addEventListener('click', (e) => {
//         e.target.remove()
//     })
    
//     main.append(newBox)
// }


// Example 2 - More similar to how you would code in React
for (let i = 1; i <= 5; i++) {
    let newBox = `
        <section class="box" onclick="removeOnClick(event)" style="margin: 5px">
            Box ${i}
        </section>
    `    
    main.innerHTML += newBox
}

function removeOnClick(e) {
    e.target.remove()
}









console.log('******************** Lab 4: DOM and Events ****************************');


/*
 * Lab 4: DOM and Events
 */

/* 
/* 
 * Exercise 1
 */

myTitle = document.getElementById('title')
myTitle.innerHTML = 'Learning how to handle JS DOM and events';



/* 
 * Exercise 2
 */




/* 
 * Exercise 3
 */





/* 
 * Exercise 4
 */





/* 
 * Exercise 5
 */




/* 
 * Exercise 6
 */




/* 
 * Exercise 7
 */




/* 
 * Exercise 8
 */




/* 
 * Exercise 9
 */





/* 
 * Exercise 10
 */

