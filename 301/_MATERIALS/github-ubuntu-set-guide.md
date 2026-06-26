# Install Git + Connect Ubuntu (WSL) to GitHub

## 🎯 Goal
By the end, you will:
- Install Git on Windows and Ubuntu (WSL)
- Set up your identity
- Connect to GitHub
- Be ready to clone and push code

---

## ✅ PART 1 — Install Git on Windows (IMPORTANT)

### 1. Download Git
Go to: https://git-scm.com/install/windows  
Click **Download for Windows**

### 2. Run the installer
- Double-click the downloaded file
- Click **Next** through most steps
- Leave defaults (Git Credential Manager)

---

## ✅ PART 2 — Open Ubuntu (WSL)

1. Open **Ubuntu** from Start Menu  
2. You should see:
```
username@computer:~$
```

---

## ✅ PART 3 — Install Git in Ubuntu

Run:
```
sudo apt update
sudo apt install git
```

---

## ✅ PART 4 — Check Git Installed

```
git --version
```

---

## ✅ PART 5 — Set Your Git Identity

```
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```
### NOTE: 
- **replace what is inside the quotes with your info, but keeep the quotes**
---

## ✅ PART 6 — Connect to GitHub

### Clone a repo:
```
git clone https://github.com/yourusername/your-repo.git
```

Enter your GitHub credentials when prompted.

---

## ✅ PART 7 — Test It Works

```
cd your-repo
touch test.txt
git add .
git commit -m "test commit"
git push
```

---

## 💡 Tips

### File Paths
Windows:
```
C:\Users\YourName
```

Ubuntu:
```
/home/yourname
```

Access Windows files:
```
cd /mnt/c/Users/YourName
```

---

## 🚨 Common Errors

### git: command not found
```
sudo apt install git
```

### Login issues
Use GitHub Personal Access Token instead of password

---

## ✅ Final Checklist

- Git installed on Windows  
- Git installed in Ubuntu  
- Name + email set  
- Repo cloned  
- Push works  

