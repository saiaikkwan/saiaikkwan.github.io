// ============================================
// REUSABLE COMPONENTS
// ============================================

// Component: Social Links (for footer and contact page)
function renderSocialLinks(containerId, links, variant = 'vertical') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const linkClasses = variant === 'vertical' 
        ? 'social-links-large-vertical' 
        : 'social-links-horizontal';
    
    container.innerHTML = links.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
           class="social-link-large ${link.name.toLowerCase()}" 
           ${link.hasBadge ? `data-badge="${link.badgeText}"` : ''}>
            <span class="social-icon-wrapper">
                ${getSocialIcon(link.icon)}
            </span>
            <span class="social-name">${link.name}</span>
            ${link.hasBadge ? `<span class="server-badge">${link.badgeText}</span>` : ''}
        </a>
    `).join('');
}

function getSocialIcon(iconName) {
    const icons = {
        github: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.876.118 3.176.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.222 0 1.604-.015 2.896-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>`,
        linkedin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>`,
        instagram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>`,
        telegram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.54.26l.193-2.737 4.98-4.5c.216-.193-.047-.3-.335-.107l-6.155 3.88-2.652-.83c-.576-.18-.587-.576.12-.854l10.376-4c.48-.18.9.107.513.916z"/>
                </svg>`,
        facebook: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>`,
        discord: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37c-1.534-.714-3.166-1.237-4.833-1.534-.224.403-.487.945-.664 1.366-1.795-.27-3.615-.27-5.41 0-.177-.421-.44-.963-.664-1.366-1.667.297-3.3.82-4.834 1.534C.79 9.998.172 15.493.528 20.92c1.877 1.384 3.764 2.285 5.613 2.85.45-.614.85-1.265 1.193-1.95-.66-.248-1.29-.553-1.884-.91.158-.116.313-.234.464-.358 3.646 1.683 7.596 1.683 11.172 0 .152.124.307.242.464.358-.595.357-1.226.662-1.885.91.343.685.743 1.336 1.193 1.95 1.85-.565 3.737-1.466 5.614-2.85.418-6.3-.714-11.763-3.056-16.55zM8.022 17.58c-1.01 0-1.843-.928-1.843-2.064 0-1.136.814-2.064 1.843-2.064 1.03 0 1.862.928 1.843 2.064 0 1.136-.814 2.064-1.843 2.064zm7.956 0c-1.01 0-1.843-.928-1.843-2.064 0-1.136.814-2.064 1.843-2.064 1.03 0 1.862.928 1.843 2.064 0 1.136-.814 2.064-1.843 2.064z"/>
                </svg>`
    };
    
    return icons[iconName] || '';
}

// Component: Loading Spinner
function showLoadingSpinner(container) {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="width: 40px; height: 40px; border: 3px solid var(--border-color); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1rem;"></div>
            <p style="color: var(--text-muted);">Loading...</p>
        </div>
    `;
    container.appendChild(spinner);
    return spinner;
}

function hideLoadingSpinner(spinner) {
    if (spinner) spinner.remove();
}

// Export functions for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderSocialLinks, getSocialIcon, showLoadingSpinner, hideLoadingSpinner };
}