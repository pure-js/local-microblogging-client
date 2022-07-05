/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: 'src/**/*.{jsx,tsx}',
    }),
    VitePWA({}),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: [
      {
        // this is required for the SCSS modules
        find: /^~(.*)$/,
        replacement: '$1',
      },
    ],
  },
});
