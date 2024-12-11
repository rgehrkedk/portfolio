import type { Meta, StoryObj } from '@storybook/react';
import { ThemeCard, ThemeCardProps } from './ThemeCard';

const meta: Meta<typeof ThemeCard> = {
  title: 'Molecules/ThemeCard',
  component: ThemeCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A clickable card component used for theme selection with hover and active states.',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'text',
      description: 'Theme identifier',
      table: {
        type: { summary: 'string' },
      },
    },
    isActive: {
      control: 'boolean',
      description: 'Whether this theme is currently selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the theme card is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    colors: {
      control: 'object',
      description: 'Theme colors configuration',
      table: {
        type: { summary: '{ primary: string; secondary: string; }' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ThemeCardProps>;

export const Default: Story = {
  args: {
    theme: 'blue',
    isActive: false,
    colors: {
      primary: 'bg-blue-500',
      secondary: 'bg-blue-400',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default state of the theme card.',
      },
    },
  },
};

export const Active: Story = {
  args: {
    theme: 'blue',
    isActive: true,
    colors: {
      primary: 'bg-blue-500',
      secondary: 'bg-blue-400',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Active/selected state of the theme card.',
      },
    },
  },
};

export const PurpleTheme: Story = {
  args: {
    theme: 'purple',
    isActive: false,
    colors: {
      primary: 'bg-purple-500',
      secondary: 'bg-purple-400',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Theme card with purple color scheme.',
      },
    },
  },
};  