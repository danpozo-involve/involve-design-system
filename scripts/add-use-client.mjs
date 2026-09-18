#!/usr/bin/env node
// Every component in this package is client-side (Radix primitives use
// context/hooks, Button/Card/etc. take event handlers) -- so the whole
// bundle needs a "use client" boundary for Next.js (and other RSC-aware
// bundlers) to allow a Server Component to import it. A source-level
// directive doesn't survive tsup/esbuild's bundling (it gets silently
// stripped with a "was ignored" warning, since directives are only
// recognized in single, unbundled modules), and esbuild's own `banner`
// option is stripped the same way because esbuild treats the banner as
// part of the same bundled file it's already refusing to add a directive
// to. So this runs after tsup, as plain Node, and prepends the directive
// to the built file directly -- outside esbuild's bundling pass entirely.

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, '..', 'dist', 'index.js')

const original = readFileSync(distPath, 'utf8')
const directive = "'use client';\n"

if (original.startsWith(directive)) {
  console.log('dist/index.js already starts with "use client".')
} else {
  writeFileSync(distPath, directive + original)
  console.log('Prepended "use client" to dist/index.js.')
}
