# Push Your Code to GitHub

## Your Repository URL:
`https://github.com/Adarshh99/Inline-art.git`

## Steps to Push:

### 1. Set Remote (if not already set):
```bash
cd /Users/racit/Desktop/mavinder-website
git remote add origin https://github.com/Adarshh99/Inline-art.git
```

### 2. Push Code:
```bash
git push -u origin main
```

**If you get authentication error:**

### Option A: Use Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `website-deploy`
4. Select scopes: ✅ `repo` (check the repo checkbox)
5. Click "Generate token"
6. **Copy the token** (you'll only see it once!)

When pushing, it will ask for:
- Username: `Adarshh99`
- Password: **Paste your token here** (not your GitHub password!)

### Option B: Use GitHub CLI (Easier)
```bash
# Install GitHub CLI if not installed
brew install gh

# Login
gh auth login

# Then push
git push -u origin main
```

### Option C: Verify Repository Name
Please verify:
1. Go to https://github.com/Adarshh99
2. Check if repository `Inline-art` exists
3. Check if it's spelled exactly: `Inline-art` (case-sensitive)

**Note:** Make sure the repository is **Public** or you have access to it!

