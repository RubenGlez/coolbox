import styled from "styled-components";
import { MainProps } from "./types";

type TypographyBaseProps = Pick<MainProps, "color" | "align" | "variant">;

export const TypographyBase = styled.span<TypographyBaseProps>`
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.167;
  letter-spacing: 0em;
`;
