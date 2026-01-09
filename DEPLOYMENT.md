# Deployment Guide - Complete Game Companion

This guide covers deploying Complete Game Companion to various static hosting platforms.

## Prerequisites

Before deploying:
1. Ensure all tests pass locally
2. Run `npm run build` successfully
3. Test the production build locally
4. Verify localStorage functionality works

## GitHub Pages (Recommended)

### Initial Setup

1. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/complete-game-companion"
   }
   ```

2. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

### Deploy

```bash
npm run deploy
```

This will:
- Build the production app
- Create/update the `gh-pages` branch
- Push to GitHub

### Enable GitHub Pages

1. Go to repository Settings
2. Navigate to Pages section
3. Select `gh-pages` branch as source
4. Save

Your app will be live at: `https://yourusername.github.io/complete-game-companion`

## Netlify

### Option 1: Drag & Drop

1. Run `npm run build`
2. Go to [Netlify](https://app.netlify.com/)
3. Drag the `build/` folder to the deployment area
4. Done!

### Option 2: Continuous Deployment

1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
4. Deploy

### Custom Domain (Optional)

1. Add custom domain in Netlify settings
2. Update DNS records as instructed
3. Enable HTTPS (automatic)

## Vercel

### Deploy via CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts to configure project

### Deploy via GitHub

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure build settings (auto-detected for React)
4. Deploy

## Firebase Hosting

### Setup

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set public directory to `build`
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## AWS S3 + CloudFront

### S3 Setup

1. Create S3 bucket
2. Enable static website hosting
3. Set bucket policy for public read:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::your-bucket-name/*"
     }]
   }
   ```

### Upload Build

1. Build the app:
   ```bash
   npm run build
   ```

2. Upload to S3:
   ```bash
   aws s3 sync build/ s3://your-bucket-name --delete
   ```

### CloudFront (Optional but Recommended)

1. Create CloudFront distribution
2. Set S3 bucket as origin
3. Configure error pages:
   - 404 → /index.html (for React routing)
   - 403 → /index.html
4. Enable HTTPS

## Testing Deployment

After deploying to any platform, test:

### Functionality Checklist
- [ ] App loads correctly
- [ ] All games display
- [ ] Search and filters work
- [ ] Can start a scorecard
- [ ] Enter key advances in scorecard
- [ ] Scores save to localStorage
- [ ] Timer works (for applicable games)
- [ ] History shows completed games
- [ ] Favorites toggle works
- [ ] Rules links open correctly
- [ ] Mobile responsive design works
- [ ] Touch targets are appropriate size

### Performance Checklist
- [ ] Page load time < 3 seconds
- [ ] No console errors
- [ ] localStorage working
- [ ] Icons load properly
- [ ] Smooth scrolling
- [ ] No layout shifts

### Cross-Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge

## Custom Domain Setup

### Purchase Domain
Use providers like:
- Namecheap
- Google Domains
- GoDaddy
- Domain.com

### Configure DNS

For GitHub Pages:
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     yourusername.github.io
```

For other platforms, follow their specific DNS instructions.

## Environment-Specific Configuration

If you need different configs for dev/production:

1. Create `.env.production`:
   ```
   REACT_APP_API_URL=https://api.example.com
   REACT_APP_ENV=production
   ```

2. Access in code:
   ```javascript
   const apiUrl = process.env.REACT_APP_API_URL;
   ```

## Continuous Integration (Optional)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## Monitoring & Analytics (Optional)

### Google Analytics

1. Create GA4 property
2. Add tracking code to `public/index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

## Rollback Procedure

If deployment has issues:

### GitHub Pages
```bash
# Rollback to previous commit
git revert HEAD
npm run deploy
```

### Netlify/Vercel
- Use dashboard to rollback to previous deployment

### S3
```bash
# Restore from backup
aws s3 sync s3://your-backup-bucket/ s3://your-bucket-name/
```

## Performance Optimization

Before deploying, optimize:

1. **Code Splitting** (if bundle > 500KB)
2. **Image Optimization**
3. **Gzip Compression** (usually automatic)
4. **Cache Headers** (set on hosting platform)
5. **CDN** (CloudFront, Cloudflare)

## Security Considerations

- Enable HTTPS (mandatory)
- Set security headers
- Review content security policy
- Check for exposed secrets
- Use environment variables for sensitive data

## Support & Troubleshooting

### Common Issues

**App loads blank page:**
- Check browser console for errors
- Verify `homepage` in package.json matches domain
- Check routing configuration

**localStorage not persisting:**
- Verify HTTPS (required for localStorage)
- Check browser settings/privacy mode
- Test in different browsers

**Styles not loading:**
- Clear browser cache
- Check CSS file paths
- Verify build completed successfully

**Routes return 404:**
- Configure server/hosting for SPA
- Set up redirect rules to index.html

---

## Quick Deploy Checklist

Before each deployment:
- [ ] All tests passing
- [ ] No console errors
- [ ] localStorage working
- [ ] Mobile responsive
- [ ] Build succeeds (`npm run build`)
- [ ] Production build tested locally
- [ ] CHANGELOG updated
- [ ] Version bumped in package.json
- [ ] Git tag created
- [ ] Deployment successful
- [ ] Post-deployment testing complete

---

**Need help?** Check the main README.md or open an issue on GitHub.
