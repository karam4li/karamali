# karamali.org — Official Hub & Design System

The unified repository for **[karamali.org](https://karamali.org)**, featuring Mohammed Ali's personal portfolio, the complete **Quiet Press** design system, design tokens, and subdomain application templates.

## Structure

```
karamali/
├── index.html            # Main apex landing page (karamali.org portfolio)
├── style.css             # The Quiet Press design system styles
├── script.js             # Portfolio logic, telemetry, and live Glasgow time
├── data.js               # Repository & systems dataset
├── ecosystem-nav.js      # Universal <press-nav> header web component
├── DESIGN.md             # The Quiet Press manifesto & token specifications
├── tokens/               # Canonical tokens (W3C JSON, CSS Variables, Mobile TS)
│   ├── tokens.json
│   ├── variables.css
│   └── mobile.ts
├── tailwind/             # Tailwind CSS preset for any web project
│   └── preset.js
└── subdomains/           # Subdomain application templates
    ├── index.html        # Multi-product gallery
    ├── blog.html         # research.karamali.org
    ├── resume.html       # cv.karamali.org
    ├── crud.html         # models.karamali.org
    └── mobile-app.html   # mobile.karamali.org
```

## Design Philosophy: "The Quiet Press"
* **Base Surfaces:** Ivory Cream (`#faf9f5`) in Light mode; Slate Ink (`#141413`) in Dark mode.
* **Primary Accent:** Sky Blue (`#0284c7` in Light, `#38bdf8` in Dark).
* **Typography:** Newsreader Serif + Inter Sans + JetBrains Mono.
* **DNS & Hosting:** Managed on Cloudflare with automated Universal SSL (`*.karamali.org`).

## Quickstart

* **Open locally:** Double-click `index.html` in your browser.
* **Subdomain Templates:** Inspect any template inside `subdomains/`.
* **Deploy to Cloudflare Pages:** Connect this repository directly to Cloudflare Pages for instant global deployment.
