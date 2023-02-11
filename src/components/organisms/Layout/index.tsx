import Main from "../Main";
import Header from "../Header";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./styles";

export default function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </LayoutWrapper>
  );
}
