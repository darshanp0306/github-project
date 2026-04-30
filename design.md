# Design System

## Typography

Two Google Fonts are used — chosen for their editorial contrast:

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headings | **Fraunces** | 300, 700 (italic 400) | Hero title, section headings, logo |
| Body / UI | **DM Sans** | 300, 400, 500 | Paragraphs, labels, nav links, buttons |

Fraunces is an optical-size variable serif with a distinctive ink-trap aesthetic — it gives the hero title personality without being decorative. DM Sans keeps body copy clean and legible at small sizes.

## Colour Palette

All colours are defined as CSS custom properties on `:root` for easy global theming.

```css
/* Adjust these in style.css to retheme the entire site */
--clr-bg:        /* page background  */
--clr-surface:   /* card / form backgrounds */
--clr-text:      /* primary body text */
--clr-muted:     /* secondary / caption text */
--clr-accent:    /* brand accent — used on links, dots, hover states */
--clr-border:    /* card and input borders */
```

To switch to a dark theme, only these six variables need to change.

## Spacing Scale

Consistent spacing uses a loose 8-point grid. Typical values in use:

| Token | Value | Used for |
|---|---|---|
| `--gap-xs` | 4–8px | Icon gaps, pill padding |
| `--gap-sm` | 12–16px | Form group spacing |
| `--gap-md` | 24–32px | Card internal padding |
| `--gap-lg` | 48–64px | Section top/bottom padding |
| `--gap-xl` | 80–120px | Hero vertical breathing room |

## Component Inventory

### Navbar
- Sticky on scroll with a subtle backdrop blur
- Logo uses accent colour on the trailing dot `.`
- Desktop: horizontal link list | Mobile: full-width dropdown slide-in

### Hero
- Full-viewport-height section
- Badge pill with a pulsing green dot signals availability status
- Title uses Fraunces italic `<em>` for the second line — creates visual rhythm
- Two CTA buttons: primary (filled) + outline

### About Grid
- Two-column CSS Grid: text left, stat boxes right
- Stat boxes use large typographic numbers as the focal point
- Skill pills are inline-flex tags with border and hover lift

### Project Cards
- CSS Grid auto-fill with `minmax(300px, 1fr)` — naturally responsive
- Card anatomy: icon + links header → title → description → tag strip
- Hover: subtle `translateY(-4px)` lift with shadow deepening

### Skills Grid
- Icon + name + level label layout in a tight horizontal card
- Same grid pattern as projects — consistent visual language

### Contact Section
- Two-column split: copy + social links left, form right
- Form fields use `:focus` ring in accent colour
- Inline validation error message via `#form-msg`

### Footer
- Minimal single-row with copyright left, links right

## Animation System

All scroll-triggered animations use a single `.reveal` class:

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
```

`IntersectionObserver` in `script.js` adds `.visible` when an element enters the viewport. Staggered delays are applied to grid children via `nth-child` selectors to create a cascade effect.

## Responsive Breakpoints

| Breakpoint | Layout changes |
|---|---|
| `> 768px` | Two-column about grid, multi-column project/skills grid, horizontal nav |
| `≤ 768px` | Stacked about grid, hamburger menu, single-column project cards |
| `≤ 480px` | Reduced hero font sizes, tighter section padding |

## Iconography

No icon library is used. Icons are Unicode characters or emoji chosen for zero-dependency simplicity:

- `↗` — external link
- `</>`  — GitHub code link
- `✉` — email
- Emoji (🤝 🧠 📊 etc.) — project card identifiers

To upgrade to a proper icon set, swap in [Lucide](https://lucide.dev/) or [Heroicons](https://heroicons.com/) SVG sprites with no other changes needed.
