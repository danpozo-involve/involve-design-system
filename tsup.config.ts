import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  // Every runtime dependency ships via package.json's "dependencies" (or is a
  // peer, for react/react-dom) -- none of them should be bundled into dist.
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    '@fontsource-variable/plus-jakarta-sans',
    '@phosphor-icons/react',
    '@radix-ui/react-avatar',
    '@radix-ui/react-checkbox',
    '@radix-ui/react-dialog',
    '@radix-ui/react-label',
    '@radix-ui/react-progress',
    '@radix-ui/react-slot',
    '@radix-ui/react-switch',
    '@radix-ui/react-tabs',
    '@radix-ui/react-tooltip',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
  ],
})
