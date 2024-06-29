import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true, // Enable HMR (Hot Module Replacement)
    }),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js', // Alias to support runtime template compilation
      '@': '/resources/js', // Alias for easy imports
    },
  },
});