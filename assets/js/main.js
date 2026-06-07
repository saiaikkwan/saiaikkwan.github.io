// ============================================
// LOAD HEADER AND FOOTER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initMobileMenu();
            initThemeToggle();
            updateActiveNavLink();
        })
        .catch(error => console.log('Header loaded from cache or error:', error));
    
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.log('Footer loaded from cache or error:', error));
});

// ============================================
// THEME TOGGLE WITH ROTATION
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        htmlElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    
    function addRotation(element) {
        element.classList.add('rotating');
        setTimeout(() => {
            element.classList.remove('rotating');
        }, 500);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            addRotation(themeToggle);
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
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
}

// ============================================
// UPDATE ACTIVE NAV LINK
// ============================================
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

// ============================================
// CREATE PROJECT CARD (Helper Function)
// ============================================
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    card.setAttribute('data-id', project.id);
    
    const techTags = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    const buttonsHtml = project.liveUrl ? `
        <div class="project-buttons">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link github-link-btn">
                <i class="fab fa-github"></i> View on GitHub <i class="fas fa-arrow-right"></i>
            </a>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link live-link-btn">
                <i class="fas fa-external-link-alt"></i> View Live 
            </a>
        </div>
    ` : `
        <div class="project-buttons">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link github-link-btn">
                <i class="fab fa-github"></i> View on GitHub <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" 
                 onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #1e293b, #334155)'; this.parentElement.innerHTML += '<div style=display:flex;align-items:center;justify-content:center;height:100%;color:#94a3b8;font-size:1rem;padding:1rem;text-align:center;>${project.title}</div>';">
            <div class="project-overlay">
                <div class="overlay-buttons">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-github">
                        <i class="fab fa-github"></i> GitHub <i class="fas fa-arrow-right"></i>
                    </a>
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live">
                        <i class="fas fa-external-link-alt"></i> Live Demo 
                    </a>` : ''}
                </div>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            ${buttonsHtml}
        </div>
    `;
    
    return card;
}

// ============================================
// CREATE HOMEPAGE PROJECT CARD
// ============================================
function createHomepageProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const techTags = project.tech.slice(0, 5).map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" 
                 onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #1e293b, #334155)'; this.parentElement.innerHTML += '<div style=display:flex;align-items:center;justify-content:center;height:100%;color:#94a3b8;font-size:1rem;padding:1rem;text-align:center;>${project.title}</div>';">
            <div class="project-overlay">
                <div class="overlay-buttons">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-github">
                        <i class="fab fa-github"></i> GitHub <i class="fas fa-arrow-right"></i>
                    </a>
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live">
                        <i class="fas fa-external-link-alt"></i> Live Demo 
                    </a>` : ''}
                </div>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            <div class="project-buttons">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link github-link-btn">
                    <i class="fab fa-github"></i> View on GitHub <i class="fas fa-arrow-right"></i>
                </a>
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link live-link-btn">
                    <i class="fas fa-external-link-alt"></i> View Live 
                </a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// ============================================
// LOAD FEATURED PROJECTS FROM JSON (Homepage)
// ============================================
(async function loadFeaturedProjects() {
    const featuredGrid = document.querySelector('.featured-projects .projects-grid');
    
    if (featuredGrid) {
        try {
            const response = await fetch('assets/data/projects.json');
            const data = await response.json();
            const featuredProjects = data.projects.filter(p => p.featured === true);
            
            featuredGrid.innerHTML = '';
            
            featuredProjects.slice(0, 3).forEach(project => {
                const projectCard = createHomepageProjectCard(project);
                featuredGrid.appendChild(projectCard);
            });
            
        } catch (error) {
            console.error('Failed to load featured projects:', error);
            featuredGrid.innerHTML = '<div class="error-message" style="text-align: center; grid-column: 1/-1; padding: 2rem; color: var(--danger);"><i class="fas fa-exclamation-triangle"></i> Failed to load projects. Please refresh the page.</div>';
        }
    }
})();

// ============================================
// LOAD PROJECTS FROM JSON (Projects Page)
// ============================================
(async function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGridFull = document.querySelector('.projects-grid.full-grid');
    
    if (!filterButtons.length || !projectsGridFull) return;
    
    try {
        const response = await fetch('assets/data/projects.json');
        const data = await response.json();
        const allProjects = data.projects;
        
        function renderProjects(filter = 'all') {
            projectsGridFull.innerHTML = '';
            const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);
            
            filtered.forEach(project => {
                const projectCard = createProjectCard(project);
                projectsGridFull.appendChild(projectCard);
            });
        }
        
        renderProjects('all');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderProjects(button.getAttribute('data-filter'));
            });
        });
    } catch (error) {
        console.error('Failed to load projects for filter:', error);
        projectsGridFull.innerHTML = '<div class="error-message" style="text-align: center; grid-column: 1/-1; padding: 3rem; color: var(--danger);"><i class="fas fa-exclamation-triangle"></i> Failed to load projects. Please refresh the page.</div>';
    }
})();

// ============================================
// TYPED TEXT EFFECT
// ============================================
(function() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const texts = [
        'Networking & Cybersecurity Student',
        'Homelab Enthusiast',
        'CCNA Candidate',
        'Security+ Candidate'
    ];
    
    let textIndex = 0, charIndex = 0, isDeleting = false;
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
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(typeEffect, 500);
})();

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
(function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
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
// ADD CSS FOR OVERLAY BUTTONS (Dynamic)
// ============================================
(function addOverlayButtonStyles() {
    // Check if styles already exist
    if (document.getElementById('overlay-btn-styles')) return;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'overlay-btn-styles';
    styleSheet.textContent = `
        .overlay-buttons .btn-github,
        .overlay-buttons .btn-live {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .overlay-buttons .btn-github:hover {
            background-color: #e2e8f0;
            color: #000000;
            border-color: #e2e8f0;
            transform: translateY(-2px);
        }
        
        .overlay-buttons .btn-live:hover {
            background-color: var(--primary);
            color: white;
            border-color: var(--primary);
            transform: translateY(-2px);
        }
        
        [data-theme="dark"] .overlay-buttons .btn-github:hover {
            background-color: #3b3b3b;
            color: white;
            border-color: #3b3b3b;
        }
        
        [data-theme="dark"] .overlay-buttons .btn-live:hover {
            background-color: var(--primary);
            color: white;
            border-color: var(--primary);
        }
    `;
    document.head.appendChild(styleSheet);
})();

console.log('✅ saiaikkwan.com - All scripts loaded successfully');