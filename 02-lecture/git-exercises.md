## 💾 Git Exercises (Source Control)

### Exercise 1: Initialize Git and Connect to GitHub

**Goal:** Master the fundamental Git workflow (`init`, `add`, `commit`) and connect a local repository to a remote GitHub repository (`remote add`, `push`).

| Step | Action (Instruction) | Command |
| :--- | :--- | :--- |
| 1 | Create a new test folder and navigate to it via the terminal. | `mkdir test-repo` then `cd test-repo` |
| 2 | Initialize Git inside the folder. | `git init` |
| 3 | Create a file named `index.html` in the test folder. | `touch index.html` |
| 4 | Add the text **"v1"** inside `index.html`. | Use `code index.html` or a text editor |
| 5 | Check the status of the repository. | `git status` |
| 6 | Add `index.html` to the Git index (staging area). | `git add index.html` (or `git add .`) |
| 7 | Save the changes in Git (commit). | `git commit -m "First version v1"` |
| 8 | Check the status again. Is the "working directory clean"? | `git status` |
| 9 | Create a new, empty repository on GitHub (via the web interface). | *(External Step)* |
| 10 | Connect your local Git repo with the newly created GitHub repo. | `git remote add origin [YOUR_GITHUB_URL]` |
| 11 | Push your first version to the GitHub repository. | `git push -u origin main` (or `master`) |

---

### Exercise 2: Version Control with Branching

**Goal:** Practice branching (`checkout -b`), merging (`merge`), and maintaining a clean history while keeping the main branch secure. 

| Step | Action (Instruction) | Command |
| :--- | :--- | :--- |
| 12 | Create a new branch named `feature/v2` and switch to it. | `git checkout -b feature/v2` |
| 13 | Add the text **"v2"** (on a new line) inside `index.html`. | Use a text editor |
| 14 | Check status, add, and commit the changes. | `git status`, `git add .`, `git commit -m "Feature: Added version v2"` |
| 15 | Check status: "Working directory clean"? | `git status` |
| 16 | Switch back to the main branch (`master` or `main`). | `git checkout main` |
| 17 | Merge your new branch into the main branch. | `git merge feature/v2` |
| 18 | Check the history to ensure your new version is saved in the main branch. | `git log --oneline` |
| 19 | Push your new version (which now includes v2) to GitHub. Ensure the new code is visible on GitHub. | `git push` |
| 20 | Delete your newly created branch. | `git branch -D feature/v2` |
| 21 | Repeat steps 12-20, adding the text **"v3"** under **"v2"** in your `index.html`. Continue repeating these steps until your `index.html` has at least 5 versions (v1 through v5). | (Repeat cycle for `feature/v3`, `feature/v4`, `feature/v5`) |

> **Note on Merge Conflicts:** If you change code lines that conflict with the version in `main`, a merge conflict may occur. This must be fixed before a merge is completed. This should never happen if you never work directly in `main`, but always work with the code in separate branches.