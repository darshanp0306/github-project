# Interface Guide

A section-by-section walkthrough of every interactive element in the portfolio — what it does, how it works, and how to customise it.

---

## Navigation

### Desktop Nav
- All four links (`About`, `Projects`, `Skills`, `Contact`) scroll to their section via anchor links.
- The active link is highlighted based on which section is currently in view — driven by a `scroll` event listener in `script.js`.

### Mobile Hamburger Menu
- Visible below `768px`.
- Tapping the `☰` button toggles the `#mobile-menu` dropdown.
- Each menu link calls `closeMobile()` to dismiss the menu after navigation.

**To add a new nav link:**
1. Add `<li><a href="#newsection">Label</a></li>` inside `.nav-links`
2. Add the matching `<a href="#newsection" onclick="closeMobile()">Label</a>` inside `#mobile-menu`
3. Add the corresponding `<section id="newsection">` in `index.html`

---

## Hero Section

| Element | Purpose |
|---|---|
| Badge pill | Signals availability — update the text to reflect your current status |
| `<em>` in title | Italic serif styling via Fraunces — keep the second line short for impact |
| "View Projects" button | Scrolls to `#projects` |
| "Get In Touch" button | Scrolls to `#contact` |

**To update availability status:**
```html
<!-- index.html, inside .hero-badge -->
<span class="dot"></span>
Open to Internships &amp; Collaborations  ← edit this text
```

---

## About Section

### Stat Boxes
Four `.stat-box` elements display key numbers. Update these to reflect your real stats:

```html
<div class="stat-box">
  <span class="stat-num">12+</span>       ← your number
  <span class="stat-lbl">Projects Built</span>  ← your label
</div>
```

### Skill Pills
Inline tags in `.skills-list`. Add or remove `<span class="skill-pill">` elements freely — the flex layout wraps them automatically.

---

## Project Cards

Each card follows this structure:

```html
<article class="project-card reveal">
  <div class="card-head">
    <div class="card-icon">🤝</div>          <!-- emoji or SVG icon -->
    <div class="card-links">
      <a href="GITHUB_URL">&#60;/&#62;</a>   <!-- link to repo -->
      <a href="LIVE_URL">↗</a>              <!-- link to live demo -->
    </div>
  </div>
  <h3 class="card-title">Project Name</h3>
  <p class="card-desc">One or two sentence description.</p>
  <div class="card-tags">
    <span class="tag">React</span>
    <!-- add as many tags as needed -->
  </div>
</article>
```

**To add a new project:** copy one `<article>` block and paste it inside `.projects-grid`. The CSS Grid handles layout automatically.

**To remove a project:** delete the corresponding `<article>` block. The grid reflows.

---

## Skills Section

Each skill card:

```html
<div class="skill-card reveal">
  <span class="skill-icon">⚛️</span>
  <div>
    <div class="skill-name">React</div>
    <div class="skill-level">Frontend</div>   <!-- category label -->
  </div>
</div>
```

Add, remove, or reorder cards freely — the grid auto-fills columns based on available width.

---

## Contact Form

The form (`#contact-form`) performs **client-side validation only** — all three fields (name, email, message) are `required`.

### Current behaviour
- Empty submission → inline error message shown in `#form-msg`
- Valid submission → success message shown, form fields reset

### Wiring up real email delivery

**Option A — Formspree (easiest, no code):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
```
Sign up at [formspree.io](https://formspree.io), create a form, paste the ID above.

**Option B — EmailJS (no backend, JS only):**
```js
// In script.js, inside the form submit handler:
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { name, email, message });
```
Add the EmailJS CDN script to `index.html` and configure your service at [emailjs.com](https://www.emailjs.com).

**Option C — Custom backend:**
```js
// Replace the mock submit logic in script.js with:
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});
```

### Updating contact links

```html
<!-- index.html, inside .contact-links -->
<a href="mailto:your@email.com" class="contact-link">
  <span class="icon">✉</span> your@email.com
</a>
<a href="https://github.com/yourusername" ...>...</a>
<a href="https://linkedin.com/in/yourhandle" ...>...</a>
```

---

## Scroll Reveal Animations

Any element with the class `reveal` starts invisible and fades up when it enters the viewport.

```html
<div class="reveal">This will animate in on scroll.</div>
```

The `IntersectionObserver` in `script.js` adds the class `visible` when the element crosses the viewport threshold (`rootMargin: '0px 0px -60px 0px'`). To disable animation on a specific element, remove the `reveal` class.

---

## Back-to-Top Button

The `#backTop` button appears after the user scrolls past `400px`. Clicking it calls `scrollToTop()` which uses `window.scrollTo({ top: 0, behavior: 'smooth' })`.

The scroll threshold can be adjusted in `script.js`:
```js
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400); // ← change 400
});
```

---

## Footer

```html
<span class="footer-copy">© <span id="year"></span> Sach — Built with HTML &amp; CSS</span>
```

`#year` is populated automatically by `script.js` with `new Date().getFullYear()` — no manual updates needed.

Update `Sach` to your name and the tagline text as desired.
