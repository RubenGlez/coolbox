import { TypographyBase } from "./styles";
import { MainProps } from "./types";

const variants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

export default function Typography({
  children,
  color = "primary",
  align = "left",
  variant = "body1",
}: MainProps) {
  const as = variants[variant] as never;
  return (
    <TypographyBase as={as} color={color} align={align}>
      {children}
    </TypographyBase>
  );
}
