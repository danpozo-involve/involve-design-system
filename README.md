# Involve — Design System

Involve's design system: tokens, primitives, and app-shell components. Ported from **The Collective Kit v1.13** (Figma) with Involve's brand indigo (`#3042E6`) swapped in, built on Tailwind CSS v4 with a CSS-variable token layer, Radix UI primitives, and Phosphor icons.

## Status

**Installable as of v0.1.0** — via Git URL, no npm registry involved. It was pulled out of [`involve-student-flow-prototype`](https://github.com/danpozo-involve) on 2026-09-14 to give the design system its own home and its own version history, separate from the app that first exercised it. **The prototype itself still has its own, currently-identical copy of these files and hasn't been rewired to depend on this package** — that's a deliberate, separate follow-up step (bigger lift: rewiring every import across the app), not done yet. So for now: **treat this repo as the source of truth for design-system changes**, and port changes back into the prototype manually until that rewiring happens.

## Install

No npm registry publish — install directly from GitHub:

```bash
npm install git+https://github.com/danpozo-involve/involve-design-system.git#v0.1.0
```

(Pin a tag like `#v0.1.0` rather than floating on `main`, so an upstream change here doesn't silently change your build. See [Releases](https://github.com/danpozo-involve/involve-design-system/tags) for available tags.)

`react` and `react-dom` (>=18) are peer dependencies — your project supplies them. Everything else (Radix UI, Phosphor icons, `class-variance-authority`, etc.) installs automatically as a regular dependency.

### Using components

```tsx
import { Button, Card, AppLayout, cn } from '@danpozo-involve/involve-design-system'

function Example() {
  return <Button variant="primary" size="md">Continue</Button>
}
```

`AppLayout` no longer hard-depends on the prototype's own notifications feature — if a nav item has a `panel` id, pass `renderPanel` to decide what renders for it (or omit it entirely if you don't use panel-style nav items):

```tsx
<AppLayout nav={nav} renderPanel={(panel, close) =>
  panel === 'notifications' ? <YourNotificationsPanel onClose={close} /> : null
}>
  {children}
</AppLayout>
```

### Using the design tokens (Tailwind v4)

The two CSS files ship raw, uncompiled — `@import` them directly rather than importing JS:

```css
/* your app's global CSS */
@import '@danpozo-involve/involve-design-system/styles/index.css'; /* tokens + Tailwind @theme mapping + .t-* type styles */
```

Or, if you already run your own `@theme` mapping and just want the raw token values:

```css
@import '@danpozo-involve/involve-design-system/styles/tokens.css';
```

Dark mode: toggle a `.dark` class on `<html>` — both value sets live in `tokens.css`.

## What's included

```
src/
  styles/tokens.css      Design tokens — colors, radius, elevation, motion (Light + Dark)
  index.css              Tailwind v4 @theme mapping + .t-* type styles
  lib/cn.ts              clsx + tailwind-merge className utility, used throughout
  components/
    ui/                  Primitives — Button, Input, Select, Checkbox, Switch, Badge,
                          Avatar, Card, Tabs, Modal, Tooltip, ProgressBar, Spinner,
                          Skeleton, EmptyState, Divider
    shell/                App-frame — AppLayout (responsive SideNav/BottomNav), TopBar,
                          Page, Container, SectionHeader, ScrollSection, nav types
    brand/Logo.tsx        Involve logo (mark + lockup variants, inlined SVG)
docs/
  DESIGN_SYSTEM.md        Full usage guide — architecture, color, radius, elevation,
                          typography, component reference
  reference/               Token values decoded straight from the Collective Kit .fig
brand-assets/             Drop logo/font files here (placeholder, per original prototype)
```

**Not included** (stayed in the prototype — app-specific, not reusable design-system pieces): `NotificationsPanel` (tied to app notification data), page components, seed/content data, and app images.

## Developing this repo

```bash
npm install
npm run build       # tsup -> dist/index.js + dist/index.d.ts (ESM only)
npm run typecheck   # tsc --noEmit
```

`dist/` is committed to git on purpose — this package installs via a Git URL, not a registry, so there's no publish step to run the build for you. **Run `npm run build` and commit the result before tagging a new version**, or consumers will get stale output.

For a live, interactive view of every token and component, run the prototype (`involve-student-flow-prototype`) and visit `/style` — that page hasn't been ported into this repo yet (see Open items in `08 Design Documentation/design-system/design-system-reference.md` in the research workspace).

See [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) for the full guide: color roles, the 3-layer token architecture, radius/elevation scales, typography, and every component's key props.

## License

MIT — see [LICENSE](LICENSE).
