# 102-Read_023-T
## Git & Version Control Basics  

---

## 1️⃣ What is Version Control?  

**Answer:**  
Version control is a system that keeps track of changes you make to your files and code over time.  
It allows you to save versions, undo mistakes, and work with others without overwriting each other’s work.  

---

### 👨‍🏫 Instructor Notes  

**TELL:** What is Git?  
- It’s a version control system.  
- It lets multiple developers work on the same code.  
- It keeps a history of changes to your files.  
- It gives you the ability to view, apply, and remove those changes.  
- It keeps all your project files in one repository.  
- It makes collaboration possible!  

---

**TELL:** "Version control system" is…  
- A history of everything you do to your files.  
- A record of "states" your files have existed in.  
- A way to organize project files using **repositories** (a repository is simply a collection of files you care about).  
- All of this makes Git highly effective for team collaboration.  
- Git is used to save and back up work, share code, and collaborate on projects.  

---

### ⚠️ Without Version Control

**Does this look familiar** 
- term_paper.docx
- term_paper2.docx
- term_paper2_with_footnotes.docx
- final_term_paper.docx
- term_paper_for_submission.docx
- term_paper_for_submission_for_real.docx


**TELL:** I’m sure some of you are guilty of this!  
💡 Think of version control like **save points in a video game** for your code!

---

## 🧩 Additional Git Concepts — Version Tracking  

**TELL:** Each successive version creates a new snapshot on the timeline of the project.  
Git keeps track of what the file looked like at different points in time.  

**TELL:** When you save without version control, you only ever have the most recent version of the file.  
You can’t go back to an old version unless you manually saved that as a different file.  

**TELL:** Version control lets you have one file — but it remembers what changes were made.  
Git helps us keep track of **where we are** and **where we’ve been.**

Think of each **snapshot (commit)** as a new version of your paper —  
but instead of copying every file, Git only stores the **differences**, making it efficient and fast.

---

## 🗂️ Keeping Track of Commits  

- Each commit (snapshot) has a label that points to it.  
- `HEAD` = “You Are Here.”  
- Each commit has a **message** that describes what you changed.  

**TELL:** Each snapshot, or “commit,” can also have a label that points to it.  
One of these is HEAD, which always points to the current location in your project timeline.  
You can think of **HEAD** as a “You Are Here” marker.  

---

## 🧾 A Summary of Git  

- You use Git to take snapshots of your code over time.  
- Git keeps a complete history of those snapshots.  
- Git has a special label, **HEAD**, meaning “You Are Here.”  
- Each snapshot has a **message** describing what changed.  

**TELL:** A Git repository is a set of points in time, with a history showing where you’ve been.  
Each point (A, B, C, etc.) has a unique **hash** identifier.  
Each commit has a message that describes its purpose.  
The difference between each point shows how your project evolved.

---

## ☁️ GitHub — Your Code, in the Cloud  

**TELL:** GitHub is awesome!  
Let’s explore one of the technologies that allows people from all over the world to collaborate on open-source projects.

### What is GitHub?  
- Not Git — but it works *with* Git.  
- A way to **share code** with others.  
- An online place to **store your code** (backups are important!).  
- It uses Git to help manage your team’s work:  
  - Version tracking  
  - Reviewing changes  
  - Keeping changes separate until ready to merge  

---

**TELL:** Remotes serve as a way of sharing work with other developers.  
GitHub is a **central hub** where you can upload your local work for others to access.  
It includes collaboration tools like pull requests, code reviews, and issues.  

**TELL:** Git is a distributed system — you can share code between computers.  
GitHub acts as the **central source** of truth for your team.  

---

## 💻 Git + GitHub = Awesome  

With Git (version control) and GitHub (online storage), you can:  
- Have many developers work on the same files — without overwriting each other.  
- Keep a detailed history of your project’s evolution.  
- Work on code locally and sync it with GitHub.  

**TELL:** Git and GitHub let you manage projects for teams *or* just yourself.  
You can keep a detailed timeline, control what gets merged,  
and easily back up your work both locally and online.

---

## 2️⃣ What is Cloning in Git?  

**Answer:**  
Cloning means copying a GitHub repository from the internet to your own computer.  
This lets you work on the project locally.  

**Example Command:**  
git clone https://github.com/username/repository-name.git  

**TELL:** Git uses “commits” to represent each version of your files —  
similar to “Save As…” but much more powerful!

---

## 3️⃣ What is the Command to Track and Stage Files?  

**Answer:**  
Use this command to tell Git which files you want to save or “track.”  
git add .  

**Explanation:**  
“git add .” stages all changed files in your folder.  
You can also stage a single file like this:  
git add index.html  

---

## 4️⃣ What is the Command to Take a Snapshot of Your Changed Files?  

**Answer:**  
To save a “snapshot” of your staged changes, use:  
git commit -m "Your message here"  

**Explanation:**  
A commit saves your progress.  
The message should describe what you changed — for example:  
git commit -m "Added navigation bar and images"  

---

## 5️⃣ What is the Command to Send Your Changed Files to GitHub?  

**Answer:**  
Use this command to upload (push) your changes to GitHub:  
git push origin main  

**Explanation:**  
- push = send changes online  
- origin = the name of your GitHub connection  
- main = your main branch (the primary version of your code)  

---

## 🔁 Quick Summary  

| **Action** | **Command** | **Purpose** |
|-------------|--------------|-------------|
| Track files | git add . | Stage your changed files |
| Save snapshot | git commit -m "message" | Record your changes |
| Upload to GitHub | git push origin main | Send commits online |

---

## 💬 Key Takeaway  

Version control helps you organize your work, avoid mistakes, and collaborate like a professional developer.  
Each command plays a role in the **A–C–P Cycle** — **Add → Commit → Push**.

---

## 🧠 Summary of Git Concepts  

| **Concept** | **Description** |
|--------------|----------------|
| Version Control | Tracks changes in your project. |
| Repository | A project folder that Git manages. |
| Commit | A snapshot of your project at a point in time. |
| HEAD | A pointer showing “You Are Here” in your project history. |
| Remote | A shared online copy of your repository (like GitHub). |
| Push | Sends your commits to the remote repository. |
| Clone | Makes a local copy of a remote repository. |

---

**TELL:** Always remember —  
**Git = Version Control**,  
**GitHub = Sharing Your Code.**  
Together, they make teamwork and backups simple, powerful, and fun!  

---
