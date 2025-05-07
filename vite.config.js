import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
        api: 'modern-compiler', // or "modern"
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Customize chunk splitting
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit
  },
})