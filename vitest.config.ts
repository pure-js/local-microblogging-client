/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['src/**/*.spec.*'],
    coverage: {
      provider: 'v8', // or 'v8'
    },
  },
});
