import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import path from 'path';  // Add this import
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // Add this to ensure proper paths resolution
    webpackFinal: async (config) => {
      if (config.resolve) {
        config.resolve.alias = {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../src'),
        };
      }
      return config;
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;