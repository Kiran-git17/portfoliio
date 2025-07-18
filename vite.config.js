import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // This is for local development (npm run dev)
    return {
      plugins: [react()],
      base: '/',
    }
  } else {
    // This is for the final build (npm run build)
    return {
      plugins: [react()],
      base: '/portfolio/',
    }
  }
})