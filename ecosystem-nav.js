/**
 * The Quiet Press — Universal Navigation & Ecosystem Bar
 * Anthropic-Inspired Computational Editorial Navigation Architecture
 * Synchronized with @ali/design-system
 * 
 * Capabilities:
 * - Announcement Banner (custom text, link, dismissible with persistence)
 * - Anthropic Dimension Spec (--nav--height: 4.25rem, banner: 2.75rem)
 * - Brand Monogram & Subdomain Pill
 * - Multi-column Categorised Dropdown Menus with Animated Carets
 * - Authentic Anthropic SVG Icons (Chevron Caret, External Linkout, Close)
 * - Anthropic Split Combo CTA Button (Primary Action + Caret Menu)
 * - Anthropic Asymmetrical 3-Line Animated Hamburger Button
 * - Responsive Mobile Accordion Drawer
 * - Dark/Light Mode Switcher with LocalStorage Persistence
 */

class PressNav extends HTMLElement {
  connectedCallback() {
    const activeId = this.getAttribute('active') || 'root';
    const rootDomain = this.getAttribute('domain') || 'karamali.org';
    const bannerText = this.getAttribute('banner') ?? 'KTP Radar v2.0 Live — UK Global Talent Visa AI Screener & Innovation Board';
    const bannerUrl = this.getAttribute('banner-url') || `https://${rootDomain}#systems`;
    const showBanner = bannerText !== 'false' && bannerText !== '';
    const bannerStorageKey = `press-banner-dismissed-${btoa(bannerText || '').substring(0, 12)}`;
    const isBannerDismissed = sessionStorage.getItem(bannerStorageKey) === 'true';

    // Subdomains registry
    const subdomains = [
      { id: 'root', label: 'Apex / Portfolio', url: `https://${rootDomain}`, desc: 'Main personal monograph & telemetry' },
      { id: 'ktp', label: 'KTP Radar', url: `https://ktp.${rootDomain}`, desc: 'UK visa scoring & KTP job discovery' },
      { id: 'models', label: 'Models Registry', url: `https://models.${rootDomain}`, desc: 'Trained checkpoints & inference APIs' },
      { id: 'db', label: 'DentalOS EMPI', url: `https://db.${rootDomain}`, desc: 'Master Patient Index & vector cluster' },
      { id: 'research', label: 'Research Memos', url: `https://research.${rootDomain}`, desc: 'Preprints, papers & theoretical notes' },
      { id: 'benchmarks', label: 'Benchmarks', url: `https://benchmarks.${rootDomain}`, desc: 'Latency, throughput & loss curves' },
      { id: 'cv', label: 'Curriculum Vitae', url: `https://cv.${rootDomain}`, desc: 'Experience, trajectory & publications' },
      { id: 'design', label: 'The Quiet Press', url: `https://design.${rootDomain}`, desc: 'Design system, tokens & kitchen sink' },
    ];

    const currentSubdomain = subdomains.find(s => s.id === activeId) || { id: activeId, label: activeId, url: '#' };

    this.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          font-family: var(--press-font-sans, 'Inter', system-ui, sans-serif);
          --nav-h: 4.25rem;
          --banner-h: 2.75rem;
          --nav-bg: var(--press-bg-surface, rgba(250, 249, 245, 0.94));
          --nav-border: var(--press-border, #e8e6dc);
          --dropdown-bg: var(--press-bg-dropdown, #f0eee6);
        }

        .press-nav-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        /* Top Announcement Banner */
        .press-banner {
          height: var(--banner-h);
          background-color: var(--press-olive, #788c5d);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.25rem;
          font-size: 0.8125rem;
          font-weight: 500;
          transition: height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, margin 0.3s ease;
          overflow: hidden;
          position: relative;
        }

        .press-banner.is-hidden {
          height: 0;
          opacity: 0;
          padding-top: 0;
          padding-bottom: 0;
          margin: 0;
          border: none;
          pointer-events: none;
        }

        .press-banner-content {
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.15s ease;
        }

        .press-banner-content:hover {
          opacity: 0.92;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .press-banner-tag {
          background-color: rgba(255, 255, 255, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-size: 0.6875rem;
          font-family: var(--press-font-mono, monospace);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .press-banner-close {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
          border-radius: 4px;
          transition: color 0.15s, background-color 0.15s;
        }

        .press-banner-close:hover {
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.15);
        }

        /* Main Navigation Bar */
        .press-navbar {
          height: var(--nav-h);
          background-color: var(--nav-bg);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--nav-border);
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .press-navbar-inner {
          max-width: 76rem;
          height: 100%;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        /* Brand & Identity */
        .press-brand-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--press-text-primary, #141413);
          flex-shrink: 0;
        }

        .press-monogram {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 6px;
          background: var(--press-primary, #0284c7);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9375rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease;
        }

        .press-brand-wrap:hover .press-monogram {
          transform: scale(1.05);
        }

        .press-wordmark {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .press-name {
          font-family: var(--press-font-serif, serif);
          font-size: 1.0625rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--press-text-primary, #141413);
        }

        .press-submark {
          font-family: var(--press-font-sans, sans-serif);
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--press-text-muted, #9e9b91);
          font-weight: 500;
        }

        .press-subdomain-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.2rem 0.55rem;
          background: var(--press-bg-subtle, #f0ede4);
          border: 1px solid var(--nav-border);
          border-radius: 4px;
          font-family: var(--press-font-mono, monospace);
          font-size: 0.7188rem;
          color: var(--press-text-secondary, #737168);
          font-weight: 500;
        }

        .press-subdomain-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--press-sage, #788c5d);
        }

        /* Desktop Nav Menu */
        .press-menu-desktop {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .press-nav-item {
          position: relative;
          list-style: none;
        }

        .press-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.25rem;
          font-size: 0.875rem;
          color: var(--press-text-secondary, #737168);
          text-decoration: none;
          font-weight: 500;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.15s ease;
          outline: none;
        }

        .press-nav-link:hover,
        .press-nav-item:focus-within > .press-nav-link,
        .press-nav-item.is-active > .press-nav-link {
          color: var(--press-text-primary, #141413);
        }

        /* Anthropic Chevron Caret */
        .press-caret {
          width: 10px;
          height: 10px;
          display: inline-block;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          color: var(--press-text-muted, #9e9b91);
          transform-origin: center;
        }

        .press-nav-item:hover .press-caret,
        .press-nav-item:focus-within .press-caret,
        .press-nav-item.is-open .press-caret {
          transform: rotate(180deg);
          color: var(--press-text-primary, #141413);
        }

        /* Dropdown Panel */
        .press-dropdown {
          position: absolute;
          top: calc(100% + 0.35rem);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background-color: var(--dropdown-bg);
          border: 1px solid var(--nav-border);
          border-radius: var(--press-nav-dropdown-radius, 1rem);
          box-shadow: var(--press-nav-dropdown-shadow, 0 4px 6px rgba(0, 0, 0, 0.03), 0 16px 28px rgba(0, 0, 0, 0.06));
          padding: 1.25rem;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.18s;
          z-index: 100;
          white-space: nowrap;
        }

        .press-nav-item:hover .press-dropdown,
        .press-nav-item:focus-within .press-dropdown,
        .press-nav-item.is-open .press-dropdown {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .press-dropdown-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(210px, 1fr));
          gap: 1.5rem;
        }

        .press-dropdown-col {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .press-dropdown-heading {
          font-size: 0.6875rem;
          font-family: var(--press-font-mono, monospace);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--press-text-muted, #9e9b91);
          padding: 0 0.5rem 0.375rem 0.5rem;
          border-bottom: 1px solid var(--press-border-faded, rgba(20, 20, 19, 0.08));
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .press-dropdown-item {
          display: flex;
          flex-direction: column;
          padding: 0.45rem 0.55rem;
          border-radius: 6px;
          text-decoration: none;
          color: var(--press-text-primary, #141413);
          transition: background-color 0.12s ease;
        }

        .press-dropdown-item:hover {
          background-color: var(--press-bg-subtle, #f0ede4);
        }

        .press-dropdown-item-title {
          font-size: 0.8125rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .press-dropdown-item-desc {
          font-size: 0.7188rem;
          color: var(--press-text-secondary, #737168);
          margin-top: 0.1rem;
          white-space: normal;
        }

        /* Anthropic External Linkout Icon */
        .press-linkout {
          width: 9px;
          height: 9px;
          opacity: 0.5;
          transition: opacity 0.15s, transform 0.15s;
          flex-shrink: 0;
        }

        .press-dropdown-item:hover .press-linkout {
          opacity: 1;
          transform: translate(1px, -1px);
        }

        /* Actions Section: Combo Button & Theme Toggle */
        .press-actions-wrap {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        /* Anthropic Split Combo CTA Button */
        .press-combo-btn {
          display: inline-flex;
          align-items: stretch;
          height: 2.25rem;
          border-radius: 8px;
          background-color: var(--press-clay, #d97757);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
          transition: background-color 0.15s ease, transform 0.15s ease;
          position: relative;
        }

        .press-combo-btn:hover {
          background-color: var(--press-clay-hover, #c6613f);
        }

        .press-combo-main {
          display: inline-flex;
          align-items: center;
          padding: 0 0.875rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: -0.005em;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        .press-combo-divider {
          width: 1px;
          background-color: rgba(255, 255, 255, 0.22);
          align-self: stretch;
        }

        .press-combo-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          padding: 0;
          outline: none;
          transition: background-color 0.15s ease;
        }

        .press-combo-toggle:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }

        .press-combo-menu {
          position: absolute;
          top: calc(100% + 0.35rem);
          right: 0;
          min-width: 220px;
          background-color: var(--dropdown-bg);
          border: 1px solid var(--nav-border);
          border-radius: 10px;
          box-shadow: var(--press-nav-dropdown-shadow);
          padding: 0.5rem;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.15s ease, transform 0.15s ease;
          z-index: 120;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .press-combo-btn.is-active .press-combo-menu {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .press-combo-menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.45rem 0.6rem;
          font-size: 0.8125rem;
          color: var(--press-text-primary, #141413);
          text-decoration: none;
          border-radius: 6px;
          transition: background-color 0.12s;
        }

        .press-combo-menu-item:hover {
          background-color: var(--press-bg-subtle, #f0ede4);
        }

        /* Theme Toggle */
        .press-theme-toggle {
          width: 2.125rem;
          height: 2.125rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--nav-border);
          border-radius: 8px;
          color: var(--press-text-primary, #141413);
          cursor: pointer;
          transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
        }

        .press-theme-toggle:hover {
          background-color: var(--press-bg-subtle, #f0ede4);
          transform: rotate(15deg);
        }

        /* Anthropic Asymmetrical Hamburger Button */
        .press-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
          gap: var(--press-nav-hamburger-gap, 5px);
          color: var(--press-text-primary, #141413);
        }

        .press-hamburger-line {
          height: var(--press-nav-hamburger-thickness, 1.5px);
          background-color: currentColor;
          border-radius: 100px;
          transition: transform 0.2s ease, width 0.2s ease, opacity 0.2s ease;
        }

        .press-hamburger-line.line-1 { width: 1.5rem; }
        .press-hamburger-line.line-2 { width: 1.5rem; }
        .press-hamburger-line.line-3 { width: 1.0rem; }

        .press-hamburger.is-open .press-hamburger-line.line-1 {
          transform: translateY(6.5px) rotate(45deg);
          width: 1.4rem;
        }
        .press-hamburger.is-open .press-hamburger-line.line-2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .press-hamburger.is-open .press-hamburger-line.line-3 {
          transform: translateY(-6.5px) rotate(-45deg);
          width: 1.4rem;
        }

        /* Mobile Drawer */
        .press-mobile-drawer {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--nav-bg);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          padding: 1.25rem 1.5rem 2rem 1.5rem;
          flex-direction: column;
          gap: 1.25rem;
          max-height: calc(100vh - var(--nav-h));
          overflow-y: auto;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .press-mobile-drawer.is-open {
          display: flex;
        }

        .press-mobile-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .press-mobile-heading {
          font-size: 0.6875rem;
          font-family: var(--press-font-mono, monospace);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--press-text-muted, #9e9b91);
          margin-bottom: 0.25rem;
        }

        .press-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.25rem;
          font-size: 0.9375rem;
          color: var(--press-text-primary, #141413);
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid var(--press-border-faded, rgba(20, 20, 19, 0.06));
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .press-menu-desktop { display: none; }
          .press-hamburger { display: flex; }
          .press-subdomain-pill { display: none; }
          .press-combo-btn { display: none; }
        }
      </style>

      <div class="press-nav-wrapper">
        <!-- Anthropic-style Announcement Banner -->
        ${showBanner && !isBannerDismissed ? `
          <div class="press-banner" id="pressNavBanner">
            <div style="width: 1.5rem"></div>
            <a href="${bannerUrl}" class="press-banner-content">
              <span class="press-banner-tag">Dispatch</span>
              <span>${bannerText}</span>
              <span style="font-size: 0.9rem; margin-left: 2px">→</span>
            </a>
            <button class="press-banner-close" id="pressBannerClose" title="Dismiss notice" aria-label="Dismiss banner">
              <svg viewBox="0 0 14 14" width="12" height="12" fill="none">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        ` : ''}

        <!-- Main Navigation Bar -->
        <nav class="press-navbar">
          <div class="press-navbar-inner">
            
            <!-- Left: Brand Monogram & Domain Identity -->
            <a href="https://${rootDomain}" class="press-brand-wrap" title="Mohammed Ali — Systems & AI">
              <div class="press-monogram">✸</div>
              <div class="press-wordmark">
                <span class="press-name">Mohammed Ali</span>
                <span class="press-submark">Systems &amp; AI</span>
              </div>
              <div class="press-subdomain-pill">
                <span class="press-subdomain-dot"></span>
                <span>${currentSubdomain.id}.${rootDomain}</span>
              </div>
            </a>

            <!-- Middle: Dropdown Menus (Desktop) -->
            <ul class="press-menu-desktop">
              
              <!-- 1. Systems & Intelligence Dropdown -->
              <li class="press-nav-item">
                <button class="press-nav-link" aria-haspopup="true">
                  <span>Systems</span>
                  <svg viewBox="0 0 12 24" fill="none" class="press-caret">
                    <path d="M10.0477 9.21908C10.2289 9.01803 10.5399 9.00187 10.7412 9.18268C10.9424 9.36385 10.9587 9.67486 10.7776 9.87617L6.36391 14.7803L6.28729 14.8493C6.20426 14.9095 6.10327 14.9422 5.99898 14.9422C5.86007 14.9422 5.72699 14.8836 5.63405 14.7803L1.22035 9.87617L1.16192 9.79571C1.04669 9.59907 1.08075 9.34113 1.25675 9.18268C1.43286 9.02424 1.69301 9.01759 1.87647 9.15299L1.95022 9.21908L5.99898 13.7181L10.0477 9.21908Z" fill="currentColor"/>
                  </svg>
                </button>
                <div class="press-dropdown">
                  <div class="press-dropdown-grid">
                    <div class="press-dropdown-col">
                      <div class="press-dropdown-heading">Flagship Deployments</div>
                      <a href="https://github.com/karam4li/ktp_job_scraper" target="_blank" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>KTP Radar</span>
                          <svg viewBox="0 0 12 13" fill="none" class="press-linkout"><path d="M5.6 0.9C5.8 0.9 6 1.1 6 1.3V1.7H1.6C1.4 1.7 1.2 1.9 1.2 2.1V10.9C1.2 11.1 1.4 11.3 1.6 11.3H10.4C10.6 11.3 10.8 11.1 10.8 10.9V6.9C10.8 6.7 11 6.5 11.2 6.5C11.4 6.5 11.6 6.7 11.6 6.9V10.9C11.6 11.6 11.1 12.1 10.4 12.1H1.6C0.9 12.1 0.4 11.6 0.4 10.9V2.1C0.4 1.4 0.9 0.9 1.6 0.9H5.6ZM11.2 0.9C11.3 0.9 11.4 0.9 11.5 1L11.5 1.1C11.6 1.2 11.6 1.2 11.6 1.3V4.5C11.6 4.7 11.4 4.9 11.2 4.9C11 4.9 10.8 4.7 10.8 4.5V2.3L7.5 5.6C7.3 5.7 7.1 5.7 6.9 5.6C6.8 5.4 6.8 5.2 6.9 5L10.2 1.7H8C7.8 1.7 7.6 1.5 7.6 1.3C7.6 1.1 7.8 0.9 8 0.9H11.2Z" fill="currentColor"/></svg>
                        </div>
                        <div class="press-dropdown-item-desc">UK Global Talent Visa screening &amp; KTP scraper</div>
                      </a>
                      <a href="#systems" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>DentalOS EMPI</span>
                        </div>
                        <div class="press-dropdown-item-desc">Master Patient Index &amp; vector AI data layer</div>
                      </a>
                      <a href="https://github.com/karam4li/portfolio" target="_blank" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>Volatile Stock Discovery</span>
                          <svg viewBox="0 0 12 13" fill="none" class="press-linkout"><path d="M5.6 0.9C5.8 0.9 6 1.1 6 1.3V1.7H1.6C1.4 1.7 1.2 1.9 1.2 2.1V10.9C1.2 11.1 1.4 11.3 1.6 11.3H10.4C10.6 11.3 10.8 11.1 10.8 10.9V6.9C10.8 6.7 11 6.5 11.2 6.5C11.4 6.5 11.6 6.7 11.6 6.9V10.9C11.6 11.6 11.1 12.1 10.4 12.1H1.6C0.9 12.1 0.4 11.6 0.4 10.9V2.1C0.4 1.4 0.9 0.9 1.6 0.9H5.6ZM11.2 0.9C11.3 0.9 11.4 0.9 11.5 1L11.5 1.1C11.6 1.2 11.6 1.2 11.6 1.3V4.5C11.6 4.7 11.4 4.9 11.2 4.9C11 4.9 10.8 4.7 10.8 4.5V2.3L7.5 5.6C7.3 5.7 7.1 5.7 6.9 5.6C6.8 5.4 6.8 5.2 6.9 5L10.2 1.7H8C7.8 1.7 7.6 1.5 7.6 1.3C7.6 1.1 7.8 0.9 8 0.9H11.2Z" fill="currentColor"/></svg>
                        </div>
                        <div class="press-dropdown-item-desc">Quantitative 10x breakout screener</div>
                      </a>
                    </div>
                    <div class="press-dropdown-col">
                      <div class="press-dropdown-heading">Pipelines &amp; Automation</div>
                      <a href="https://github.com/yes-parquet/bigspark_final_round" target="_blank" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>BigSpark Analytics</span>
                          <svg viewBox="0 0 12 13" fill="none" class="press-linkout"><path d="M5.6 0.9C5.8 0.9 6 1.1 6 1.3V1.7H1.6C1.4 1.7 1.2 1.9 1.2 2.1V10.9C1.2 11.1 1.4 11.3 1.6 11.3H10.4C10.6 11.3 10.8 11.1 10.8 10.9V6.9C10.8 6.7 11 6.5 11.2 6.5C11.4 6.5 11.6 6.7 11.6 6.9V10.9C11.6 11.6 11.1 12.1 10.4 12.1H1.6C0.9 12.1 0.4 11.6 0.4 10.9V2.1C0.4 1.4 0.9 0.9 1.6 0.9H5.6ZM11.2 0.9C11.3 0.9 11.4 0.9 11.5 1L11.5 1.1C11.6 1.2 11.6 1.2 11.6 1.3V4.5C11.6 4.7 11.4 4.9 11.2 4.9C11 4.9 10.8 4.7 10.8 4.5V2.3L7.5 5.6C7.3 5.7 7.1 5.7 6.9 5.6C6.8 5.4 6.8 5.2 6.9 5L10.2 1.7H8C7.8 1.7 7.6 1.5 7.6 1.3C7.6 1.1 7.8 0.9 8 0.9H11.2Z" fill="currentColor"/></svg>
                        </div>
                        <div class="press-dropdown-item-desc">Polars &amp; DuckDB data cleaning engine</div>
                      </a>
                      <a href="#systems" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>VFS Visa Autobooker</span>
                        </div>
                        <div class="press-dropdown-item-desc">Playwright automated reschedule bot</div>
                      </a>
                      <a href="#systems" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>LangGraph Compliance</span>
                        </div>
                        <div class="press-dropdown-item-desc">ReAct agent with PySpark ETL workflows</div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <!-- 2. Research & Models Dropdown -->
              <li class="press-nav-item">
                <button class="press-nav-link" aria-haspopup="true">
                  <span>Research</span>
                  <svg viewBox="0 0 12 24" fill="none" class="press-caret">
                    <path d="M10.0477 9.21908C10.2289 9.01803 10.5399 9.00187 10.7412 9.18268C10.9424 9.36385 10.9587 9.67486 10.7776 9.87617L6.36391 14.7803L6.28729 14.8493C6.20426 14.9095 6.10327 14.9422 5.99898 14.9422C5.86007 14.9422 5.72699 14.8836 5.63405 14.7803L1.22035 9.87617L1.16192 9.79571C1.04669 9.59907 1.08075 9.34113 1.25675 9.18268C1.43286 9.02424 1.69301 9.01759 1.87647 9.15299L1.95022 9.21908L5.99898 13.7181L10.0477 9.21908Z" fill="currentColor"/>
                  </svg>
                </button>
                <div class="press-dropdown">
                  <div class="press-dropdown-grid">
                    <div class="press-dropdown-col">
                      <div class="press-dropdown-heading">Scientific Focus</div>
                      <a href="#research" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>GAN Cloud Removal</span>
                        </div>
                        <div class="press-dropdown-item-desc">Strathclyde CIS MSc Distinction Thesis</div>
                      </a>
                      <a href="#research" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>Vector Search &amp; HNSW</span>
                        </div>
                        <div class="press-dropdown-item-desc">High-dimensional similarity indexing</div>
                      </a>
                    </div>
                    <div class="press-dropdown-col">
                      <div class="press-dropdown-heading">Subdomains</div>
                      <a href="https://research.${rootDomain}" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>research.${rootDomain}</span>
                        </div>
                        <div class="press-dropdown-item-desc">Theoretical papers &amp; monographs</div>
                      </a>
                      <a href="https://models.${rootDomain}" class="press-dropdown-item">
                        <div class="press-dropdown-item-title">
                          <span>models.${rootDomain}</span>
                        </div>
                        <div class="press-dropdown-item-desc">Model registry &amp; inference checkpoints</div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <!-- 3. Subdomains Hub -->
              <li class="press-nav-item">
                <button class="press-nav-link" aria-haspopup="true">
                  <span>Ecosystem</span>
                  <svg viewBox="0 0 12 24" fill="none" class="press-caret">
                    <path d="M10.0477 9.21908C10.2289 9.01803 10.5399 9.00187 10.7412 9.18268C10.9424 9.36385 10.9587 9.67486 10.7776 9.87617L6.36391 14.7803L6.28729 14.8493C6.20426 14.9095 6.10327 14.9422 5.99898 14.9422C5.86007 14.9422 5.72699 14.8836 5.63405 14.7803L1.22035 9.87617L1.16192 9.79571C1.04669 9.59907 1.08075 9.34113 1.25675 9.18268C1.43286 9.02424 1.69301 9.01759 1.87647 9.15299L1.95022 9.21908L5.99898 13.7181L10.0477 9.21908Z" fill="currentColor"/>
                  </svg>
                </button>
                <div class="press-dropdown" style="min-width: 260px;">
                  <div class="press-dropdown-col">
                    <div class="press-dropdown-heading">Subdomain Directory</div>
                    ${subdomains
                      .filter(s => s.id !== activeId)
                      .slice(0, 6)
                      .map(s => `
                        <a href="${s.url}" class="press-dropdown-item">
                          <div class="press-dropdown-item-title">
                            <span>${s.label}</span>
                            <span style="font-family: var(--press-font-mono, monospace); font-size: 0.6875rem; color: var(--press-text-muted);">${s.id}</span>
                          </div>
                          <div class="press-dropdown-item-desc">${s.desc}</div>
                        </a>
                      `).join('')}
                  </div>
                </div>
              </li>

              <!-- 4. Experience & CV -->
              <li class="press-nav-item">
                <a href="#experience" class="press-nav-link">
                  <span>Experience</span>
                </a>
              </li>

            </ul>

            <!-- Right: Split Combo Button & Theme Switcher -->
            <div class="press-actions-wrap">
              
              <!-- Anthropic Split Combo CTA Button -->
              <div class="press-combo-btn" id="pressComboBtn">
                <a href="#systems" class="press-combo-main">
                  <span>Explore Systems</span>
                </a>
                <div class="press-combo-divider"></div>
                <button class="press-combo-toggle" id="pressComboToggle" title="Quick navigation menu" aria-label="Open quick menu">
                  <svg viewBox="0 0 12 24" fill="none" style="width: 10px; height: 10px;">
                    <path d="M10.0477 9.21908C10.2289 9.01803 10.5399 9.00187 10.7412 9.18268C10.9424 9.36385 10.9587 9.67486 10.7776 9.87617L6.36391 14.7803L6.28729 14.8493C6.20426 14.9095 6.10327 14.9422 5.99898 14.9422C5.86007 14.9422 5.72699 14.8836 5.63405 14.7803L1.22035 9.87617L1.16192 9.79571C1.04669 9.59907 1.08075 9.34113 1.25675 9.18268C1.43286 9.02424 1.69301 9.01759 1.87647 9.15299L1.95022 9.21908L5.99898 13.7181L10.0477 9.21908Z" fill="currentColor"/>
                  </svg>
                </button>
                <div class="press-combo-menu">
                  <a href="https://github.com/karam4li" target="_blank" class="press-combo-menu-item">
                    <span>GitHub Monorepos</span>
                    <svg viewBox="0 0 12 13" fill="none" class="press-linkout"><path d="M5.6 0.9C5.8 0.9 6 1.1 6 1.3V1.7H1.6C1.4 1.7 1.2 1.9 1.2 2.1V10.9C1.2 11.1 1.4 11.3 1.6 11.3H10.4C10.6 11.3 10.8 11.1 10.8 10.9V6.9C10.8 6.7 11 6.5 11.2 6.5C11.4 6.5 11.6 6.7 11.6 6.9V10.9C11.6 11.6 11.1 12.1 10.4 12.1H1.6C0.9 12.1 0.4 11.6 0.4 10.9V2.1C0.4 1.4 0.9 0.9 1.6 0.9H5.6ZM11.2 0.9C11.3 0.9 11.4 0.9 11.5 1L11.5 1.1C11.6 1.2 11.6 1.2 11.6 1.3V4.5C11.6 4.7 11.4 4.9 11.2 4.9C11 4.9 10.8 4.7 10.8 4.5V2.3L7.5 5.6C7.3 5.7 7.1 5.7 6.9 5.6C6.8 5.4 6.8 5.2 6.9 5L10.2 1.7H8C7.8 1.7 7.6 1.5 7.6 1.3C7.6 1.1 7.8 0.9 8 0.9H11.2Z" fill="currentColor"/></svg>
                  </a>
                  <a href="./Resume - Mohammed Ali.docx" class="press-combo-menu-item" download>
                    <span>Download Master CV (.docx)</span>
                  </a>
                  <a href="mailto:ali207715@gmail.com" class="press-combo-menu-item">
                    <span>Direct Correspondence</span>
                  </a>
                </div>
              </div>

              <!-- Theme Switcher -->
              <button class="press-theme-toggle" id="pressThemeToggle" title="Toggle color scheme" aria-label="Toggle theme">
                <svg id="themeIconSun" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg id="themeIconMoon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </button>

              <!-- Anthropic Asymmetrical Hamburger (Mobile) -->
              <button class="press-hamburger" id="pressHamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span class="press-hamburger-line line-1"></span>
                <span class="press-hamburger-line line-2"></span>
                <span class="press-hamburger-line line-3"></span>
              </button>

            </div>

          </div>

          <!-- Mobile Drawer Container -->
          <div class="press-mobile-drawer" id="pressMobileDrawer">
            <div class="press-mobile-section">
              <div class="press-mobile-heading">Systems &amp; Applications</div>
              <a href="https://github.com/karam4li/ktp_job_scraper" target="_blank" class="press-mobile-link">
                <span>KTP Radar (UK Visa Screener)</span>
                <span style="font-size: 0.8rem">↗</span>
              </a>
              <a href="#systems" class="press-mobile-link">
                <span>DentalOS EMPI &amp; AI Layer</span>
              </a>
              <a href="https://github.com/karam4li/portfolio" target="_blank" class="press-mobile-link">
                <span>Volatile Stock Screener</span>
                <span style="font-size: 0.8rem">↗</span>
              </a>
              <a href="https://github.com/yes-parquet/bigspark_final_round" target="_blank" class="press-mobile-link">
                <span>BigSpark Analytics Challenge</span>
                <span style="font-size: 0.8rem">↗</span>
              </a>
            </div>

            <div class="press-mobile-section">
              <div class="press-mobile-heading">Sections</div>
              <a href="#systems" class="press-mobile-link">
                <span>Flagship Systems</span>
              </a>
              <a href="#experience" class="press-mobile-link">
                <span>Career Timeline</span>
              </a>
              <a href="#research" class="press-mobile-link">
                <span>Research Publications</span>
              </a>
              <a href="#stack" class="press-mobile-link">
                <span>Technical Stack</span>
              </a>
            </div>

            <div class="press-mobile-section" style="margin-top: 0.5rem;">
              <a href="#systems" class="press-combo-main" style="background-color: var(--press-clay, #d97757); border-radius: 8px; justify-content: center; height: 2.5rem;">
                Explore Systems &amp; Code
              </a>
            </div>
          </div>

        </nav>
      </div>
    `;

    // 1. Theme Switcher Logic
    const themeBtn = this.querySelector('#pressThemeToggle');
    const sunIcon = this.querySelector('#themeIconSun');
    const moonIcon = this.querySelector('#themeIconMoon');

    const updateThemeIcons = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
                     document.documentElement.getAttribute('data-theme') === 'dark';
      if (sunIcon && moonIcon) {
        sunIcon.style.display = isDark ? 'block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'block';
      }
    };

    updateThemeIcons();

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('press-theme', isDark ? 'dark' : 'light');
        updateThemeIcons();
      });
    }

    // 2. Banner Dismissal Logic
    const bannerClose = this.querySelector('#pressBannerClose');
    const banner = this.querySelector('#pressNavBanner');
    if (bannerClose && banner) {
      bannerClose.addEventListener('click', () => {
        banner.classList.add('is-hidden');
        sessionStorage.setItem(bannerStorageKey, 'true');
      });
    }

    // 3. Split Combo Button Dropdown
    const comboBtn = this.querySelector('#pressComboBtn');
    const comboToggle = this.querySelector('#pressComboToggle');
    if (comboBtn && comboToggle) {
      comboToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        comboBtn.classList.toggle('is-active');
      });

      document.addEventListener('click', (e) => {
        if (!comboBtn.contains(e.target)) {
          comboBtn.classList.remove('is-active');
        }
      });
    }

    // 4. Mobile Drawer & Hamburger
    const hamburger = this.querySelector('#pressHamburger');
    const drawer = this.querySelector('#pressMobileDrawer');
    if (hamburger && drawer) {
      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('is-open');
        drawer.classList.toggle('is-open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  }
}

if (!customElements.get('press-nav')) {
  customElements.define('press-nav', PressNav);
}
