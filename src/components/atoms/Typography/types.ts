import { ReactNode } from "react";

export interface TypographyProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "active" | "inactive" | "alt";
  align?: "left" | "center" | "right";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "subheading1"
    | "subheading2"
    | "body1"
    | "body2";
}
