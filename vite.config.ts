import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    cors: true, // 允许跨域访问
  },
  plugins: [svelte(), tailwindcss()],
})
