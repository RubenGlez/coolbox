import { StyledNavLink } from "./styles";
import { NavLinkProps } from "./types";

export default function NavLink({
  children,
  activeColor = "active",
  ...rest
}: NavLinkProps) {
  return (
    <StyledNavLink {...rest} activeColor={activeColor}>
      {children}
    </StyledNavLink>
  );
}
