import { fetchBlogPost } from './api.js';

async function loadPost() {
    const post = await fetchBlogPost();
    renderPost(post);
}
loadPost();

// Prompt 2: Generate the HTML for the post with image_url, date, title, text and tags include the HTML as innerHTML in article element
// Prompt 3: make every tag wrapeed with a span with class tag, and include the HTML as innerHTML in article element
function renderPost(data) {
    const article = document.querySelector('#blog-post');
    article.innerHTML += `
        <img src="${data.image_url}" alt="${data.title}">
        <h1>${data.title}</h1>
        <p><time datetime="${data.date}">${data.date}</time></p>
        <p>${data.text}</p>
        <p class="tags">Tags: ${data.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</p>
    `;
}