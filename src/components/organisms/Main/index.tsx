import { ReactNode } from "react";
import { mainContainer } from "./styles.module.scss";

export interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main className={mainContainer}>{children}</main>;
}
