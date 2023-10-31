/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
// import browserslist from 'browserslist';
// import { browserslistToTargets } from 'lightningcss';

// const path = require('node:path');

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production'
      ? '/local-microblogging-client/'
      : '/',
  build: {
    emptyOutDir: true,
    cssMinify: 'lightningcss',
  },
  plugins: [react(), VitePWA({})],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  server: {
    open: true,
  },
  // css: {
  //   transformer: 'lightningcss',
  //   lightningcss: {
  //     targets: browserslistToTargets(browserslist('>= 0.25%')),
  //   },
  // },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: '/src/components',
      },
      {
        find: '@pages',
        replacement: '/src/pages',
      },
      {
        find: '@services',
        replacement: '/src/services',
      },
    ],
  },
});
