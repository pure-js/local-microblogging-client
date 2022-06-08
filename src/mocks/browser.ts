// src/mocks/browser.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';
import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
