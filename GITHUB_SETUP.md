# GitHub Repository Setup Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com and **sign up** (or **log in** if you already have an account)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `mavinder-website` (or any name you like)
4. Set it to **Public** (free for public repos)
5. **DO NOT** check "Add a README file" (we already have files)
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these commands:

```bash
cd /Users/racit/Desktop/mavinder-website
git remote add origin https://github.com/YOUR_USERNAME/mavinder-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Connect Netlify to GitHub

1. Go to https://www.netlify.com
2. Sign up for free (or log in)
3. Click **"Add new site"** → **"Import an existing project"**
4. Click **"Deploy with GitHub"**
5. Authorize Netlify to access your GitHub
6. Select your `mavinder-website` repository
7. Click **"Deploy site"**

**That's it!** Your site will be live in about 30 seconds! 🚀

## Future Updates (After Setup)

Whenever you make changes:

```bash
cd /Users/racit/Desktop/mavinder-website
git add .
git commit -m "Your update description"
git push
```

Netlify will **automatically** update your live site within 30 seconds! ✨

