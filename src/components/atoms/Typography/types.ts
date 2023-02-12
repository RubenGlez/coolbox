import { ReactNode } from "react";

export interface TypographyProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "active" | "inactive" | "alt";
  align?: "left" | "center" | "right";
  size?: "s" | "m" | "l" | "xl";
  as?: string;
}
