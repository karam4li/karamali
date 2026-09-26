/**
 * The Quiet Press — Universal Ecosystem Navigation Web Component
 * 
 * Drop this onto ANY subdomain (models.karamali.org, db.karamali.org, blog.karamali.org):
 * <script src="ecosystem-nav.js"></script>
 * <press-nav active="root" domain="karamali.org"></press-nav>
 */

class PressNav extends HTMLElement {
  connectedCallback() {
    const activeSubdomain = this.getAttribute('active') || 'root';
    const rootDomain = this.getAttribute('domain') || 'karamali.org';

    // Check if we are running in local/preview mode or live domain
    const isLocal = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1' || 
                    window.location.protocol === 'file:';

    const isSubdir = window.location.pathname.includes('/subdomains/');
    const basePrefix = isSubdir ? '../' : './';
    const subPrefix = isSubdir ? './' : './subdomains/';

    const subdomains = [
      { id: 'root', label: 'home', url: isLocal ? `${basePrefix}index.html` : `https://${rootDomain}` },
      { id: 'cv', label: 'curriculum', url: isLocal ? `${subPrefix}resume.html` : `https://cv.${rootDomain}` },
      { id: 'research', label: 'research', url: isLocal ? `${subPrefix}blog.html` : `https://research.${rootDomain}` },
      { id: 'models', label: 'models', url: isLocal ? `${subPrefix}crud.html` : `https://models.${rootDomain}` },
      { id: 'showcase', label: 'gallery', url: isLocal ? `${subPrefix}index.html` : `https://showcase.${rootDomain}` }
    ];

    const displayBadge = (activeSubdomain === 'root' || activeSubdomain === 'portfolio' || activeSubdomain === 'home')
      ? rootDomain
      : `${activeSubdomain}.${rootDomain}`;

    const homeUrl = isLocal ? `${basePrefix}index.html` : `https://${rootDomain}`;

    this.innerHTML = `
      <style>
        .press-nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.5rem;
          border-bottom: 1px solid var(--press-border, #e8e6dc);
          background: var(--press-bg-surface, rgba(250, 249, 245, 0.92));
          backdrop-filter: blur(8px);
          font-family: var(--press-font-sans, system-ui, sans-serif);
          font-size: 0.8125rem;
          color: var(--press-text-primary, #141413);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .press-brand {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          text-decoration: none;
          color: inherit;
        }
        .press-glyph {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 4px;
          background: var(--press-primary, #0284c7);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
          line-height: 1;
        }
        .press-title {
          font-family: var(--press-font-serif, serif);
          font-weight: 600;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }
        .press-badge {
          background: var(--press-bg-subtle, #f0ede4);
          color: var(--press-text-primary, #141413);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-family: var(--press-font-mono, monospace);
          font-size: 0.75rem;
          border: 1px solid var(--press-border, #e8e6dc);
        }
        .press-links {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .press-link {
          color: var(--press-text-secondary, #737168);
          text-decoration: none;
          font-family: var(--press-font-mono, monospace);
          font-size: 0.75rem;
          transition: color 0.15s ease;
        }
        .press-link:hover, .press-link.active {
          color: var(--press-primary, #0284c7);
          font-weight: 600;
        }
        .press-theme-toggle {
          background: transparent;
          border: 1px solid var(--press-border, #e8e6dc);
          border-radius: 6px;
          padding: 0.25rem 0.5rem;
          cursor: pointer;
          color: inherit;
          font-size: 0.875rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.15s ease, background-color 0.15s ease;
        }
        .press-theme-toggle:hover {
          background-color: var(--press-bg-subtle, #f0ede4);
        }
      </style>

      <nav class="press-nav-container">
        <a href="${homeUrl}" class="press-brand">
          <div class="press-glyph">✸</div>
          <span class="press-title">Karamali // Systems &amp; AI</span>
          <span style="color: var(--press-text-muted, #9e9b91)">/</span>
          <span class="press-badge">${displayBadge}</span>
        </a>

        <div class="press-links">
          ${subdomains
            .filter(s => s.id !== activeSubdomain)
            .slice(0, 4)
            .map(s => `<a href="${s.url}" class="press-link">${s.label}</a>`)
            .join('')}
          <button class="press-theme-toggle" id="pressThemeToggle" title="Toggle dark / light mode" aria-label="Toggle theme">
            🌓
          </button>
        </div>
      </nav>
    `;

    // Apply saved or system theme preference immediately
    const savedTheme = localStorage.getItem('press-theme') || localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isInitialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    if (isInitialDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-color-mode', 'dark');
    }

    const toggle = this.querySelector('#pressThemeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const willBeDark = !document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark', willBeDark);
        document.documentElement.setAttribute('data-theme', willBeDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-color-mode', willBeDark ? 'dark' : 'light');
        localStorage.setItem('press-theme', willBeDark ? 'dark' : 'light');
        localStorage.setItem('theme', willBeDark ? 'dark' : 'light');
      });
    }
  }
}

if (!customElements.get('press-nav')) {
  customElements.define('press-nav', PressNav);
}
