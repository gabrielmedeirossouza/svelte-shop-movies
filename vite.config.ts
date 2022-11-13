import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import alias from "@rollup/plugin-alias";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [alias(), svelte()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }]
  }
})
