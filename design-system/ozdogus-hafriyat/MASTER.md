# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/ozdogus-hafriyat/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> **Source of truth in code:** `src/styles/global.css` (`:root` tokens). Keep this file and the CSS in sync.

---

**Project:** Ozdogus Hafriyat
**Version:** v2 — Modern & Şık (approved by client, 2026-10-03)
**Replaces:** v1 "Şantiye Föyü" (Brutalism, variance 9) — rejected by client, do not reuse
**Category:** Construction / Excavation (local service business)
**Design Dials:** Variance 4/10 (Balanced / Modern) | Motion 5/10 (Standard) | Density 3/10 (Spacious)
**Skill inputs:** `ui-ux-pro-max` typography match "Geometric Modern" (Outfit + Work Sans); colors taken from the company logo

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Dark surface (hero, footer) | `#06121F` | `--navy-950` |
| Dark section | `#0A1C30` | `--navy-900` |
| Dark card / image fallback | `#0F2A47` | `--navy-800` |
| Brand (logo blue) | `#13508C` | `--brand` |
| Brand tint | `#EEF4FA` | `--brand-50` |
| Accent / CTA (logo orange) | `#F28A2E` | `--accent` |
| On Accent | `#06121F` | (dark text on orange) |
| Accent text on light bg | `#A8520B` | `--accent-ink` |
| Background | `#F6F4F0` | `--bg` |
| Surface / Card | `#FFFFFF` | `--surface` |
| Heading text | `#0E1726` | `--ink` |
| Body text | `#2A3443` | `--text` |
| Muted text | `#5D6878` | `--muted` |
| Border | `#E4E0D8` | `--line` |
| Border strong | `#D3CEC4` | `--line-strong` |
| Error | `#B42318` | — |

**Color rules**
- Orange is an accent only: CTAs, eyebrows, key words in headlines, icons on dark. Never large orange surfaces.
- Never white text on orange (fails contrast). Use dark navy text on `--accent`.
- On light backgrounds, orange text must use `--accent-ink`.
- Dark sections set `--focus: var(--accent)` so focus rings stay visible.

### Typography

- **Heading Font:** Outfit 500–600, letter-spacing −0.025em (hero −0.035em)
- **Body Font:** Work Sans 400–600, 17px base, line-height 1.65
- **Mood:** geometric, modern, clean, confident — Outfit's rounded geometry echoes the "ÖD" logo mark
- **Subsets:** latin-ext required (Turkish: ç ğ ı İ ö ş ü)
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Work+Sans:wght@400;500;600&display=swap`

| Style | Size | Notes |
|-------|------|-------|
| Hero h1 | `clamp(2.8rem, 7.2vw, 6rem)` / 1.0 | max ~14ch, one phrase in `--accent` |
| `.h1` page title | `clamp(2.6rem, 6.4vw, 5.2rem)` / 1.02 | |
| `.h2` section | `clamp(2rem, 4.2vw, 3.4rem)` / 1.06 | `text-wrap: balance` |
| `.h3` | `clamp(1.3rem, 2vw, 1.6rem)` / 1.2 | |
| `.eyebrow` | 0.82rem, 600, uppercase, 0.14em tracking | leading 22px line, `--accent-ink` |
| `.lead` | `clamp(1.1rem, 1.5vw, 1.25rem)` | `--muted`, max 58ch |
| `.statement` | `clamp(1.55rem, 2.8vw, 2.25rem)` | Outfit 500, muted `<em>` for contrast |

### Spacing & Layout

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--gutter` | `clamp(20px, 5vw, 56px)` | Page side padding |
| `--maxw` | `1280px` | Content width |
| `--header-h` | `84px` | Fixed header height |
| `.sec` | `clamp(72px, 10vw, 136px)` block padding | Standard section |
| `.sec--sm` | `clamp(48px, 6vw, 80px)` | CTA band, compact sections |
| Section head gap | `clamp(40px, 5vw, 64px)` below | |

### Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--r-sm` | `10px` | Inputs, spec cells |
| `--r` | `18px` | FAQ items, contact cards, stat boxes |
| `--r-lg` | `28px` | Cards, tiles, calculator, CTA panel, figures |
| `--r-pill` | `999px` | Buttons, chips, pills, mobile action bar |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(14,23,38,.06), 0 2px 8px -2px rgba(14,23,38,.06)` | Resting cards, open FAQ |
| `--shadow` | `0 1px 2px rgba(14,23,38,.05), 0 18px 40px -18px rgba(14,23,38,.22)` | Hover lift, calculator |
| `--shadow-lg` | `0 30px 80px -30px rgba(6,18,31,.45)` | Floating mobile action bar |

---

## Component Specs

### Buttons (pill)

```css
.btn { min-height: 52px; padding: 12px 24px; border-radius: 999px; font: 600 1rem 'Outfit';
       border: 1px solid var(--bd); transition: transform 220ms var(--ease), box-shadow 220ms var(--ease); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow); }   /* trailing arrow nudges 3px right */
