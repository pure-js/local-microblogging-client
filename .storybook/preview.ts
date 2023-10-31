import type { Preview } from '@storybook/react';

import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { withRouter } from 'storybook-addon-react-router-v6';

/* TODO: update import to your tailwind styles file */
import '../src/index.css';

const reactRouterParams = {
  location: {
    pathParams: { userId: '42' },
    searchParams: { tab: 'activityLog' },
    state: { fromPage: 'homePage' },
  },
  routing: {
    path: '/users/:userId',
    handle: 'Profile',
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    reactRouter: reactRouterParams,
  },
  decorators: [
    withRouter,
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByDataAttribute({
      themes: {
        forest: 'forest',
        winter: 'winter',
      },
      defaultTheme: 'winter',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview satisfies Preview;
