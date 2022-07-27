import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    fontsize: {
      font_small: number;
      font_medium: number;
      font_large: number;
      font_icon: number;
      font_icon_small: number;
    };

    colors: {
      background: string;
      input: string;

      primary: string;
      secondary: string;

      text: string;
      placeholder: string;

      white: string;
      black: string;
    };

    constants: {
      screen_vertical_padding: number;
      screen_horizontal_padding: number;
      custom_margin: number;
      custom_margin_medium: number;
      custom_margin_large: number;
      custom_padding: number;
      custom_padding_large: number;
    };
  }
}