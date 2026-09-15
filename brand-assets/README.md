# Brand assets

Drop raw brand files here as they arrive, then wire them into the app:

| File | Where it's used |
|---|---|
| `logo-lockup.svg`, `logo-mark.svg` | Replace the placeholder SVG in `src/components/brand/Logo.tsx` |
| `favicon.svg` | Replace `public/favicon.svg` |
| Google Sans web fonts (`.woff2`) | Add an `@font-face` block, then prepend `"Google Sans"` to `--font-family-base` in `src/styles/tokens.css` (currently Inter, per the Collective Kit) |

Until the real logo lands, `Logo.tsx` renders a placeholder mark (three linked
nodes) + the "Involve" wordmark in Inter.
