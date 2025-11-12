# 102-Read_02-T

A quick reference on key text editor features, terminal commands, and a sample command-line workflow.

---

## 🖊️ 1️⃣ Features to Look for in a Text Editor

### 🔹 1. Syntax Highlighting
Colors your code to improve readability and help you catch errors quickly.

### 🔹 2. Code Completion
Suggests or auto-completes code as you type, speeding up development.

### 🔹 3. Extensions/Plugins
Lets you add new tools or features like linters, formatters, or themes.

### 🔹 4. User-Friendly Interface
Makes the editor easy to navigate, customize, and use effectively.

---

## 💻 2️⃣ Common Terminal Commands

### 📍 `pwd` — Print Working Directory
Displays the current folder you're working in.

### 📁 `ls` — List
Shows all files and folders in the current directory.

### 🔄 `cd` — Change Directory
Navigates between folders.

### 📂 `mkdir` — Make Directory
Creates a new folder.

### 📄 `touch` — Create File
Generates a new, empty file.

---

## 🧪 3️⃣ Command-Line Scenario Explained

bash
cd projects
mkdir new-project
touch new-project/newfile.md
cd ..
ls projects/new-project

## 🔄 Step-by-Step Breakdown:

*cd projects*
➤ Moves into the **projects folder**.

*mkdir new-project*
➤ Creates a **new folder** called new-project inside projects.

*touch new-project/newfile.md*
➤ Creates an empty file named `newfile.md` inside new-project.

*cd ..*
➤ Moves back up to the parent folder.

*ls projects/new-project*
➤ Lists the contents of new-project, showing the file `newfile.md`.

✅ **Final Result:**

You're now back in the parent directory. Inside projects/new-project, you'll find one file: `newfile.md`.