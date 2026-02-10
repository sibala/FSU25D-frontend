import { fetchBlogPosts } from './api.js';


async function loadBlogPosts() {
    const posts = await fetchBlogPosts();
    renderPosts(posts);
}
loadBlogPosts();


// Prompt 2: Generate a loop that goes through the data and creates a new article for each blog post. Work with the params title, date and text.
// Prompt 3: Generate with a loop, the HTML for posts with title, date and text, inlcude the HTML ass innerHTML in main a loop that goes through the data and creates a new article for each blog post. Work with the params title, date and text.
// Prompt 4: Make the post title a link to post.html, and send the id as a querystring
// Prompt 5: Refactor the code to use a function that creates a new article for each blog post.
function renderPosts(posts) {
    const main = document.querySelector('main');
    posts.forEach(post => {
        main.innerHTML += `
            <article class="blog-post">
                <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
                <p>${post.date}</p>
                <p>${post.text}</p>
            </article>
        `;
    });
}