import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: '@Atom/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Button',
  },
};
