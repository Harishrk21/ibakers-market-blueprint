# Vercel Deployment Guide for IBakers Chennai

## Quick Deploy to Vercel

### Step 1: Prepare Your Repository
```bash
# Make sure all changes are committed
git add .
git commit -m "SEO optimization: Best homemade cakes in Chennai"
git push
```

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to https://vercel.com
2. Click "New Project"
3. Import your Git repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `ibakers-market-blueprint`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### Option B: Via Vercel CLI
```bash
npm i -g vercel
cd ibakers-market-blueprint
vercel
```

### Step 3: Add Custom Domain
1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `www.ibakers.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

### Step 4: Verify Deployment
- ✅ Check site loads: https://www.ibakers.com
- ✅ Verify sitemap: https://www.ibakers.com/sitemap.xml
- ✅ Verify robots.txt: https://www.ibakers.com/robots.txt
- ✅ Test structured data: https://search.google.com/test/rich-results

## Post-Deployment SEO Checklist

### 1. Google Search Console
- [ ] Add property: https://www.ibakers.com
- [ ] Verify ownership (DNS or HTML file)
- [ ] Submit sitemap: https://www.ibakers.com/sitemap.xml
- [ ] Request indexing for main pages

### 2. Google Business Profile
- [ ] Create/update Google Business Profile
- [ ] Add business information
- [ ] Upload photos
- [ ] Encourage customer reviews
- [ ] Add website URL

### 3. Performance Monitoring
- [ ] Test Core Web Vitals
- [ ] Check mobile usability
- [ ] Verify page speed
- [ ] Monitor Lighthouse scores

### 4. Content Verification
- [ ] All pages load correctly
- [ ] Images optimized
- [ ] Meta tags display correctly
- [ ] Structured data validated

## SEO Keywords Targeted
- **Primary**: "best homemade cakes in Chennai"
- **Secondary**: "homemade cakes Chennai", "best home baker Chennai"
- **Long-tail**: "best homemade birthday cakes in Chennai"

## Performance Optimizations Included
- ✅ Code splitting
- ✅ Asset minification
- ✅ Cache headers
- ✅ Security headers
- ✅ Optimized build configuration

## Monitoring & Maintenance
1. **Weekly**: Check Google Search Console for errors
2. **Monthly**: Update sitemap if new pages added
3. **Quarterly**: Review keyword rankings
4. **Ongoing**: Monitor Core Web Vitals

## Support
For issues or questions:
- Check Vercel docs: https://vercel.com/docs
- Google Search Console: https://search.google.com/search-console
- SEO best practices: See README-SEO.md

