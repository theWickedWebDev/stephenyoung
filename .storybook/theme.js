import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#ED6B5A',
  colorSecondary: '#258ea1',

  // UI
  appBg: 'white',
  appContentBg: '#e7e7e7',
  appBorderColor: '#5d5d5d',
  appBorderRadius: 2,

  // Typography
  fontBase: "'Spartan', sans-serif",
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#000',
  barSelectedColor: '#000',
  barBg: '#fff',

  // Form colors
  inputBg: 'white',
  inputBorder: '#e7e7e7',
  inputTextColor: 'black',
  inputBorderRadius: 2,

  brandTitle: 'TheWickedWebDev',
  brandUrl: 'https://www.thewickedweb.dev/',
  brandImage: 'https://cdn.thewickedweb.dev/images/avatar/avatar-square-blue.jpg'
});
