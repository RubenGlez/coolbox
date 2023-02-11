import { PropsWithChildren } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const defaultTheme: DefaultTheme = {
  fontFamily: "Open-Sans, Helvetica, Sans-Serif",
  fontSizeBase: 16,
  fontWeight: {
    bold: 700,
    semi: 500,
    normal: 400,
    light: 300,
  },
  zIndex: {
    z_1: 100,
    z_2: 200,
    z_3: 300,
    z_4: 400,
    z_5: 500,
    z_6: 600,
    z_7: 700,
    z_8: 800,
    z_9: 900,
    z_10: 1000,
  },
  mediaQueries: {
    mobile: 768,
    tablet: 1024,
    desktop: 1366,
  },
  color: {
    // Text
    text_primary: "#101840",
    text_secondary: "#696F8C",
    text_active: "#3366FF",
    text_inactive: "#D8DAE5",
    text_alt: "#FFFFFF",
    // Backgrounds
    bg_1: "#FFFFFF",
    bg_2: "#F9FAFC",
    bg_3: "#F4F5F9",
    bg_4: "#E6E8F0",
    bg_5: "#C1C4D6",
    // CTA's
    cta_primary: "#3366FF",
    cta_secondary: "#E6E8F0",
    // Utils
    util_success: "#52BD95",
    util_danger: "#D14343",
    util_warning: "#FFB020",
    util_info: "#3366FF",
  },
};

export default function ThemeManagerProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
