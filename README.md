# SAMTOP GROUP LIMITED Website

A professional business website for SAMTOP GROUP LIMITED, showcasing their global business solutions.

## Deployment to GitHub Pages

### Prerequisites
- Node.js installed
- pnpm package manager installed
- GitHub account

### Deployment Steps

1. Clone this repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build the project:
   ```bash
   pnpm build
   ```
4. Deploy to GitHub Pages:
   ```bash
   pnpm deploy
   ```

### Custom Domain Configuration

To use your custom domain (samtopgroup.com):

1. Add a `CNAME` file to the `public` directory with your domain name:
   ```
   samtopgroup.com
   ```
2. Configure DNS settings at your domain registrar:
   - Add an A record pointing to GitHub Pages IP addresses
   - Or add a CNAME record pointing to your GitHub Pages URL

### Troubleshooting

If you encounter a blank page after deployment:
1. Ensure `HashRouter` is used instead of `BrowserRouter`
2. Verify the `.nojekyll` file exists in the root directory
3. Check that your repository has the correct GitHub Pages settings

For more detailed information, visit the [GitHub Pages documentation](https://docs.github.com/en/pages).