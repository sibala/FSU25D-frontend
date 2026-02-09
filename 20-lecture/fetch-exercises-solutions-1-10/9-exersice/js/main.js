const links = document.querySelectorAll('nav a');
const contentElement = document.getElementById('content');
 
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
        
        contentElement.innerHTML = getPageContent(data, page)
    } catch(error) {
        console.log(error)
    }
}




function getPageContent(data, page) {
    let contentHTML = ""
    switch(page) {
        case 'blog_posts':
            contentHTML =  data[page].map(post => (
                `<article>
                    <h2>${post.title}</h2>
                    <p>${post.date}</p>
                    <p>${post.text}</p>
                    <p>Tags: ${post.tags.join(', ')}</p>
                </article>`
                )
            ).join('')  
            
            break; 
        default:
            contentHTML = data[page]
    }

    return `
        <h1>${getPageTitle(page)}</h1>
        <p>${contentHTML}</p>
    `
}


function getPageTitle(page) {
    switch(page) {
        case 'blog_posts':
            return "Blog posts"
        default:
            return capitalizeFirstLetter(page)
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); // A + uthor
}