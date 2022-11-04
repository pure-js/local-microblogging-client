/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import { swcReactRefresh } from 'vite-plugin-swc-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';

// const path = require('node:path');

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [
    swcReactRefresh(),
    VitePWA({}),
  ],
  esbuild: { jsx: 'automatic' },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  server: {
    open: true,
  },
  resolve: {
    alias: [
      {
        find: '@components',
        // replacement: path.resolve(__dirname, './src'),
        replacement: '/src/components',
      },
      {
        find: '@services',
        // replacement: path.resolve(__dirname, './src'),
        replacement: '/src/services',
      },
    ],
  },
});
