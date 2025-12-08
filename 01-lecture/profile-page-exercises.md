## 📄 My Digital Profile Page: Exercise Instructions

This exercise of basic personal profile page combines the use of:
- **Command Line Interface (CLI)**
- VS code 
- fundamentals in **HTML/CSS**

---

### Part 1: Set Up the Project via CLI and VS Code

**Goal:** Use CLI commands to create the project structure and open the project in VS Code.

1.  **Create the Project Folder:**
    * Open your terminal (CLI).
    * Navigate to your desired location (e.g., your main directory for all your projects).
    * Create a new folder for the project and move into it:
        ```bash
        mkdir my-profile
        cd my-profile
        ```
    * Create the necessary files and folders:
        ```bash
        mkdir css img
        touch index.html css/style.css
        ```
    * Open the project in VS Code:
        ```bash
        code .
        ```

2.  **Add an Image:**
    * Place any profile picture or placeholder image inside the **`img`** folder (e.g., `img/profile.jpg`).

---

### Part 2: Structure the Content with HTML

**Goal:** Use HTML tags, headings, lists, and linking to structure the content.

1.  **Basic Structure (`index.html`):**
    * Add the basic HTML5 boilerplate (`<!DOCTYPE html>`, `<html>`, etc.).
    * Link your CSS file in the `<head>`: `<link rel="stylesheet" href="css/style.css">`.
2.  **Main Content (Body):**
    * **Wrap the entire page content** in a `<div>` with the **ID** `id="profile-page"`.
    * **Header:** Use a **`<header>`** tag at the top. Inside it, place an `<h1>` with your name.
    * **Image and Intro:**
        * Place your profile image using the `<img>` tag and give it the **CLASS** `.profile-image`.
        * Write a short "About Me" paragraph using a `<p>` tag.
    * **CV Sections:**
        * Divide your CV into sections (e.g., "Experience" and "Education") using `<h2>` headings.
        * Wrap each section in a **`<div>`** and give it the **CLASS** `.cv-section`.
    * **Lists:**
        * Use an **`<ol>`** (ordered list) for your **Education** steps.
        * Use a **`<ul>`** (unordered list) for your **Skills** (e.g., "HTML", "CSS", "JavaScript").
    * **Links:**
        * Add a link (`<a>`) to your LinkedIn or GitHub profile. Make this link open in a new tab (`target="_blank"`).

---

### Part 3: Style with CSS (Specificity & Selectors)

**Goal:** Use CSS rules to format the page layout, colors, and text, focusing on different selector types.

1.  **Basic Styling (`css/style.css`):**
    * Apply a `background-color` to the **`body`** tag (Type Selector).
2.  **Layout with ID:**
    * Use the **ID selector** `#profile-page` to define the main content area. Set its width (e.g., `width: 800px;`) and center it (`margin: auto;`).
3.  **Consistent Styling with Class:**
    * Use the **Class selector** `.cv-section` to give all experience and education sections a consistent `border` and some `padding`.
    * Use the class `.profile-image` to give the image rounded corners (`border-radius: 50%;`).
4.  **Targeting Specific Elements:**
    * Target **only** the list items inside the **Unordered List (`<ul>`)** and set their color to green (using the **Combinator Selector** `ul li`).
5.  **Pseudo-Class:**
    * Add a **`:hover`** state to all links (`a:hover`) so that their text color changes when the mouse hovers over them.

---

### Part 4: Version Control with Git & GitHub (if we have time to cover it today)

**Goal:** Save the work using commits and push it to GitHub.
