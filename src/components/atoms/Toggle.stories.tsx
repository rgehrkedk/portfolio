import type { Meta, StoryObj } from '@storybook/react';
import { Toggle, ToggleProps } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A toggle switch component that supports theming and dark mode.',
      },
    },
  },
  argTypes: {
    isChecked: {
      control: 'boolean',
      description: 'The current state of the toggle',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the toggle state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    currentTheme: {
      control: 'select',
      options: ['blue', 'purple', 'teal'],
      description: 'The color theme of the toggle when active',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    isDarkMode: {
      control: 'boolean',
      description: 'Whether to show the toggle in dark mode',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ToggleProps>;

export const Default: Story = {
  args: {
    isChecked: false,
    isDarkMode: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default unchecked toggle in light mode.',
      },
    },
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    isDarkMode: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The toggle in its checked state.',
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    isChecked: false,
    isDarkMode: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The toggle in dark mode.',
      },
    },
  },
};

export const WithCustomTheme: Story = {
  args: {
    isChecked: true,
    currentTheme: 'purple',
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle with a custom theme color when checked.',
      },
    },
  },
};