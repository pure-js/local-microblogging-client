import type { Preview } from '@storybook/react';

import { withThemeByDataAttribute } from '@storybook/addon-styling';

/* TODO: update import to your tailwind styles file */
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByDataAttribute({
      themes: {
        forest: 'forest',
        winter: 'winter',
      },
      defaultTheme: 'winter',
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
