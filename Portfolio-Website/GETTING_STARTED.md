# Getting Started with Your Portfolio

## 📋 Quick Setup Checklist

Use this checklist to quickly customize your portfolio:

### Personal Information
- [ ] Replace `[Jumar R. Bibal]` with your actual name
- [ ] Update email address (your.email@example.com)
- [ ] Update phone number (+63 XXX XXXX XXX)
- [ ] Update location (currently Albay, Philippines)
- [ ] Update career goal/tagline

### Projects Section
- [ ] Update Project 1 title and description
- [ ] Update Project 1 technologies
- [ ] Update Project 1 GitHub link
- [ ] Update Project 2 details
- [ ] Update Project 3 details
- [ ] Add more projects if needed

### Skills Section
- [ ] Verify programming languages list
- [ ] Check skill proficiency levels (0-100%)
- [ ] Update tools and technologies
- [ ] Add/remove core concepts as needed

### Experience/OJT Section
- [ ] Update internship company name
- [ ] Update start and end dates
- [ ] Update job title/position
- [ ] List your main tasks/responsibilities
- [ ] Add additional experience if available

### Social Links & Contact
- [ ] Update GitHub profile URL
- [ ] Update LinkedIn profile URL (if applicable)
- [ ] Update Facebook profile URL (if applicable)
- [ ] Verify contact email is correct
- [ ] Add your phone number

### Resume
- [ ] Create or update your resume as PDF
- [ ] Place in `assets/resume.pdf`
- [ ] Ensure filename matches link in HTML

### Colors & Theme (Optional)
- [ ] Choose your preferred color scheme (edit styles.css)
- [ ] Test dark mode toggle
- [ ] Verify all colors are readable

## 🎨 Recommended Color Schemes

### Option 1: Blue/Cyan (Current)
```css
--primary-color: #2563eb;
--accent-color: #06b6d4;
```

### Option 2: Purple/Pink
```css
--primary-color: #7c3aed;
--accent-color: #ec4899;
```

### Option 3: Green/Teal
```css
--primary-color: #059669;
--accent-color: #14b8a6;
```

### Option 4: Orange/Red
```css
--primary-color: #ea580c;
--accent-color: #dc2626;
```

## 🔗 Icon Resources

Font Awesome icons are used throughout. Here are some popular ones:

- Code/Development: `fa-code`, `fa-laptop`, `fa-terminal`
- Projects: `fa-briefcase`, `fa-project-diagram`, `fa-cube`
- Skills: `fa-graduation-cap`, `fa-trophy`, `fa-star`
- Contact: `fa-envelope`, `fa-phone`, `fa-map-marker-alt`
- Social: `fa-github`, `fa-linkedin`, `fa-facebook`
- General: `fa-arrow-down`, `fa-download`, `fa-heart`

Change icons in HTML: `<i class="fas fa-icon-name"></i>`

## 📸 Adding Images

### Add a Profile Photo

1. Save your photo as a JPG or PNG
2. Place it in the `images/` folder
3. Replace the avatar icon in HTML:

```html
<!-- Replace this: -->
<div class="avatar">
    <i class="fas fa-user-graduate"></i>
</div>

<!-- With this: -->
<img src="images/your-photo.jpg" alt="Your Name" class="avatar-img">
```

Add to CSS:
```css
.avatar-img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 60px rgba(37, 99, 235, 0.3);
}
```

### Add Project Screenshots

```html
<div class="project-image">
    <img src="images/project1-screenshot.jpg" alt="Project Screenshot">
</div>
```

## 📧 Connect Contact Form to Email

The current form only shows a success message. To actually receive emails, use one of these services:

### Option 1: Formspree (Recommended - Free)

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Update form action in HTML:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contact-form">
    <!-- Keep existing fields -->
</form>
```

### Option 2: EmailJS

1. Go to [emailjs.com](https://emailjs.com)
2. Sign up and create a service
3. Add their library and update script.js

## 🌐 Domain Setup (Advanced)

To use a custom domain instead of github.io:

1. Buy a domain (namecheap.com, godaddy.com, etc.)
2. Go to GitHub repo Settings → Pages
3. Add your custom domain under "Custom domain"
4. Update DNS records at your domain provider:
   - Type: CNAME
   - Name: www
   - Value: `username.github.io`

Wait 24-48 hours for DNS to propagate.

## 🔍 SEO Optimization

To improve search engine ranking:

1. Update meta description in `<head>`:
```html
<meta name="description" content="BSIT Student Portfolio - Web Developer & Software Engineer from Albay, Philippines">
```

2. Add meta keywords:
```html
<meta name="keywords" content="BSIT, portfolio, web developer, software engineer, Philippines">
```

3. Add Open Graph for social sharing:
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your tagline">
<meta property="og:image" content="https://yoursite.com/images/og-image.jpg">
```

## 🚀 Performance Tips

1. Compress images before uploading
2. Minify CSS and JavaScript (optional)
3. Use async loading for external scripts
4. Enable caching in browser

## ✅ Final Checklist Before Sharing

- [ ] All personal information is updated
- [ ] All project links work correctly
- [ ] Contact form validation works
- [ ] Dark mode toggle works
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (F12 → Console)
- [ ] All social links are correct
- [ ] Resume downloads properly
- [ ] Portfolio looks good on different browsers
- [ ] Ready to share with employers!

---

**Questions? Need Help?**

1. Check the main README.md for detailed instructions
2. Review browser console for error messages (F12)
3. Verify file paths are correct
4. Clear cache and refresh (Ctrl+Shift+R)

Good luck with your portfolio! 🎉
