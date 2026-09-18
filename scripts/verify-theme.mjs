#!/usr/bin/env node
// Guards against a regression that happened on 2026-09-17: an edit meant to
// add one @import line to src/styles/index.css instead replaced the whole
// file, silently deleting the @theme block, @layer base, and @layer
// components. Nothing failed — Tailwind just generated fewer utilities,
// so every consumer's colors, focus rings, and .t-* type classes quietly
// stopped resolving. Consumers only found out by eyeballing a blank-looking
// UI. This script asserts the load-bearing pieces are still present, so a
// stripped file fails the build immediately instead of shipping silently.
//
// Runs as `prepare` too, so it also protects consumers that pin this
// package via a git URL/commit: `npm install` re-runs this before the
// dependency is considered ready.

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cssPath = path.join(__dirname, '..', 'src', 'styles', 'index.css')
const css = readFileSync(cssPath, 'utf8')

const requiredMarkers = [
  ['@theme inline', 'the @theme block that maps tokens onto Tailwind utilities'],
  ['@layer base', 'the base layer (element resets, focus ring, body defaults)'],
  ['@layer components', 'the component layer (.t-h1..t-h6, .scrim-* helpers)'],
  ['--color-primary:', 'the primary color utility mapping (bg-primary, text-primary, ...)'],
  ['--color-danger:', 'the danger color utility mapping'],
  ['--color-success:', 'the success color utility mapping'],
  ['--color-surface:', 'the surface color utility mapping'],
  ['--color-border:', 'the border color utility mapping'],
  ["@import '@fontsource-variable/plus-jakarta-sans'", 'the Plus Jakarta Sans font-face import'],
]

const missing = requiredMarkers.filter(([marker]) => !css.includes(marker))

const MIN_LINES = 300 // the intact file is ~415 lines; the regressed one was 1
const lineCount = css.split('\n').length

if (missing.length > 0 || lineCount < MIN_LINES) {
  console.error(
    `\nsrc/styles/index.css looks stripped (${lineCount} lines, expected >= ${MIN_LINES}).\n` +
      'Missing:\n' +
      missing.map(([marker, why]) => `  - "${marker}" — ${why}`).join('\n') +
      '\n\nIf you meant to edit this file, ADD to it — never regenerate or ' +
      'overwrite it wholesale. See the incident note in this script\'s header.\n',
  )
  process.exit(1)
}

console.log(`src/styles/index.css OK (${lineCount} lines, all theme markers present).`)
