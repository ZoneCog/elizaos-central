/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/degen-intel/',
  build: {
    emptyOutDir: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    timers: 'fake',
  },
});