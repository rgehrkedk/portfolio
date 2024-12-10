import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { themes } from '@/theme/themes';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      control: 'select',
      options: Object.keys(themes),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

// Theme Examples
export const BlueSolid: Story = {
  args: {
    theme: 'blue',
    variant: 'solid',
  },
};

export const PurpleSolid: Story = {
  args: {
    theme: 'purple',
    variant: 'solid',
  },
};

export const TealSolid: Story = {
  args: {
    theme: 'teal',
    variant: 'solid',
  },
};

// Size Examples remain the same
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};