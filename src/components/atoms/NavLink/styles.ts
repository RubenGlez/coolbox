import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavLinkProps } from "./types";

export const StyledNavLink = styled(NavLink)<NavLinkProps>`
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;
  letter-spacing: inherit;

  text-decoration: none;

  &.active {
    color: ${({ theme, activeColor }) => theme.color[`text_${activeColor}`]};
  }
`;
