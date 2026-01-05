# Safe Build Guide

This guide outlines the safest way to build the project without losing images or corrupting the codebase.

## Pre-Build Checklist

### 1. Commit All Changes First
**ALWAYS commit before building to ensure you can recover if something goes wrong:**

```bash
# Check what needs to be committed
git status

# Add all changes (including the reference document)
git add .

# Commit with a descriptive message
git commit -m "Add reference documentation and latest changes"
```

### 2. Verify Images Are Committed
**Make sure all images are tracked in git:**

```bash
# Check if images are committed
git ls-files "public/image/settle app/" "public/image/installer app/"

# If images are missing, add them:
git add "public/image/settle app/" "public/image/installer app/"
git commit -m "Add image assets"
```

### 3. Create a Backup Branch (Optional but Recommended)
```bash
# Create a backup branch from current state
git branch backup-before-build-$(date +%Y%m%d)

# Or create a tag
git tag backup-$(date +%Y%m%d)
```

## Safe Build Process

### Step 1: Clear Caches
**Clear all build caches to avoid stale state issues:**

```bash
# Remove Next.js build cache
rm -rf .next

# Remove node modules cache (if needed)
rm -rf node_modules/.cache

# Remove Turbo cache (if using)
rm -rf .turbo

# Remove SWC cache
rm -rf .swc
```

### Step 2: Clean Install (If Needed)
**Only if you suspect dependency issues:**

```bash
# Remove node_modules
rm -rf node_modules

# Clean install
npm install
```

### Step 3: Build the Project
**Build in stages to catch errors early:**

```bash
# First, try a production build (this is the safest test)
npm run build

# If build succeeds, you can start dev server
npm run dev
```

### Step 4: Verify Build Success
**Check for errors:**

- Look for any error messages in the terminal
- Check that all images are loading (no 404 errors)
- Verify the build output directory `.next` was created

## If Build Fails

### Option 1: Restore from Git
```bash
# Discard all uncommitted changes
git restore .

# Or restore specific files
git restore app/project-overview/[slug]/page.tsx

# Clear caches and try again
rm -rf .next node_modules/.cache
npm run build
```

### Option 2: Reset to Last Good Commit
```bash
# See recent commits
git log --oneline -5

# Reset to a specific commit (replace COMMIT_HASH)
git reset --hard COMMIT_HASH

# Clear caches
rm -rf .next node_modules/.cache

# Rebuild
npm run build
```

### Option 3: Switch to Backup Branch
```bash
# List branches
git branch

# Switch to backup
git checkout backup-before-build-YYYYMMDD

# Or restore from tag
git checkout backup-YYYYMMDD
```

## Common Build Issues and Solutions

### Issue: "Cannot find module" errors
**Solution:**
```bash
rm -rf .next node_modules/.cache
npm run build
```

### Issue: Images not loading (404 errors)
**Solution:**
1. Verify images exist: `ls -la "public/image/settle app/"`
2. Check image paths in code match actual filenames
3. Ensure images are committed: `git ls-files "public/image/"`
4. Clear cache and rebuild

### Issue: "Middleware manifest" errors
**Solution:**
```bash
# Create minimal middleware.ts if missing
# (This was needed in the past, may not be needed now)
rm -rf .next
npm run build
```

### Issue: Port already in use
**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

## Best Practices

### 1. Always Commit Before Major Changes
- Commit before building
- Commit before clearing caches
- Commit before switching branches

### 2. Use Feature Branches
```bash
# Create a new branch for experiments
git checkout -b experiment-branch

# If it works, merge it
git checkout branch1
git merge experiment-branch

# If it fails, just switch back
git checkout branch1
```

### 3. Regular Backups
```bash
# Create a backup tag weekly
git tag backup-week-$(date +%W)

# Push tags to remote (if using remote repo)
git push origin --tags
```

### 4. Test Builds Locally First
- Always test `npm run build` before deploying
- Check for console errors
- Verify all images load correctly

## Quick Safe Build Command

**One-liner for safe build (after committing):**

```bash
git add . && git commit -m "Pre-build commit" && rm -rf .next node_modules/.cache && npm run build
```

## Recovery Commands

### If Everything Breaks:
```bash
# 1. See what changed
git status
git diff

# 2. Restore everything
git restore .

# 3. Clear caches
rm -rf .next node_modules/.cache .turbo .swc

# 4. Rebuild
npm run build
```

### If Images Are Missing:
```bash
# 1. Check if they're in git
git ls-files "public/image/"

# 2. If not, check git history
git log --all --full-history -- "public/image/settle app/"

# 3. Restore from git
git checkout HEAD -- "public/image/settle app/"

# 4. Or restore from specific commit
git checkout COMMIT_HASH -- "public/image/settle app/"
```

## Current Safe State

**As of now, you have:**
- ✅ All images committed (commit `96d1e47`)
- ✅ Latest code changes committed (commit `187abb5`)
- ✅ Reference document created (`MERCHANT_APP_IMAGE_REFERENCE.md`)

**Next steps:**
1. Commit the reference document
2. Clear caches
3. Build

```bash
# Safe build sequence:
git add MERCHANT_APP_IMAGE_REFERENCE.md
git commit -m "Add image and styling reference documentation"
rm -rf .next node_modules/.cache
npm run build
```

