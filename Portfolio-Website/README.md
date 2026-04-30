# 🌟 Modern Personal Portfolio Website

A clean, modern, and fully responsive personal portfolio website for BSIT students and aspiring IT professionals. Built with HTML, CSS, and vanilla JavaScript with no dependencies!

## ✨ Features

- **✅ Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **✅ Dark Mode Toggle** - Switch between light and dark themes
- **✅ Smooth Animations** - Hover effects, scroll animations, and floating elements
- **✅ Mobile-Friendly Navigation** - Hamburger menu for smaller screens
- **✅ Contact Form** - Functional contact form with validation
- **✅ Skills Progress Bars** - Animated skill visualization
- **✅ Project Showcase** - Display your projects with links to GitHub
- **✅ Experience/OJT Section** - Highlight your internship experience
- **✅ Downloadable Resume** - Button to download your resume
- **✅ Social Links** - GitHub, LinkedIn, Facebook integration
- **✅ SEO Friendly** - Proper meta tags and semantic HTML

## 📁 Project Structure

```
Portfolio-Website/
├── index.html          # Main HTML file
├── styles.css          # Styling with CSS variables
├── script.js           # JavaScript for interactivity
├── README.md           # This file
├── assets/
│   └── resume.pdf      # Your resume (download link)
└── images/
    └── (Optional) Your portfolio images
```

## 🚀 How to Run Locally

### Method 1: Using Live Server (Recommended)

1. **Install VS Code Extensions** (if not already installed):
   - Install "Live Server" by Ritwick Dey from Extensions

2. **Open the Project**:
   ```bash
   # Navigate to the project folder
   cd Portfolio-Website
   ```

3. **Start Live Server**:
   - Right-click on `index.html` → "Open with Live Server"
   - Or use the "Go Live" button in the bottom-right corner of VS Code

4. **Access Your Portfolio**:
   - Your browser will automatically open to `http://localhost:5500`
   - Make changes to HTML/CSS/JS and see them update in real-time!

### Method 2: Using Python

If you have Python installed:

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

### Method 3: Using Node.js

If you have Node.js installed:

```bash
# Install http-server globally (first time only)
npm install -g http-server

# Start the server
http-server

# Access at http://localhost:8080
```

### Method 4: Direct Browser Opening

Simply double-click `index.html` to open it in your browser (limited functionality for some features).

## 🎨 Customization Guide

### 1. Update Personal Information

Open `index.html` and replace:

- **[Your Full Name]** - Your name (appears in multiple places)
- **your.email@example.com** - Your email address
- **+63 XXX XXXX XXX** - Your phone number
- **Albay, Philippines** - Your location
- **your.email@example.com** - Your email in contact form

### 2. Change Colors/Theme

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #06b6d4;       /* Cyan accent */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light gray text */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White background */
}
```

### 3. Update Projects Section

Replace the example projects with your own. Edit the project cards in `index.html`:

```html
<div class="project-card">
    <div class="project-header">
        <i class="fas fa-[icon-name]"></i>
    </div>
    <h3 class="project-title">Your Project Title</h3>
    <p class="project-description">Your project description...</p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/yourname/project" target="_blank" class="project-link">
            <i class="fab fa-github"></i> View Code
        </a>
    </div>
</div>
```

### 4. Add Your Resume

1. Save your resume as PDF
2. Place it in the `assets/` folder
3. The download link is already set up in the HTML

### 5. Update Skills

Modify the skills section with your actual skills and proficiency levels:

```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 80%"></div>
    </div>
</div>
```

### 6. Update Social Links

Replace the placeholder URLs with your actual profiles:

```html
<a href="https://github.com/yourname" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
<a href="https://facebook.com/yourname" target="_blank">Facebook</a>
```

### 7. Update Experience/OJT Section

Modify the experience items with your actual internship details:

```html
<div class="experience-item">
    <div class="experience-date">
        <span class="badge-date">Start Date - End Date</span>
    </div>
    <div class="experience-content">
        <h3 class="experience-title">Your Position</h3>
        <p class="experience-company">Company Name</p>
        <ul class="experience-tasks">
            <li>Task 1</li>
            <li>Task 2</li>
        </ul>
    </div>
</div>
```

## 📤 Deploy to GitHub Pages

### Step 1: Create a GitHub Account

If you don't have one:
- Go to [github.com](https://github.com)
- Click "Sign up" and follow the steps

### Step 2: Create a New Repository

1. Log in to GitHub
2. Click the "+" icon in the top right → "New repository"
3. **Repository name**: `username.github.io` (replace "username" with your GitHub username)
   - Example: `jumar.github.io`
4. Select "Public"
5. **Don't** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 3: Upload Files via Web Interface (Easiest)

1. On your repository page, click "Add file" → "Upload files"
2. Select all files from your portfolio folder (index.html, styles.css, script.js, assets/, etc.)
3. Scroll down and click "Commit changes"

### Step 4: Enable GitHub Pages (If Not Automatic)

1. Go to repository "Settings"
2. In the left menu, click "Pages"
3. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "main"
   - Folder: Select "/ (root)"
4. Click "Save"

### Step 5: Access Your Portfolio

Your portfolio is now live at: `https://username.github.io`

### Alternative: Upload via Git Command Line

If you prefer using Git:

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio upload"

# Add remote repository
git remote add origin https://github.com/username/username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🔧 Advanced Customization

### Add Custom Fonts

In `index.html`, add to the `<head>` section:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

Then in `styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Add More Sections

Copy and modify existing sections and add them to the navigation menu.

### Add Smooth Scroll Animations

The portfolio already includes scroll animations! Elements fade in as you scroll past them.

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Links not working | Make sure you've updated the href URLs correctly |
| Dark mode not saving | Check if localStorage is enabled in your browser |
| Images not showing | Ensure image paths are correct in the img tags |
| Portfolio not appearing on GitHub Pages | Check if repo name is `username.github.io` |
| Styles look broken | Clear browser cache (Ctrl+Shift+Delete) and refresh |

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Next Steps

1. **Customize the portfolio** with your information
2. **Add your projects** to the Projects section
3. **Update your resume** link
4. **Test on mobile** devices
5. **Deploy to GitHub Pages**
6. **Share your portfolio** with potential employers!

## 💡 Enhancement Ideas

- Add blog section
- Add testimonials/recommendations section
- Integrate with an email service (Formspree, EmailJS)
- Add typing animation on hero title
- Add image gallery for your projects
- Add certificates section
- Add skills filtering
- Add theme switcher with more options

## 📝 License

This portfolio template is free to use and modify for personal or commercial projects.

## 🤝 Support

If you encounter any issues:
1. Check the file paths are correct
2. Ensure all files are in the same folder structure
3. Clear browser cache and reload
4. Check browser console for errors (F12 → Console tab)

---

**Happy Coding! 🚀**

Make sure to replace placeholder text with your actual information before sharing your portfolio.
