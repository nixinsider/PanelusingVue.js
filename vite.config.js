import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path to your repository name
  base: '/PanelusingVue.js/', 
  plugins: [vue()],
})