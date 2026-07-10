import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      white: string;
      black: string;
      text: string;
      overlay: string;
      border: string;
      success: string;
      warning: string;
      error: string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };

    typography: {
      fontFamily: {
        title: string;
        body: string;
      };

      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        display: string;
      };

      fontWeight: {
        regular: number;
        medium: number;
        bold: number;
      };
    };

    transitions: {
      default: string;
      slow: string;
    };

    shadows: {
      sm: string;
      md: string;
      lg: string;
    };

    layout: {
      container: {
        width: string;
        maxWidth: string;
      };

      header: {
        height: string;
      };
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}