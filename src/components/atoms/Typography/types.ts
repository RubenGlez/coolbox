import { ReactNode } from "react";

export interface MainProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "highlight" | "alt";
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
