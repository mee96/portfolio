import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Indica que ha de començar a buscar les importacions des de 'src/'
        includePaths: ['src/scss'] 
      }
    }
    }
})
