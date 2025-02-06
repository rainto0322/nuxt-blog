import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  rules: [
    ['mb-a', { 'margin-inline': 'auto' }],
    ['ac', { 'align-items': 'center'},],
    ['vm', { 'vercel': 'center'},],
    ['fb', { 'display': 'flex','justify-content':'space-between'},],

  ],
})