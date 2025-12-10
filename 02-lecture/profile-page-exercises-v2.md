## 🚀 My Digital Profile Page (Advanced Styling & Branching)

This exercise combines CLI usage, foundational HTML/CSS knowledge (including the Box Model and Semantics), and a basic Git branching workflow.

---

### Part 1: Set Up the Project (CLI & Initial Commit)

**Goal:** Create the basic project structure and establish version control baseline.

1.  **Create the Project Folder (CLI):**
    * Open your terminal (CLI).
    * Navigate to your desired location.
    * Create a new folder and move into it:
        ```bash
        mkdir my-profile
        cd my-profile
        ```
    * Create necessary files and folders:
        ```bash
        mkdir css img
        touch index.html css/style.css
        ```
    * Open the project in VS Code:
        ```bash
        code .
        ```
2.  **Add an Image:**
    * Place your profile picture (or placeholder) inside the **`img`** folder (e.g., `img/profile.jpg`).
3.  **Initial Git Commit:**
    * Initialize the Git repository:
        ```bash
        git init
        ```
    * Stage and commit the empty files:
        ```bash
        git add .
        git commit -m "feat: Initial project structure setup"
        ```

---

### Part 2: Structure the Content with **Semantic HTML**

**Goal:** Use semantic HTML5 tags for layout and structure, moving away from generic `<div>` tags.

1.  **Basic Structure (`index.html`):**
    * Add the HTML5 boilerplate and link to `css/style.css`.
    * **Replace the outer `div`:** Instead of `id="profile-page"`, wrap the main content in a **`<main>`** tag.
2.  **Semantic Layout:**
    * **Header:** Use the **`<header>`** tag to contain your `<h1>` name and a short bio.
    * **Navigation:** Add a **`<nav>`** tag containing links (e.g., "Experience," "Skills") that link to the respective sections below.
    * **CV Sections:**
        * Replace the generic `div` with the **`.cv-section`** class with the **`<section>`** tag (for major content blocks) or **`<article>`** tag (for individual experience/education items).
        * Use `<h2>` for section titles.
    * **Footer:** Add a **`<footer>`** tag at the very bottom for copyright information.

---

### Part 3: **Advanced Styling** (Box Model & Display)

**Goal:** Apply the Box Model properties (`padding`, `margin`, `border`) and control element flow (`display`) using appropriate CSS units.

1.  **Centering and Width (Box Model):**
    * In `css/style.css`, target the main content area (the **`<main>`** tag).
    * **Width & Units:** Set its `width` using a relative unit, like `80%` or `50rem`.
    * **Margin:** Use **`margin: 2rem auto;`** to center the entire profile page horizontally and provide space above/below.
2.  **Styling the Sections (Box Model):**
    * Target the **`.cv-section`** class.
    * **Borders:** Add a subtle `border` (e.g., `1px solid #ccc;`).
    * **Padding:** Use **`padding: 1.5rem;`** inside the sections to push content away from the border.
    * **Spacing:** Use **`margin-bottom: 2rem;`** between sections to clearly separate them.
3.  **Controlling Element Flow (`display`):**
    * Target the list of skills (inside the `<ul>`).
    * Use the **`li`** selector within that list (e.g., `ul li`).
    * Change the display property to make the skills appear side-by-side, instead of stacking vertically:
        ```css
        /* Make list items flow horizontally */
        ul li {
            display: inline-block; 
            margin-right: 15px; /* Add some space between items */
            /* Add a small border or background for visual distinction */
            border: 1px solid #007bff;
            padding: 5px 10px;
        }
        ```
4.  **Image Sizing:**
    * Ensure the **`.profile-image`** has a fixed size using an absolute unit (e.g., `width: 150px; height: 150px;`).

---

### Part 4: Version Control with **Branching Workflow**

**Goal:** Develop the site using a separate branch, commit changes, and merge the final version into the `main` branch.

1.  **Create a Feature Branch:**
    * Create a new branch called `style-update` and switch to it.
        ```bash
        git checkout -b style-update
        ```
2.  **Develop and Commit (Iteratively):**
    * Complete all the HTML structure updates (Part 2).
    * **Commit 1 (Structure):** Stage and commit these changes:
        ```bash
        git add .
        git commit -m "feat: Applied semantic HTML structure (header, main, section)"
        ```
    * Complete all the CSS styling updates (Part 3).
    * **Commit 2 (Styling):** Stage and commit the final CSS changes:
        ```bash
        git add .
        git commit -m "style: Implemented box model and display properties for layout"
        ```
3.  **Merge the Changes:**
    * Switch back to your main branch:
        ```bash
        git checkout main
        ```
    * Merge the feature branch into `main`:
        ```bash
        git merge style-update
        ```
4.  **Publish to GitHub:**
    * Push the final, merged version to your remote repository on GitHub:
        ```bash
        git push -u origin main
        ```
5.  **Clean Up:**
    * Delete the feature branch locally:
        ```bash
        git branch -D style-update
        ```