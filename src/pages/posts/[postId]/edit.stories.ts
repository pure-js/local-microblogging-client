// import type { Meta, StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { within, userEvent } from '@storybook/testing-library';

import { EditPost } from './edit';

const meta = {
  title: 'Pages/EditPost',
  component: EditPost,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof EditPost>;

export default meta;
// type Story = StoryObj<typeof meta>;

// export const LoggedOut: Story = {};

// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
