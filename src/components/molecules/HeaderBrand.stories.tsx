import type { Meta, StoryObj } from '@storybook/react';
import { HeaderBrand, HeaderBrandProps } from './HeaderBrand';

const meta: Meta<typeof HeaderBrand> = {
  title: 'Molecules/HeaderBrand',
  component: HeaderBrand,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A header brand component that combines the logo and brand name with scroll-based size adjustments.',
      },
    },
  },
  argTypes: {
    isDarkMode: {
      control: 'boolean',
      description: 'Whether to show the brand in dark mode',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isScrolled: {
      control: 'boolean',
      description: 'Whether the page has been scrolled, affecting the logo size',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<HeaderBrandProps>;

export const Default: Story = {
  args: {
    isDarkMode: false,
    isScrolled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default state of the header brand with full-size logo.',
      },
    },
  },
};

export const Scrolled: Story = {
  args: {
    isDarkMode: false,
    isScrolled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header brand with smaller logo when page is scrolled.',
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    isDarkMode: true,
    isScrolled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header brand in dark mode.',
      },
    },
  },
};

export const DarkModeScrolled: Story = {
  args: {
    isDarkMode: true,
    isScrolled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header brand in dark mode with smaller logo when scrolled.',
      },
    },
  },
};