.btn--accent { background: #F28A2E; color: #06121F; }                   /* primary CTA */
.btn--glass  { background: rgba(255,255,255,.1); color: #fff; border-color: rgba(255,255,255,.28); backdrop-filter: blur(10px); } /* on photos/dark */
.btn--dark   { background: #0A1C30; color: #fff; }
.btn--lg     { min-height: 58px; padding-inline: 30px; }
```

### Header
- Fixed; transparent with white logo over the dark hero/page-hero.
- After 24px scroll → `.is-solid`: `rgba(255,255,255,.92)` + `blur(16px)`, colour logo, dark nav text.
- Desktop (≥1080px): nav pills + phone (glass) + "Teklif Al" (accent). Mobile: round menu button → full-screen navy drawer.

### Hero (home)
- Full-bleed photo, `min-height: min(100svh, 920px)`, content bottom-aligned.
- Overlay: left→right navy gradient (.9 → .1) + bottom gradient for text legibility.
- Slow 14s zoom-out on load (disabled under reduced motion).
- Trust badges row under CTAs, divided by hairlines.

### Page hero (inner pages)
- Photo + navy overlay (`.94 → .45`), or `--plain` radial navy gradient when no photo.
- Breadcrumbs → eyebrow → h1; lead on the right column at ≥960px.

### Service bento (`.bento` / `.tile`)
- ≥1080px: 4 columns, 270px rows. Layout: `[1 1 2 2] [1 1 3 4] [5 5 6 6]` — no empty cells.
- Photo tile, bottom gradient overlay, number pill top-left, white arrow circle top-right (turns orange and rotates −45° on hover), image scales 1.06 on hover.

### Cards (`.card`)
```css
.card { background: #fff; border: 1px solid #E4E0D8; border-radius: 28px; overflow: hidden; }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.card__media { aspect-ratio: 16 / 10; }   /* image scales 1.05 on hover */
```
- Spec grid: 3 columns of light cells (`--bg`), label 0.75rem muted + value Outfit 600.
- No photo → `.card__placeholder` (brand→navy radial gradient + white logo mark).
- Sample data → `.pill--warn` "Örnek kayıt".

### Inputs
```css
.input { min-height: 54px; padding: 14px 16px; border: 1px solid #D3CEC4; border-radius: 10px; }
.input:focus { border-color: #13508C; box-shadow: 0 0 0 4px rgba(19,80,140,.16); }
.input[aria-invalid='true'] { border-color: #C4321F; box-shadow: 0 0 0 4px rgba(196,50,31,.1); }
```
- Visible labels above fields; inline error under the field (`aria-describedby`); focusable error summary on submit.
- Choice chips: pill, 44px min height; checked = navy fill, white text, orange sub-label.

### Calculator
- Two panels in one rounded card: inputs on white, results on navy with radial brand glow.
- Result numbers Outfit 600; truck trips highlighted in `--accent` at the largest size.

### FAQ
- Separate rounded items (`--r`), "+" circle rotates to "×" and turns orange when open.

### CTA panel
- Rounded (`--r-lg`) photo panel inside the content width, navy overlay, eyebrow + h2 left, accent + glass buttons right.

### Mobile action bar
- Floating pill 12px from the edges and bottom, translucent navy + blur: Ara · WhatsApp · Teklif Al (accent). Hidden ≥1080px.

---

## Imagery

- Real photography only (no illustrations, no emoji, no clip-art).
- Current set: CC0 photos via Openverse (sources in `docs/photo-credits.json`), 1024px watermark-free versions, WebP with 800/1024 `srcset`.
- Always set `width`/`height`; `loading="lazy"` except hero (`fetchpriority="high"`).
- Avoid: watermarked versions, military equipment, visible tragedy/disaster scenes, heavy brand logos as the focal point.
- Preferred replacement: the company's own site and fleet photos with the same file names in `public/img/`.

---

## Style Guidelines

**Style:** Modern corporate / editorial — photography-led, calm, spacious

**Keywords:** cinematic photography, deep navy, warm off-white, single orange accent, soft radii, hairline dividers, pill buttons, generous whitespace

**Key Effects:** soft hover lifts (−1 to −4px), slow image zoom on hover (700ms), frosted header on scroll, fade-up reveal (20px, 700ms)

### Page Pattern

**Home section order:** Photo hero + trust badges > Intro statement + photo stack > Service bento > Why us (dark, 4 features) > 5-step process > Fleet rail > Projects > Calculator > FAQ > Photo CTA panel

- **CTA placement:** Header (always) + hero + every service page aside + closing CTA panel + mobile action bar
- **Social proof before closing CTA:** projects (and testimonials once real ones exist)

---

## Motion

| Use | Duration | Easing |
|-----|----------|--------|
| Hover / state changes | 220ms | `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease`) |
| Image zoom on hover | 700ms | `--ease` |
| Scroll reveal | 700ms, `translateY(20px)` → 0 | `--ease` |
| Hero image zoom-out | 14s once | `--ease` |

- Reveal content is visible in the prerendered HTML; it is only hidden when JS has added `.js` to `<html>`.
- `prefers-reduced-motion: reduce` → all animations/transitions effectively off, reveal shows final state.

---

## Anti-Patterns (Do NOT Use)

- ❌ Brutalist v1 elements: thick 3px black borders, hard offset shadows, hazard stripes, condensed all-caps poster type, hand-drawn SVG machines
- ❌ Large orange surfaces or white text on orange
- ❌ AI purple/pink gradients, glassmorphism everywhere (glass only on photos/dark)
- ❌ Stock images with watermarks or poor resolution
- ❌ Fabricated stats, testimonials or projects presented as real

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — use the inline Lucide-style SVG set (`src/components/Icon.tsx`)
- ❌ **Missing cursor:pointer** — all clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — only transform/box-shadow
- ❌ **Low contrast text** — 4.5:1 minimum
- ❌ **Invisible focus states** — focus ring always visible (`--focus`)

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from the shared Icon component
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Text contrast 4.5:1 minimum (check orange usage)
- [ ] Focus states visible on light and dark sections
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind the fixed header or the mobile action bar
- [ ] No horizontal scroll on mobile
- [ ] Every image has `alt` (empty for decorative), `width` and `height`
- [ ] One `h1` per page; unique title/description per route
