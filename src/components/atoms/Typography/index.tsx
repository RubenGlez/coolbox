import { TypographyBase } from "./styles";
import { TypographyProps } from "./types";

const tagVariants = {
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
}: TypographyProps) {
  const tag = tagVariants[variant] as never;

  return (
    <TypographyBase as={tag} color={color} align={align} variant={variant}>
      {children}
    </TypographyBase>
  );
}
