// Solution 1
// const bPostLink = document.getElementById('blog-posts')

 
// bPostLink.addEventListener('click', (event) => {
//     event.preventDefault()
 
//     fetch('https://codexplained.se/api/simple_json.php')
//         .then(response => response.json())
//         .then(data => {
//             const postsHTML = data.blog_posts.map(post => {
//                 return `
//                 <article>
//                     <h2>${post.title}</h2>
//                     <p>${post.date}</p>
//                     <p>${post.text}</p>
//                 </article>
//             `
//             }).join('')
 
//             divContent.innerHTML = postsHTML
//         })
// })

// const authorLink = document.getElementById('author')
// const aboutLink = document.getElementById('about')
// const divContent = document.getElementById('content')

// authorLink.addEventListener('click', (event) => {
//     event.preventDefault()
 
//     fetch('https://codexplained.se/api/simple_json.php')
//         .then(response => response.json())
//         .then(data => {
//             divContent.innerHTML = `<h1>Author</h1><p>${data.author}</p>`
//         })
// })
// aboutLink.addEventListener('click', (event) => {
//     event.preventDefault()
 
//     fetch('https://codexplained.se/api/simple_json.php')
//         .then(response => response.json())
//         .then(data => {
 
//             divContent.innerHTML = `<h1>About</h1><p>${data.about}</p>`
//         })
// })



// Solution 2 - refactor above code to single fetch function
const links = document.querySelectorAll('nav a');
const content = document.getElementById('content');
// console.log(links)
 
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        loadPage(link.dataset.page);
    });
});


async function loadPage(page) {
    console.log(page)

    try {
        const response = await fetch('https://codexplained.se/api/simple_json.php')
        if (!response.ok) {
            throw new Error('Error: ' + response.statusText)
        }

        const data = await response.json()
        console.log(data[page]);

        content.innerHTML = `
            <h1>${capitalizeFirstLetter(page)}</h1>
            <p>${data[page]}</p>
        `
    } catch(error) {
        console.log(error)
    }
}
 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); // A + uthor
}