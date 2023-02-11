import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    fontSizeBase: number;
    fontWeight: {
      bold: number;
      semi: number;
      normal: number;
      light: number;
    };
    zIndex: {
      z_1: number;
      z_2: number;
      z_3: number;
      z_4: number;
      z_5: number;
      z_6: number;
      z_7: number;
      z_8: number;
      z_9: number;
      z_10: number;
    };
    mediaQueries: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
    color: {
      text_primary: string;
      text_secondary: string;
      text_active: string;
      text_inactive: string;
      text_alt: string;

      bg_1: string;
      bg_2: string;
      bg_3: string;
      bg_4: string;
      bg_5: string;

      cta_primary: string;
      cta_secondary: string;

      util_success: string;
      util_danger: string;
      util_warning: string;
      util_info: string;
    };
  }
}
