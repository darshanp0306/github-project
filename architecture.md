# Architecture

## Overview

This portfolio is a **zero-dependency static site** — no frameworks, no build tools, no npm. It runs entirely in the browser with plain HTML, CSS, and vanilla JavaScript.

```
sachithr19-007.github.io/github-project/
│
├── index.html       # Entire site markup (single-page)
├── style.css        # All styles — layout, theme, animations
├── script.js        # Scroll reveal, nav highlight, form validation, hamburger menu
└── README.md        # Project overview and deployment guide
```

## Single-Page Architecture

The site uses an **anchor-based single-page layout**. All sections live in `index.html` and are navigated via `#id` links. There is no routing library — the browser handles scrolling natively.

```
#home      →  Hero section
#about     →  About + stats grid
#projects  →  Project cards grid
#skills    →  Skills grid
#contact   →  Contact form + links
```

## JavaScript Responsibilities (`script.js`)

| Feature | Mechanism |
|---|---|
| Scroll reveal animations | `IntersectionObserver` watching `.reveal` elements |
| Active nav link highlight | `scroll` event + `getBoundingClientRect()` |
| Hamburger mobile menu | Toggle CSS class on `#mobile-menu` |
| Contact form validation | Native constraint validation API + custom error display |
| Back-to-top button visibility | `scroll` event threshold check |
| Footer year | `new Date().getFullYear()` injected into `#year` span |

## Styling Architecture (`style.css`)

Styles are organised in a top-down cascade matching document flow:

1. **CSS Custom Properties** — single source of truth for colours, spacing, and typography
2. **Reset / Base** — box-sizing, margin resets, smooth scroll
3. **Utility classes** — `.container`, `.btn`, `.section-label`, `.reveal`
4. **Component blocks** — navbar, hero, about, projects, skills, contact, footer
5. **Media queries** — mobile-first breakpoints at `768px` and `480px`

## Data Flow

There is no backend. The contact form performs **client-side validation only** — no email is actually sent in the current implementation. To wire it up:

- Drop in [EmailJS](https://www.emailjs.com/) (no server needed), or
- Add a [Formspree](https://formspree.io/) `action` attribute to the form, or
- Build a small Node/Express endpoint and POST to it via `fetch()`

## Deployment

Hosted on **GitHub Pages** (static file hosting). On every push to `main`, GitHub serves the root `index.html` directly — no CI pipeline required.

```
Push to main  →  GitHub Pages picks up changes  →  Live in ~60s
```

## Design Decisions

**Why no framework?**
Zero build overhead. The site loads instantly, scores near-perfect on Lighthouse, and is trivially portable — just open `index.html`.

**Why a single HTML file?**
Keeps the codebase flat and easy to scan. All content is co-located, which speeds up editing and removes the risk of broken asset paths.

**Why CSS custom properties instead of a preprocessor?**
Native variables are supported in all modern browsers and require no compilation step, keeping the toolchain at zero.
