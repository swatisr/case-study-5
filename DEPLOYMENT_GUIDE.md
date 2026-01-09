# Deployment Guide - Vercel

## Step 1: Push to GitHub
First, push your changes to GitHub (you'll need to authenticate):
```bash
git push origin branch1
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: Visit https://vercel.com
2. **Sign up/Login**: Use your GitHub account to sign in
3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `case-study-5`
   - Select the branch: `branch1` (or `main` if you merge)
4. **Configure Project**:
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `.` (leave as default)
   - Build Command: `npm run build` (should be auto-filled)
   - Output Directory: `.next` (should be auto-filled)
5. **Deploy**: Click "Deploy"
6. **Wait**: Vercel will build and deploy your app (takes 2-3 minutes)
7. **Done**: You'll get a URL like `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts:
   - Link to existing project? No (first time)
   - Project name: `case-study-5` (or your choice)
   - Directory: `.` (current directory)
   - Override settings? No

4. **Production Deploy**:
   ```bash
   vercel --prod
   ```

## Step 3: Environment Variables (if needed)
If you have any environment variables, add them in:
- Vercel Dashboard → Your Project → Settings → Environment Variables

## Step 4: Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain

## Notes:
- ✅ Your code is already committed and ready
- ✅ Build command is already configured in `package.json`
- ✅ Next.js is fully supported on Vercel
- ⚠️ Large video files might need to be hosted separately (Vercel has file size limits)

## Alternative Hosting Options:

### Netlify
1. Go to https://netlify.com
2. Connect GitHub repo
3. Build command: `npm run build`
4. Publish directory: `.next`

### Railway
1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Select your repo
4. Auto-detects Next.js

### Render
1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Build command: `npm run build`
5. Start command: `npm start`

---

**Recommended: Vercel** - It's made by the Next.js team and offers the best integration.
