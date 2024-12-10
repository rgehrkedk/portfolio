import type { Meta, StoryObj } from '@storybook/react';
import { ThemeCard } from './ThemeCard';
import { themes } from '@/theme/themes';

const meta: Meta<typeof ThemeCard> = {
  title: 'Molecules/ThemeCard',
  component: ThemeCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeCard>;

export const Blue: Story = {
  args: {
    theme: 'blue',
    isActive: false,
    onClick: () => {},
    colors: themes.blue,
  },
};

export const Purple: Story = {
  args: {
    theme: 'purple',
    isActive: false,
    onClick: () => {},
    colors: themes.purple,
  },
};

export const Teal: Story = {
  args: {
    theme: 'teal',
    isActive: false,
    onClick: () => {},
    colors: themes.teal,
  },
};

export const Active: Story = {
  args: {
    theme: 'blue',
    isActive: true,
    onClick: () => {},
    colors: themes.blue,
  },
};