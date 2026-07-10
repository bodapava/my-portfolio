import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the built site works when hosted at
  // https://<username>.github.io/<repo-name>/ on GitHub Pages.
  base: './',
})
