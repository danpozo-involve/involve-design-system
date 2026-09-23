# Involve — Design System

Ported from **The Collective Kit v1.13** (Figma), with Involve's brand indigo
swapped in for the kit's mono primary. The goal is consistency and speed: every
screen is assembled from the tokens and components below.

**Live reference:** run the app → [`/style`](http://localhost:5173/style) (has a dark-mode toggle).
**Token source of truth:** [`src/styles/tokens.css`](../src/styles/tokens.css).
**Extracted kit values:** [`docs/reference/collective-kit-tokens.json`](reference/collective-kit-tokens.json) (resolved Light/Dark), decoded straight from the `.fig`.

---

## 1. Architecture

```
tokens.css ─ Layer 1  PRIMITIVES  raw ramps            (--indigo-600, --slate-200 …)
           ─ Layer 2  SEMANTICS   role tokens, Light on :root / Dark on .dark
index.css  ─ Layer 3  @theme      Tailwind utilities    (bg-primary, text-ink, rounded-lg …)
```

**Rule:** components use **semantic** utilities only (`bg-surface`, `text-ink-muted`,
`border-border`). Never a raw ramp step (`bg-slate-200`) in a component.

**Dark mode** ships now. Toggle `.dark` on `<html>`; `tokens.css` re-points every
semantic token. `main.tsx` restores the viewer's choice from `localStorage`.

### What Involve changed from the kit

|                         | Kit                            | Involve                                     |
| ----------------------- | ------------------------------ | ------------------------------------------- |
| `primary` / action role | mono `slate/1000` (near-black) | **indigo `#3042E6`** + ladder               |
| `surface/page` (light)  | `#FFFFFF`                      | `#F9F9F9`                                   |
| text colours            | —                              | **unchanged** (kit's, already WCAG-checked) |

---

## 2. Color

### Primitive ramps (100 → 1200)

| Ramp                                      | Role                                                |
| ----------------------------------------- | --------------------------------------------------- |
| `--indigo-*`                              | Brand / primary action. `--indigo-600` = `#3042E6`. |
| `--slate-*`                               | Cool neutral — **all text + borders**.              |
| `--grey-*`                                | Warm neutral — dark-mode surfaces, disabled.        |
| `--emerald-* --red-* --orange-* --blue-*` | success / error / warning / information.            |

### Semantic tokens (use these)

**Surfaces** — `page` (app canvas `#F9F9F9`), `surface` (cards/sheets), `surface-sunken`,
`surface-hover`, `surface-disabled`, `surface-inverse`.

**Text** (utilities `text-ink*`) — `ink` (default UI text), `ink-strong` (headings),
`ink-body` (long-form), `ink-secondary`, `ink-muted`, `ink-subtle` (placeholder),
`ink-disabled`, `ink-inverse` (on a colored fill).

**Borders** — `border` (default), `border-subtle` (dividers), `border-strong` (hover),
`border-disabled`, `border-on-color`.

**Primary / action** — `bg-primary` `bg-primary-hover` `bg-primary-active`
`bg-primary-subtle` `bg-primary-subtle-hover`, text `text-on-primary` / `text-on-primary-subtle`.

**Secondary / neutral action** — `bg-secondary` `bg-secondary-hover`, `text-on-secondary`.

**Status** — each of `danger` / `success` / `warning` / `info` has: solid (`bg-danger`),
`-hover`, `-subtle` (tinted bg), `-subtle-hover`, `text-on-danger` (on solid),
`text-danger-text` (on subtle), `border-danger`. All pairs meet WCAG AA (kit's values).

**Icon** — `text-icon`, `text-icon-subtle`, `text-icon-disabled`.

---

## 3. Radius — the kit's `border radius` scale

| Utility                       | px      | Use                    |
| ----------------------------- | ------- | ---------------------- |
| `rounded-xs`                  | 2       | inline chips           |
| `rounded-sm`                  | 4       | tags                   |
| `rounded-md`                  | 6       | compact controls       |
| `rounded-lg`                  | 8       | **inputs**             |
| `rounded-xl`                  | 12      | **cards**              |
| `rounded-2xl`                 | 16      | sheets, modals         |
| `rounded-3xl` / `rounded-4xl` | 20 / 24 | large surfaces         |
| `rounded-full`                | —       | avatars, pills, badges, **buttons (both `Button` and `IconButton`, since 2026-09-16 — "Playful/Tactile" direction)** |

Border widths: `--stroke-xs` 1 · `--stroke-sm` 2 · `--stroke-md` 4.

---

## 4. Elevation

Not defined in the kit's variables — Involve adds five slate-tinted tiers:
`shadow-xs` (resting) · `shadow-sm` (cards) · `shadow-md` (hover/popover) ·
`shadow-lg` (dropdown) · `shadow-xl` (modal). Shadows read faintly in dark mode.

**Exception, since 2026-09-16:** `Button` and `IconButton` (primary/secondary/danger) sit one tier higher than this general guide — `shadow-md` at rest, `shadow-lg` on hover — as part of the "Playful/Tactile" direction. This is deliberate for the button family specifically, not a redefinition of what `shadow-md`/`shadow-lg` mean for everything else (cards, dropdowns, etc. still follow the tiers above).

**Focus:** every interactive element shows `2px` indigo `:focus-visible` outline;
form fields add a `4px` `ring-ring` halo. Don't remove it.

---

## 5. Typography

**Font:** **Plus Jakarta Sans** (bundled via `@fontsource-variable/plus-jakarta-sans`),
one family for headings and body. `--font-family-display` is kept as a separate
hook (currently pointing at the base family) so a heading face can be split back
out later — edit it and `--font-family-base` in `tokens.css`.

Use the named `.t-*` classes — the kit's scale. Headings scale **up at ≥768px**
(mobile → desktop shown); paragraphs and caption are size-stable.

| Class             | Mobile → Desktop (size / line-height) | Weight | Use                              |
| ----------------- | ------------------------------------- | ------ | -------------------------------- |
| `.t-hero`         | 64/80 → 96/112                        | 600    | Landing hero only                |
| `.t-h1`           | 56/72 → 72/88                         | 600    | Marketing page title             |
| `.t-h2`           | 56/72 → 60/72                         | 600    | Major marketing section          |
| `.t-h3`           | 36/48 → 48/64                         | 600    | Section                          |
| `.t-h4`           | 30/40 → 36/48                         | 600    | Sub-section                      |
| `.t-h5`           | 24/32 → 30/40                         | 600    | **App screen title**             |
| `.t-h6`           | 20/28 → 24/32                         | 600    | **In-page section / card group** |
| `.t-paragraph-lg` | 20/28                                 | 400    | Lead paragraph                   |
| `.t-title`        | 18/24                                 | 600    | **Workspace / channel header**   |
| `.t-paragraph-md` | 16/24                                 | 400    | **Default body**                 |
| `.t-paragraph-sm` | 14/20                                 | 400    | Dense UI, secondary copy         |
| `.t-label`        | 14/20                                 | 500    | Form labels, nav items, buttons  |
| `.t-caption`      | 12/16                                 | 400    | Metadata, helper text            |
| `.t-overline`     | 12/16                                 | 600    | Uppercase section label          |

---

## 6. Components

```tsx
import { Button, Card, Input, Badge, Avatar } from '@/components/ui'
import { AppLayout, Page, TopBar, SectionHeader } from '@/components/shell'
```

### Primitives — `src/components/ui/`

| Component                                                                                        | Key props                                                                                           |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `Button`                                                                                         | `variant` primary·secondary·subtle·ghost·danger · `size` sm·md·lg · `loading` · `block` · `asChild` |
| `IconButton`                                                                                     | `label` (required) · `variant` · `size`                                                             |
| `Input` / `Textarea` / `Select`                                                                  | `label` · `hint` · `error` · (Input) `leading` / `trailing`                                         |
| `Checkbox` / `Switch`                                                                            | `label` · `description` (Radix)                                                                     |
| `Badge`                                                                                          | `tone` neutral·brand·success·warning·danger·info · `size` · `outline` · `dot`                       |
| `Avatar` / `AvatarGroup`                                                                         | `name` · `src` · `size` xs–xl · `overflow`                                                          |
| `Card` (+ `CardHeader/Title/Description/Footer`)                                                 | `elevation` flat·raised·floating · `padding` · `interactive`                                        |
| `Tabs` · `Modal` · `Tooltip` · `ProgressBar` · `Spinner` · `Skeleton` · `EmptyState` · `Divider` | see `/style`                                                                                        |

### App shell — `src/components/shell/`

`AppLayout` (SideNav ≥lg / BottomNav <lg) · `TopBar` · `Page` · `Container` ·
`SectionHeader`. `NavItem`: `{ to, label, icon, badge?, end? }`; active items render
their Phosphor icon at `weight="fill"`.

### Screen recipe

```tsx
<Page header={<TopBar title="Clubs" back />} width="md">
  <SectionHeader size="md" title="My clubs" description="Communities you've joined." />
  <div className="mt-6 grid gap-4 sm:grid-cols-2">{/* Cards */}</div>
</Page>
```
