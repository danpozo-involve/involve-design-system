# Involve — Design System

Involve's design system: tokens, primitives, and app-shell components. Ported from **The Collective Kit v1.13** (Figma) with Involve's brand indigo (`#3042E6`) swapped in, built on Tailwind CSS v4 with a CSS-variable token layer, Radix UI primitives, and Phosphor icons.

## Status

**This is an extracted copy, not yet an installable package the prototype actually depends on.** It was pulled out of [`involve-student-flow-prototype`](https://github.com/danpozo-involve) on 2026-09-14 to give the design system its own home and its own version history, separate from the app that first exercised it. The prototype's own copy of these files hasn't been removed or repointed at this repo yet — that's a deliberate, separate follow-up step (bigger lift: packaging + rewiring every import across the app), not done yet.

**Going forward, treat this repo as the source of truth for design-system changes** — edit tokens/components here, then port changes back into the prototype manually until the dependency wiring happens.

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

## Using this

No build tooling is set up yet (see Status above) — this is source you'd currently copy into a project or wire up manually. `npm run typecheck` confirms the TypeScript compiles on its own. For a live, interactive view of every token and component, run the prototype (`involve-student-flow-prototype`) and visit `/style` — that page hasn't been ported here yet.

See [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) for the full guide: color roles, the 3-layer token architecture, radius/elevation scales, typography, and every component's key props.

## License

MIT — see [LICENSE](LICENSE).
