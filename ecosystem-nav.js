/**
 * The Quiet Press — Universal Ecosystem Navigation Web Component
 * 
 * Drop this onto ANY subdomain (models.ali.net, db.ali.net, blog.ali.net):
 * <script src="https://your-domain.com/nav.js"></script>
 * <press-nav active="models" domain="ali.net"></press-nav>
 */

class PressNav extends HTMLElement {
  connectedCallback() {
    const activeSubdomain = this.getAttribute('active') || 'root';
    const rootDomain = this.getAttribute('domain') || 'karamali.org';

    const subdomains = [
      { id: 'root', label: 'home', url: `https://${rootDomain}` },
      { id: 'models', label: 'models', url: `https://models.${rootDomain}` },
      { id: 'db', label: 'database', url: `https://db.${rootDomain}` },
      { id: 'research', label: 'research', url: `https://research.${rootDomain}` },
      { id: 'benchmarks', label: 'benchmarks', url: `https://benchmarks.${rootDomain}` },
      { id: 'cv', label: 'curriculum', url: `https://cv.${rootDomain}` }
    ];

    this.innerHTML = `
      <style>
        .press-nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.5rem;
          border-bottom: 1px solid var(--press-border, #e8e6dc);
          background: var(--press-bg-surface, rgba(250, 249, 245, 0.9));
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
          background: var(--press-primary, var(--press-sky, #0284c7));
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
        }
        .press-title {
          font-family: var(--press-font-serif, serif);
          font-weight: 600;
          font-size: 0.9375rem;
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
          color: var(--press-text-primary, #141413);
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
        }
      </style>

      <nav class="press-nav-container">
        <a href="https://${rootDomain}" class="press-brand">
          <div class="press-glyph">✸</div>
          <span class="press-title">Karamali // Systems &amp; AI</span>
          <span style="color: var(--press-text-muted, #b0aea5)">/</span>
          <span class="press-badge">${activeSubdomain}.${rootDomain}</span>
        </a>

        <div class="press-links">
          ${subdomains
            .filter(s => s.id !== activeSubdomain)
            .slice(0, 4)
            .map(s => `<a href="${s.url}" class="press-link">${s.label}</a>`)
            .join('')}
          <button class="press-theme-toggle" id="pressThemeToggle" title="Toggle dark/light mode">
            🌓
          </button>
        </div>
      </nav>
    `;

    const toggle = this.querySelector('#pressThemeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('press-theme', isDark ? 'dark' : 'light');
      });
    }
  }
}

if (!customElements.get('press-nav')) {
  customElements.define('press-nav', PressNav);
}
