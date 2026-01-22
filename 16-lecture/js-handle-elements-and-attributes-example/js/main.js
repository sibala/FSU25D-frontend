/** 
 * Add and remove elements
 */
let firstLink = document.getElementById('first-link')

// Solution 1 - similar to the React way
firstLink.addEventListener('click', generateBoxes)

function generateBoxes(e) {
	e.preventDefault();
	console.log('hej')

	document.getElementById('first-section').innerHTML += `
		<div class="box">
			<div class="inner-box yellow" onclick="deleteInnerBox1(event)">
				<b>Inner box 1</b>.<br>
				Click to delete inner box 1
			</div>
			<div class="inner-box sky-blue" onclick="deleteOuterBox(event)">
				<b>Inner box 2</b>.<br>
				Click to delete the parent node of this box. Meaning delete the whole box :).			
			</div>
			<div class="inner-box light-green" onclick="deleteLastInnerBox(event)">
				<b>Inner box 3</b>.<br>
				Click to delete the last inner box
			</div>
			<div class="inner-box beige">
				<b>Inner box 4</b>.<br>
				Is at the mercy of inner box 3, if clicked, inner box 4 will perish :(
			</div>
		</div>
	`

	// because innerHTML regenerates exisiting elements, it removes addEventLister of the firstLink
	// Thats why we need to retrieve and add eventListener again on firstLink
	firstLink = document.getElementById('first-link')
	firstLink.addEventListener('click', generateBoxes)
}
function deleteInnerBox1(e) {
	e.target.remove();
}
function deleteOuterBox(e) {
	e.target.parentNode.remove();
}
function deleteLastInnerBox(e) {
	e.target.parentNode.lastElementChild.remove();
}



// Solution 2
// firstLink.addEventListener('click', function(e) {
// 	e.preventDefault();

// 	const outerBox = document.createElement('div')
// 	outerBox.classList.add('box')

// 	const innerBox1 = document.createElement('div')
// 	innerBox1.className = 'inner-box yellow'
// 	innerBox1.innerHTML = `
// 		<b>Inner box 1</b>.<br>
// 		Click to delete inner box 1"
// 	`
// 	innerBox1.addEventListener('click', function(e) {
// 		e.target.remove()
// 	})


// 	const innerBox2 = document.createElement('div')
// 	innerBox2.className = 'inner-box sky-blue'
// 	innerBox2.innerHTML = `
// 		<b>Inner box 2</b>.<br>
// 		Click to delete the parent node of this box. Meaning delete the whole box :).			
// 	`
// 	innerBox2.addEventListener('click', function(e) {
// 		e.target.parentNode.remove();
// 	})
	
// 	const innerBox3 = document.createElement('div')
// 	innerBox3.className = 'inner-box light-green'
// 	innerBox3.innerHTML = `
// 		<b>Inner box 3</b>.<br>
// 		Click to delete the last inner box
// 	`
// 	innerBox3.addEventListener('click', function(e) {
// 		// e.target.nextElementSibling.remove();
// 		e.target.parentNode.lastElementChild.remove()
// 	})

// 	const innerBox4 = document.createElement('div')
// 	innerBox4.className = 'inner-box beige'
// 	innerBox4.innerHTML = `
// 		<b>Inner box 4</b>.<br>
// 			Is at the mercy of inner box 3, if clicked, inner box 4 will perish :(
// 	`

// 	outerBox.append(innerBox1, innerBox2, innerBox3, innerBox4)
// 	document.getElementById('first-section').appendChild(outerBox)
// })


/**
 * Handle attributes 
 */

let secondLink = document.getElementById('second-link');
secondLink.addEventListener('click', function(e) {

	const listItems = document.querySelectorAll('ul li')
	listItems[0].innerHTML = e.target.innerHTML;
	listItems[1].innerHTML = e.target.className;
	listItems[2].innerHTML = e.target.title;
	listItems[3].innerHTML = e.target.target;
})



const inputBtn1 = document.getElementById('change-link-text-btn');
inputBtn1.addEventListener('click', function() {
	// very common to assume that the contents of a inputField is through innerHTML, which is wrong
	// The value in inputFields are retrieved/updated through the attribute .value
	secondLink.innerHTML = document.getElementById('change-link-text-input').value
})

const inputBtn2 = document.getElementById('change-class-btn');
inputBtn2.addEventListener('click', function() {
	secondLink.className = document.getElementById('change-class-input').value
})

const inputBtn3 = document.getElementById('change-title-btn');
inputBtn3.addEventListener('click', function() {
	secondLink.title = document.getElementById('change-title-input').value
})

const inputBtn4 = document.getElementById('change-target-btn');
inputBtn4.addEventListener('click', function() {
	secondLink.target = document.getElementById('change-target-input').value
})








