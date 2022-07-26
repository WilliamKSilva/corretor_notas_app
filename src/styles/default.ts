import { RFValue } from 'react-native-responsive-fontsize';

export const defaultTheme = {
  title: 'default',

  fontsize: {
    font_small: RFValue(14),
    font_medium: RFValue(16),
    font_large: RFValue(22),
    font_icon: RFValue(40),
    font_icon_small: RFValue(28),
  },

  colors: {
    background: '#f1f5f9',
    input: '#e2e8f0',

    primary: '#0284c7',
    secondary: '#38bdf8',

    text: '#FFFFFF',
    placeholder: '#44403c',

    white: '#FFFFFF',
    black: '#000000'
  },

  constants: {
    screen_vertical_padding: 6,
    screen_horizontal_padding: 6,
    custom_margin: 3,
    custom_margin_medium: 8,
    custom_margin_large: 10,
    custom_padding: 3,
    custom_padding_large: 6,
  },
};
