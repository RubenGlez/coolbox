import Main from "../Main";
import Header from "../Header";
import { layoutContainer } from "./styles.module.scss";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className={layoutContainer}>
      <Header />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
