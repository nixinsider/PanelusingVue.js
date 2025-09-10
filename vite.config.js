import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/PanelusingVue.js/'
    : '/'
}