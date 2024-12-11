import type { Meta, StoryObj } from '@storybook/react';
import { SettingsToggle, SettingsToggleProps } from './SettingsToggle';
import { Eye, Bell, Moon } from 'lucide-react';

const meta: Meta<typeof SettingsToggle> = {
  title: 'Molecules/SettingsToggle',
  component: SettingsToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A settings toggle component that combines an icon, label, and toggle switch.',
      },
    },
  },
  argTypes: {
    icon: {
      control: 'object',
      description: 'Lucide icon component to display',
      table: {
        type: { summary: 'Icon' },
      },
    },
    label: {
      control: 'text',
      description: 'Text label for the setting',
      table: {
        type: { summary: 'string' },
      },
    },
    isChecked: {
      control: 'boolean',
      description: 'Current state of the toggle',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Function called when toggle state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    isDarkMode: {
      control: 'boolean',
      description: 'Whether to show in dark mode',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    currentTheme: {
      control: 'select',
      options: ['blue', 'purple', 'teal'],
      description: 'Current theme color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<SettingsToggleProps>;

export const Default: Story = {
  args: {
    icon: Eye,
    label: 'Visibility',
    isChecked: false,
    isDarkMode: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default state of the settings toggle.',
      },
    },
  },
};

export const Checked: Story = {
  args: {
    icon: Bell,
    label: 'Notifications',
    isChecked: true,
    isDarkMode: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Settings toggle in checked state.',
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    icon: Moon,
    label: 'Dark Mode',
    isChecked: true,
    isDarkMode: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Settings toggle in dark mode.',
      },
    },
  },
};

export const CustomTheme: Story = {
  args: {
    icon: Eye,
    label: 'Custom Theme',
    isChecked: true,
    currentTheme: 'purple',
  },
  parameters: {
    docs: {
      description: {
        story: 'Settings toggle with custom theme color.',
      },
    },
  },
};