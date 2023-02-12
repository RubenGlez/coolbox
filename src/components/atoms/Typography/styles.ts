import styled from "styled-components";
import { TypographyProps } from "./types";

type TypographyBaseProps = Pick<TypographyProps, "color" | "align" | "size">;

export const TypographyBase = styled.span<TypographyBaseProps>`
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme, color }) => theme.color[`text_${color}`]};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case "xl":
        return `${theme.fontSizeBase * 1.5}px`;
      case "l":
        return `${theme.fontSizeBase * 1.25}px`;
      case "m":
        return `${theme.fontSizeBase * 1}px`;
      case "s":
        return `${theme.fontSizeBase * 0.875}px`;
      default:
        return `${theme.fontSizeBase}px`;
    }
  }};
  line-height: ${({ size }) => {
    switch (size) {
      case "xl":
        return 1.235;
      case "l":
        return 1.334;
      case "m":
        return 1.6;
      case "s":
        return 1.75;
      default:
        return 1.6;
    }
  }};
  text-align: ${({ align }) => align};
  letter-spacing: 0px;
  text-decoration: none;
`;
