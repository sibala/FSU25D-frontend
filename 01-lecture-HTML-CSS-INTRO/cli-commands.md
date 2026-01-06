# 💻 CLI Commands

| Command | Full Name / Function | Description |
| :--- | :--- | :--- |
| **sudo** | Super User Do | Executes a command with **administrator** (root) privileges. |
| **pwd** | Print Working Directory | Shows the **full path** to the current directory (folder) you are in. |
| **cd** | Change Directory | Used to **switch** to a different directory (folder). |
| **ls** | List | Displays a **list of files and directories** in the current directory. |
| **mkdir** | Make Directory | Used to **create a new directory** (folder). |
| **touch** | | **Creates a file**. |
| **rm -rf** | Remove (recursive, force) | **Permanently deletes** files and directories without asking for confirmation. (Use with caution!) |
| **mv** | Move | Used to **move** or **rename** files and directories. |
| **cat** | Concatenate (or Catalog) | **Prints the content** of a file to the terminal screen. |
| **clear** | | **Clears the terminal** by removing all text from the screen (visual only). |
| **Ctrl + C** | | **Aborts/stops** the current process running in the CLI. |
| **code** | | Command to **open a specific file in VS Code** (e.g., `code test.txt`). Running `code .` opens the entire current folder in VS Code. |

---

### 📝 Vim Intro – Get familiar just enough to know how to escape it.

It's crucial to know how to exit VIM, just in case you find yourself stuck in the editor mode after accidentally invoking it.

| Action | Command/Key | Description |
| :--- | :--- | :--- |
| **To open a file with vim:** | `vim "filename"` | Opens the specified file. |
| **To edit a file (Insert Mode):** | Press **"i"** | Enters **Insert Mode**, allowing you to type and edit the file content. |
| **To exit Insert Mode:** | Press **"esc"** | Returns to **Normal Mode** (Command Mode). |
| **To save and close the file:** | `:wq` | While in Normal Mode, types `:wq` (**w**rite and **q**uit) and press Enter. |