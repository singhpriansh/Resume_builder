import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    // chunkSizeWarningLimit: 10000, 
    outDir: 'dist',
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         return 'vendor';
    //       }
    //     }
    //   }
    // }
  },
  plugins: [react(), tailwindcss()],
})
