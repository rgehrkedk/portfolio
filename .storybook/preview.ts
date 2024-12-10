import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
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
    themes: {
      list: [
        { name: 'Light', class: '', color: '#fff', default: true },
        { name: 'Dark', class: 'dark', color: '#000' },
      ],
      target: 'body',
      onChange: (theme) => {
        document.body.className = theme.class;
      },
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