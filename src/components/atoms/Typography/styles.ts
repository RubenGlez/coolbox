import styled from "styled-components";
import { TypographyProps } from "./types";

type TypographyBaseProps = Pick<TypographyProps, "color" | "align" | "variant">;

export const TypographyBase = styled.span<TypographyBaseProps>`
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme, color }) => theme.color[`text_${color}`]};
  font-size: ${({ theme, variant }) => {
    switch (variant) {
      case "h1":
        return `${theme.fontSizeBase * 3}px`;
      case "h2":
        return `${theme.fontSizeBase * 2.125}px`;
      case "h3":
        return `${theme.fontSizeBase * 1.5}px`;
      case "subheading1":
        return `${theme.fontSizeBase * 1.25}px`;
      case "subheading2":
        return `${theme.fontSizeBase * 1}px`;
      case "body1":
        return `${theme.fontSizeBase * 1}px`;
      case "body2":
        return `${theme.fontSizeBase * 0.875}px`;
      default:
        return `${theme.fontSizeBase}px`;
    }
  }};
  line-height: ${({ theme, variant }) => {
    switch (variant) {
      case "h1":
        return 1.235;
      case "h2":
        return 1.334;
      case "h3":
        return 1.6;
      case "subheading1":
        return 1.75;
      case "subheading2":
        return 1.57;
      case "body1":
        return 1.5;
      case "body2":
        return 1.43;
      default:
        return theme.fontSizeBase / 33;
    }
  }};
  text-align: ${({ align }) => align};
  letter-spacing: 0px;
  text-decoration: none;
`;
