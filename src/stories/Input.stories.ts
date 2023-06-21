import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Input',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Input',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Input',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Input',
  },
};
