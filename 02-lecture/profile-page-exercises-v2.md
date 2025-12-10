## 🚀 My Digital Profile Page V2 (Atomic Git Workflow & Advanced CSS)

**Context:** This is a **continuation** of the initial setup. Your files (`index.html`, `css/style.css`, and the Git repository) are already set up, and the initial version has been successfully pushed to GitHub. This exercise focuses on **practicing an atomic Git branching workflow** alongside applying your new HTML/CSS knowledge.

---

### Part 1: Start Branching (Isolate Development. Should be repeated for every new feature/development)

**Goal:** Ensure all new development is done safely on a dedicated feature branch.

1.  **Create the Project Folder (CLI):**
    * Open your terminal (CLI).
    * Navigate to your desired location.
    * Open the project in VS Code:
        ```bash
        code .
        ```
2.  **Ensure you are on the `main` branch:**
    ```bash
    git checkout main
    ```
3.  **Create a New Feature Branch:**
    * Create a new branch called `feature/semantic-update` and switch to it.
    ```bash
    git checkout -b feature/semantic-update
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
### Part 3: **Versioncontroll** (This should be repeted after every completed feature/development)

1.  **Commit and merge to main:**
    * Stage and commit the display flow update.
    ```bash
    git add .
    git commit -m "style: Used display: inline-block for skills list for horizontal flow"
    ```
2.  **Switch Back to Main:**
    ```bash
    git checkout main
    ```
3.  **Merge the Feature Branch:**
    * Integrate all the atomic commits from your feature branch into `main`.
    ```bash
    git merge feature/semantic-update
    ```

4.  **Publish to GitHub:**
    * Push the final, merged version to your remote repository.
    ```bash
    git push
    ```

5.  **Clean Up:**
    * Delete the local feature branch (since the work is complete and merged).
    ```bash
    git branch -D feature/semantic-update
    ```
---


### Part 4: **Advanced Styling** (Box Model and element flow)

**Goal:** Apply the Box Model properties (`padding`, `margin`, `border`) and control element flow (`Display/Flexbox`) using appropriate CSS units.

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