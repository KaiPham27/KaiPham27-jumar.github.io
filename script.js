// DOM ELEMENTS

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link:not(.theme-toggle)');
const themeToggle = document.getElementById('theme-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// NAVIGATION - HAMBURGER MENU

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// DARK MODE TOGGLE

// Check if user has a theme preference saved
const currentTheme = localStorage.getItem('theme') || 'light-mode';

// Apply saved theme on page load
document.body.classList.add(currentTheme);
updateThemeIcon();

// Toggle theme when button is clicked
themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
    
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// SCROLL TO TOP BUTTON

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// SMOOTH SCROLLING FOR NAV LINKS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CONTACT FORM HANDLING

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (in a real app,kelangan ko i send sa server)
    console.log('Form Data:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date()
    });
    
    // Show success message
    showFormMessage(
        `Thank you, ${name}! I've received your message and will get back to you soon.`,
        'success'
    );
    
    // Reset form
    contactForm.reset();
    
    // Optnl: Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
    }, 5000);
});

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.classList.remove('success', 'error');
    formMessage.classList.add(type);
}

// SKILL PROGRESS BARS ANIMATION

const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar && !progressBar.classList.contains('animated')) {
                progressBar.classList.add('animated');
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all skill items
document.querySelectorAll('.skill-item').forEach(skillItem => {
    observer.observe(skillItem);
});

// ACTIVE NAV LINK HIGHLIGHT

window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
        }
    });
});

// PAGE LOAD ANIMATIONS

window.addEventListener('load', () => {
    // Fade in hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeIn 1s ease-in-out';
    }
});

// PARALLAX EFFECT (Optnl Enhancement)

document.addEventListener('mousemove', (e) => {
    const avatar = document.querySelector('.avatar');
    if (avatar && window.innerWidth > 768) {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
        
        avatar.style.transform = `translateY(calc(-20px + ${mouseY}px))`;
    }
});

// UTILITY FUNCTIONS

// Debounce function for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


// TYPING EFFECT (Optional)


function typeEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}


// PRINT RESUME FUNCTIONALITY (Enhancement)


// Add download resume functionality
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.btn[download]');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            // The browser will naturally handle the download
            // to add custom logic, you can do it here
            console.log('Resume download initiated');
        });
    }
});


// INITIALIZE ON PAGE LOAD


document.addEventListener('DOMContentLoaded', () => {
    console.log('✨ Portfolio loaded successfully!');
    
    // Add any additional initialization here
    initializeTooltips();
});

function initializeTooltips() {
    // Add tooltip functionality if needed
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            // Can tooltip implementation here
        });
    });
}


// SCROLL ANIMATIONS (Fade-in on scroll)


const scrollElements = document.querySelectorAll('.project-card, .experience-item, .skill-category');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

const displayScrollElement = debounce(function() {
    scrollElements.forEach((element) => {
        if (elementInView(element, 1.25)) {
            element.classList.add('scrolled');
        }
    })
}, 100);

window.addEventListener('scroll', displayScrollElement);

// Add CSS class for scroll animation
const style = document.createElement('style');
style.textContent = `
    .project-card, .experience-item, .skill-category {
        opacity: 0;
        transition: opacity 0.6s ease-in-out;
    }
    
    .project-card.scrolled, .experience-item.scrolled, .skill-category.scrolled {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Trigger animation on initial load for visible elements
displayScrollElement();
