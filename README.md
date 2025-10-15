# SAMTOP GROUP LIMITED Website

This is the official website for SAMTOP GROUP LIMITED, built with React, TypeScript, and Tailwind CSS.

## Deployment to GitHub Pages

Follow these steps to deploy the website to GitHub Pages:

### 1. Prerequisites
- Ensure you have Node.js and npm/pnpm installed
- Create a GitHub repository for the project

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Configure GitHub Pages Settings
- In your GitHub repository, go to Settings > Pages
- Under "Build and deployment", select "Deploy from a branch"
- Choose the branch you want to deploy from (usually 'main' or 'master')
- Set the folder to '/ (root)'
- Click "Save"

### 4. Build and Deploy
```bash
# Build the project
pnpm build

# Deploy to GitHub Pages
pnpm deploy
```

### 5. Custom Domain Configuration
If you want to use your custom domain (samtopgroup.com):
1. Go to your domain registrar's website
2. Configure DNS records to point to GitHub Pages:
   - Add an A record pointing to GitHub's IP addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Add a CNAME record pointing to your GitHub Pages URL (username.github.io)
3. In your GitHub repository settings, go to Pages > Custom domain
4. Enter your custom domain (samtopgroup.com) and click "Save"
5. Enable HTTPS by checking the "Enforce HTTPS" option

### Notes
- For subdirectory deployment, update the `base` property in `vite.config.ts` to match your repository name
- Wait a few minutes for GitHub Pages to propagate your changes
- Check the "Actions" tab in your repository for deployment status