// ============================================
// THEME TOGGLE (Light/Dark Mode)
// ============================================
(function() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference, fall back to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Respect system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        htmlElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only update if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            htmlElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
    
    // Toggle theme
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
})();

// ============================================
// MOBILE MENU TOGGLE
// ============================================
(function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
})();

// ============================================
// PROJECT FILTER (Projects Page)
// ============================================
(function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');
    
    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        const techTags = card.querySelectorAll('.tech-tag');
                        let match = false;
                        
                        techTags.forEach(tag => {
                            const tech = tag.textContent.toLowerCase().trim();
                            
                            if (filter === 'webdev' && 
                                (tech.includes('html') || 
                                 tech.includes('css') || 
                                 tech.includes('javascript') || 
                                 tech.includes('responsive') ||
                                 tech.includes('flexbox') || 
                                 tech.includes('grid') ||
                                 tech.includes('ui/ux') || 
                                 tech.includes('multi-page') ||
                                 tech.includes('form validation') ||
                                 tech.includes('animations'))) {
                                match = true;
                            } else if (filter === 'networking' && 
                                (tech.includes('vlan') || 
                                 tech.includes('cisco') || 
                                 tech.includes('dhcp') || 
                                 tech.includes('dns') ||
                                 tech.includes('vpn') || 
                                 tech.includes('wireguard') ||
                                 tech.includes('networking') || 
                                 tech.includes('subnetting') ||
                                 tech.includes('ospf') || 
                                 tech.includes('acl') ||
                                 tech.includes('wan') || 
                                 tech.includes('packet tracer') ||
                                 tech.includes('wi-fi'))) {
                                match = true;
                            } else if (filter === 'security' && 
                                (tech.includes('kali') || 
                                 tech.includes('nmap') ||
                                 tech.includes('wireshark') || 
                                 tech.includes('firewall') ||
                                 tech.includes('security') || 
                                 tech.includes('metasploit') ||
                                 tech.includes('enumeration') || 
                                 tech.includes('exploitation'))) {
                                match = true;
                            }
                        });
                        
                        card.style.display = match ? 'block' : 'none';
                    }
                });
            });
        });
    }
})();

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
(function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
})();

// ============================================
// TYPED TEXT EFFECT (Homepage)
// ============================================
(function() {
    const typedElement = document.querySelector('.typed-text');
    
    if (typedElement) {
        const texts = [
            'Networking & Cybersecurity Student',
            'Homelab Enthusiast',
            'CCNA Candidate',
            'Security+ Candidate'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentText = '';
        
        function typeEffect() {
            const fullText = texts[textIndex];
            
            if (isDeleting) {
                currentText = fullText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentText = fullText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            typedElement.textContent = currentText;
            
            if (!isDeleting && charIndex === fullText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeEffect, 500);
            } else {
                const speed = isDeleting ? 50 : 100;
                setTimeout(typeEffect, speed);
            }
        }
        
        // Start the typing effect
        setTimeout(typeEffect, 500);
    }
})();

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
(function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.project-card, .focus-card, .testimonial-card, .cert-card, .stat-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
})();

// ============================================
// FORM VALIDATION
// ============================================
(function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if (name && !name.value.trim()) {
                name.style.borderColor = 'var(--danger)';
                isValid = false;
            } else if (name) {
                name.style.borderColor = 'var(--border-color)';
            }
            
            if (email && !email.value.trim()) {
                email.style.borderColor = 'var(--danger)';
                isValid = false;
            } else if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    email.style.borderColor = 'var(--danger)';
                    isValid = false;
                } else {
                    email.style.borderColor = 'var(--border-color)';
                }
            }
            
            if (message && !message.value.trim()) {
                message.style.borderColor = 'var(--danger)';
                isValid = false;
            } else if (message) {
                message.style.borderColor = 'var(--border-color)';
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
})();

// ============================================
// COPY TO CLIPBOARD (For Discord username)
// ============================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        const discordCard = document.querySelector('.social-link-large.discord');
        if (discordCard) {
            const hint = discordCard.querySelector('.copy-hint');
            if (hint) {
                const originalText = hint.textContent;
                hint.textContent = '✓ Copied!';
                hint.style.color = 'var(--success)';
                setTimeout(() => {
                    hint.textContent = originalText;
                    hint.style.color = 'var(--primary)';
                }, 2000);
            }
        }
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

// Make function globally available
window.copyToClipboard = copyToClipboard;

// Log to confirm script loaded
console.log('✅ saiaikkwan.com - Scripts loaded successfully');