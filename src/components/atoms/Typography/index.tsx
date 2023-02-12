import { TypographyBase } from "./styles";
import { TypographyProps } from "./types";

export default function Typography({
  children,
  color = "primary",
  align = "left",
  size = "m",
  as = "span",
}: TypographyProps) {
  const tag = as as any;
  return (
    <TypographyBase as={tag} color={color} align={align} size={size}>
      {children}
    </TypographyBase>
  );
}
